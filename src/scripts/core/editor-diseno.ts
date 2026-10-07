// src/scripts/core/editor-diseno.ts

export function setupEditorDrawer(): void {
  const drawer = document.getElementById('editor-diseno-drawer');
  const closeBtn = document.getElementById('btn-close-editor');
  const root = document.documentElement;
  if (!drawer) return;

  // 1. Alternar visibilidad del cajón
  function toggleDrawer(open?: boolean): void {
    const isCurrentlyActive = drawer?.classList.contains('is-open');
    const shouldOpen = open !== undefined ? open : !isCurrentlyActive;

    if (shouldOpen) {
      drawer?.classList.add('is-open');
      drawer?.setAttribute('aria-hidden', 'false');
      updateCoverLivePreview();
    } else {
      drawer?.classList.remove('is-open');
      drawer?.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeBtn) closeBtn.onclick = () => toggleDrawer(false);
  window.addEventListener('toggle-editor-drawer', () => toggleDrawer());

  // 2. Navegación por pestañas
  const tabs = drawer.querySelectorAll<HTMLButtonElement>('.tab-btn');
  const contents = drawer.querySelectorAll<HTMLElement>('.tab-content');

  tabs.forEach(btn => {
    btn.onclick = () => {
      tabs.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      if (targetId) {
        document.getElementById(targetId)?.classList.add('active');
        if (targetId === 'tab-caratula') updateCoverLivePreview();
      }
    };
  });

  // 3. Conmutador de modo claro / oscuro
  const btnClaro = document.getElementById('btn-mode-claro');
  const btnOscuro = document.getElementById('btn-mode-oscuro');

  btnClaro?.addEventListener('click', () => {
    btnClaro.classList.add('active');
    btnOscuro?.classList.remove('active');
    root.setAttribute('data-modo', 'claro');
    window.dispatchEvent(new Event('theme-changed'));
  });

  btnOscuro?.addEventListener('click', () => {
    btnOscuro.classList.add('active');
    btnClaro?.classList.remove('active');
    root.setAttribute('data-modo', 'oscuro');
    window.dispatchEvent(new Event('theme-changed'));
  });

  // 4. Tipografía base y jerarquía H1 - H6
  const fontDoc = document.getElementById('font-doc') as HTMLSelectElement | null;
  if (fontDoc) {
    fontDoc.onchange = () => {
      root.style.setProperty('--doc-font', fontDoc.value);
    };
  }

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
    const fontSel = document.getElementById(`font-${tag}`) as HTMLSelectElement | null;
    if (fontSel) {
      fontSel.onchange = () => {
        root.style.setProperty(`--font-${tag}`, fontSel.value);
      };
    }

    const alignSel = document.getElementById(`align-${tag}`) as HTMLSelectElement | null;
    if (alignSel) {
      alignSel.onchange = () => {
        root.style.setProperty(`--align-${tag}`, alignSel.value);
      };
    }

    const borderCheck = document.getElementById(`border-${tag}`) as HTMLInputElement | null;
    if (borderCheck) {
      borderCheck.onchange = () => {
        root.style.setProperty(
          `--border-${tag}`,
          borderCheck.checked ? '1px solid var(--border-color)' : 'none'
        );
      };
    }
  });

  // 5. Sliders numéricos
  const sliderBindings: { id: string; valId: string; cssVar: string; unit: string }[] = [
    { id: 'size-h1', valId: 'val-h1', cssVar: '--h1-size', unit: 'rem' },
    { id: 'size-h2', valId: 'val-h2', cssVar: '--h2-size', unit: 'rem' },
    { id: 'geo-lineheight', valId: 'val-lineheight', cssVar: '--doc-line-height', unit: '' }
  ];

  sliderBindings.forEach(({ id, valId, cssVar, unit }) => {
    const slider = document.getElementById(id) as HTMLInputElement | null;
    const valSpan = document.getElementById(valId);
    if (!slider || !valSpan) return;

    slider.oninput = () => {
      const val = `${slider.value}${unit}`;
      valSpan.textContent = val;
      root.style.setProperty(cssVar, val);
    };
  });

  // 6. Selectores de Color
  const colorBindings: { id: string; hexId: string; cssVar: string }[] = [
    { id: 'col-bg', hexId: 'hex-bg', cssVar: '--bg-color' },
    { id: 'col-header', hexId: 'hex-header', cssVar: '--header-bg' },
    { id: 'col-border', hexId: 'hex-border', cssVar: '--border-color' },
    { id: 'col-accent', hexId: 'hex-accent', cssVar: '--accent-color' },
    { id: 'col-text', hexId: 'hex-text', cssVar: '--text-color' },
    { id: 'col-bold', hexId: 'hex-bold', cssVar: '--color-negrita' },
    { id: 'col-italic', hexId: 'hex-italic', cssVar: '--color-cursiva' },
    { id: 'col-link', hexId: 'hex-link', cssVar: '--link-color' },
    { id: 'col-h1', hexId: '', cssVar: '--color-h1' },
    { id: 'col-h2', hexId: '', cssVar: '--color-h2' },
    { id: 'col-katex', hexId: 'hex-katex', cssVar: '--color-math' },
    { id: 'col-mark', hexId: 'hex-mark', cssVar: '--color-resaltado-bg' }
  ];

  colorBindings.forEach(({ id, hexId, cssVar }) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    const hexSpan = hexId ? document.getElementById(hexId) : null;
    if (!input) return;

    input.oninput = () => {
      const val = input.value;
      if (hexSpan) hexSpan.textContent = val;
      root.style.setProperty(cssVar, cssVar === '--color-resaltado-bg' ? `${val}44` : val);
      if (cssVar === '--accent-color') {
        root.style.setProperty('--accent-subtle', `${val}22`);
      }
    };
  });

  // 7. Tokens específicos de Mermaid con re-render
  const bindMermaidInput = (id: string, cssVars: string[]) => {
    const el = document.getElementById(id) as HTMLInputElement | null;
    if (!el) return;
    el.oninput = () => {
      cssVars.forEach(v => root.style.setProperty(v, el.value));
      window.dispatchEvent(new Event('theme-changed'));
    };
  };

  bindMermaidInput('col-mm-flow-bg', ['--mm-flow-bg']);
  bindMermaidInput('col-mm-flow-line', ['--mm-flow-line', '--mm-flow-border']);
  bindMermaidInput('col-mm-er-header', ['--mm-er-header-bg']);
  bindMermaidInput('col-mm-er-border', ['--mm-er-border', '--mm-er-line']);

  // 8. Sangría y alineación de párrafos
  const geoIndent = document.getElementById('geo-indent') as HTMLInputElement | null;
  const valIndent = document.getElementById('val-indent');
  if (geoIndent && valIndent) {
    geoIndent.oninput = () => {
      const val = `${geoIndent.value}cm`;
      valIndent.textContent = val;
      root.style.setProperty('--para-indent', val);
    };
  }

  const geoAlign = document.getElementById('geo-align') as HTMLSelectElement | null;
  if (geoAlign) {
    geoAlign.onchange = () => {
      root.style.setProperty('--para-align', geoAlign.value);
    };
  }

  // 9. Vista previa de carátula en vivo
  function updateCoverLivePreview(): void {
    const canvas = document.getElementById('cover-live-canvas');
    if (!canvas) return;

    const dataScript = document.getElementById('doc-frontmatter-data');
    let data: Record<string, any> = {};
    if (dataScript) {
      try { data = JSON.parse(dataScript.textContent || '{}'); } catch {}
    }

    const align = (document.getElementById('cov-align') as HTMLSelectElement)?.value || 'center';
    const logoSize = parseInt((document.getElementById('cov-logosize') as HTMLInputElement)?.value || '40', 10);
    const titleSizePt = parseFloat((document.getElementById('cov-titlesize') as HTMLInputElement)?.value || '14');
    const titleTransform = (document.getElementById('cov-transform') as HTMLSelectElement)?.value || 'uppercase';

    const showLogo = (document.getElementById('cov-show-logo') as HTMLInputElement)?.checked ?? true;
    const showDocente = (document.getElementById('cov-show-docente') as HTMLInputElement)?.checked ?? true;
    const showIntegrantes = (document.getElementById('cov-show-integrantes') as HTMLInputElement)?.checked ?? true;
    const showPie = (document.getElementById('cov-show-pie') as HTMLInputElement)?.checked ?? true;

    const scaleFactor = 0.42;
    const previewLogoHeight = Math.max(12, Math.round(logoSize * scaleFactor * 1.5));
    const previewTitleSize = Math.max(8, Math.round(titleSizePt * scaleFactor * 1.6));

    const institucion = data.institucion || 'UNIVERSIDAD NACIONAL DE INGENIERÍA';
    const facultad = data.facultad || 'FACULTAD DE INGENIERÍA MECÁNICA';
    const escuela = data.escuela || 'Escuela Profesional';
    const logo = data.logo || '';
    const curso = data.curso || '';
    const titulo = data.title || 'TÍTULO DEL DOCUMENTO';
    const subtitulo = data.subtitulo || '';
    const docente = data.docente || '';
    const integrantes = data.integrantes || [];
    const autor = data.author || '';
    const ciudad = data.ciudad || 'LIMA — PERÚ';
    const anio = data.anio || new Date().getFullYear();

    let bloqueAutoria = '';
    if (showIntegrantes && integrantes.length > 0) {
      bloqueAutoria = `
        <div style="font-size: 6pt; line-height: 1.3; margin: 2px 0;">
          <strong>INTEGRANTES:</strong><br/>
          ${integrantes.slice(0, 3).map((m: any) => `<span>• ${m.nombre}</span><br/>`).join('')}
          ${integrantes.length > 3 ? `<span>... y ${integrantes.length - 3} más</span>` : ''}
        </div>
      `;
    } else if (showIntegrantes && autor) {
      bloqueAutoria = `<div style="font-size: 6.5pt;"><strong>AUTOR:</strong> ${autor}</div>`;
    }

    canvas.innerHTML = `
      <div style="
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: ${align};
        color: #000000;
        font-family: var(--ui-font);
        padding: 8px 12px;
        box-sizing: border-box;
      ">
        <div style="border-bottom: 0.5px solid rgba(0,0,0,0.15); padding-bottom: 3px;">
          <div style="font-size: 6.5pt; font-weight: 800; text-transform: uppercase;">${institucion}</div>
          <div style="font-size: 5.5pt; font-weight: 600;">${facultad}</div>
          <div style="font-size: 5pt; opacity: 0.8;">${escuela}</div>
        </div>

        ${showLogo ? `
          <div style="text-align: center; margin: 4px auto;">
            ${logo ? `<img src="${logo}" style="max-height: ${previewLogoHeight}px; height: auto; object-fit: contain;" />` 
                   : `<div style="width: 28px; height: 28px; border: 1px dashed #64748b; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 5pt; color: #64748b;">LOGO</div>`}
          </div>
        ` : '<div></div>'}

        <div style="margin: 4px 0;">
          ${curso ? `<div style="font-size: 5.5pt; font-weight: 700; text-transform: uppercase; color: #475569;">${curso}</div>` : ''}
          <div style="font-size: ${previewTitleSize}px; font-weight: 800; text-transform: ${titleTransform}; line-height: 1.2;">
            ${titulo}
          </div>
          ${subtitulo ? `<div style="font-size: 5.5pt; font-style: italic; opacity: 0.85; margin-top: 2px;">${subtitulo}</div>` : ''}
        </div>

        <div>
          ${showDocente && docente ? `<div style="font-size: 6pt; margin-bottom: 2px;"><strong>DOCENTE:</strong> ${docente}</div>` : ''}
          ${bloqueAutoria}
        </div>

        ${showPie ? `
          <div style="font-size: 5.5pt; border-top: 0.5px solid rgba(0,0,0,0.15); padding-top: 3px;">
            ${ciudad ? `<span>${ciudad}</span> — ` : ''}<span>${anio}</span>
          </div>
        ` : '<div></div>'}
      </div>
    `;
  }

  ['cov-align', 'cov-transform', 'cov-show-logo', 'cov-show-docente', 'cov-show-integrantes', 'cov-show-pie'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', updateCoverLivePreview);
  });

  document.getElementById('cov-logosize')?.addEventListener('input', (e) => {
    const val = (e.target as HTMLInputElement).value;
    const lbl = document.getElementById('val-logosize');
    if (lbl) lbl.textContent = `${val} mm`;
    updateCoverLivePreview();
  });

  document.getElementById('cov-titlesize')?.addEventListener('input', (e) => {
    const val = (e.target as HTMLInputElement).value;
    const lbl = document.getElementById('val-titlesize');
    if (lbl) lbl.textContent = `${val} pt`;
    updateCoverLivePreview();
  });

  // 10. Funciones de Exportación a JSON
  function notificarCopiado(btn: HTMLButtonElement, textoOriginal: string): void {
    btn.textContent = '✓ ¡Copiado al Portapapeles!';
    btn.style.backgroundColor = '#10b981';
    setTimeout(() => {
      btn.textContent = textoOriginal;
      btn.style.backgroundColor = '';
    }, 1800);
  }

  const btnExpEstilo = document.getElementById('btn-export-estilo') as HTMLButtonElement | null;
  if (btnExpEstilo) {
    btnExpEstilo.onclick = async () => {
      const name = (document.getElementById('ed-style-name') as HTMLInputElement)?.value || 'Nuevo Estilo';
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const modoActual = root.getAttribute('data-modo') || 'claro';

      const jsonEstilo = {
        [id]: {
          id,
          nombre: name,
          tipografia: {
            fuenteCuerpo: (document.getElementById('font-doc') as HTMLSelectElement)?.value || "system-ui, -apple-system, sans-serif",
            fuenteTitulos: "system-ui, -apple-system, sans-serif",
            tamanoBase: "16px",
            interlineado: (document.getElementById('geo-lineheight') as HTMLInputElement)?.value || "1.65"
          },
          [modoActual]: {
            acento: (document.getElementById('col-accent') as HTMLInputElement)?.value || "#8b5cf6",
            acentoSubtle: `${(document.getElementById('col-accent') as HTMLInputElement)?.value || "#8b5cf6"}22`,
            superficies: {
              fondoPrincipal: (document.getElementById('col-bg') as HTMLInputElement)?.value || "#ffffff",
              fondoSecundario: (document.getElementById('col-header') as HTMLInputElement)?.value || "#f8fafc",
              fondoTarjetas: (document.getElementById('col-header') as HTMLInputElement)?.value || "#f8fafc",
              borde: (document.getElementById('col-border') as HTMLInputElement)?.value || "#e2e8f0"
            },
            textos: {
              principal: (document.getElementById('col-text') as HTMLInputElement)?.value || "#0f172a",
              negrita: (document.getElementById('col-bold') as HTMLInputElement)?.value || "#020617",
              cursiva: (document.getElementById('col-italic') as HTMLInputElement)?.value || "#16a34a",
              enlace: (document.getElementById('col-link') as HTMLInputElement)?.value || "#2563eb",
              math: (document.getElementById('col-katex') as HTMLInputElement)?.value || "#0f172a"
            },
            encabezados: {
              h1: {
                color: (document.getElementById('col-h1') as HTMLInputElement)?.value || "#15803d",
                tamano: `${(document.getElementById('size-h1') as HTMLInputElement)?.value || "2.2"}rem`,
                fuente: (document.getElementById('font-h1') as HTMLSelectElement)?.value || "var(--title-font)",
                alineacion: (document.getElementById('align-h1') as HTMLSelectElement)?.value || "left",
                bordeInferior: (document.getElementById('border-h1') as HTMLInputElement)?.checked ?? true
              },
              h2: {
                color: (document.getElementById('col-h2') as HTMLInputElement)?.value || "#0f766e",
                tamano: `${(document.getElementById('size-h2') as HTMLInputElement)?.value || "1.8"}rem`,
                fuente: (document.getElementById('font-h2') as HTMLSelectElement)?.value || "var(--title-font)",
                alineacion: (document.getElementById('align-h2') as HTMLSelectElement)?.value || "left",
                bordeInferior: (document.getElementById('border-h2') as HTMLInputElement)?.checked ?? false
              }
            }
          }
        }
      };

      await navigator.clipboard.writeText(JSON.stringify(jsonEstilo, null, 2));
      notificarCopiado(btnExpEstilo, '📋 Copiar JSON para estilos-base.json');
    };
  }

  const btnExpGeo = document.getElementById('btn-export-geometria') as HTMLButtonElement | null;
  if (btnExpGeo) {
    btnExpGeo.onclick = async () => {
      const name = (document.getElementById('ed-geo-name') as HTMLInputElement)?.value || 'Nueva Plantilla';
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

      const jsonGeo = {
        [id]: {
          id,
          nombre: name,
          descripcion: "Geometría editorial generada desde el inspector.",
          pagina: {
            formato: "A4",
            margenSuperior: "2.54cm",
            margenInferior: "2.54cm",
            margenIzquierdo: "2.54cm",
            margenDerecho: "2.54cm"
          },
          parrafo: {
            sangriaPrimeraLinea: `${(document.getElementById('geo-indent') as HTMLInputElement)?.value || "0"}cm`,
            interlineado: (document.getElementById('geo-lineheight') as HTMLInputElement)?.value || "1.65",
            alineacion: (document.getElementById('geo-align') as HTMLSelectElement)?.value || "left"
          },
          tipografia: {
            tamanoCuerpo: "11pt",
            fuentePapel: "system-ui, -apple-system, sans-serif"
          }
        }
      };

      await navigator.clipboard.writeText(JSON.stringify(jsonGeo, null, 2));
      notificarCopiado(btnExpGeo, '📋 Copiar JSON para plantillas-impresion.json');
    };
  }

  const btnExpCov = document.getElementById('btn-export-caratula') as HTMLButtonElement | null;
  if (btnExpCov) {
    btnExpCov.onclick = async () => {
      const name = (document.getElementById('ed-cover-name') as HTMLInputElement)?.value || 'Nuevo Modelo';
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

      const jsonCov = {
        [id]: {
          id,
          nombre: name,
          alineacion: (document.getElementById('cov-align') as HTMLSelectElement)?.value || "center",
          logo: {
            altoMaximoMm: parseInt((document.getElementById('cov-logosize') as HTMLInputElement)?.value || "40", 10),
            mostrar: (document.getElementById('cov-show-logo') as HTMLInputElement)?.checked ?? true
          },
          titulo: {
            tamanoPt: parseFloat((document.getElementById('cov-titlesize') as HTMLInputElement)?.value || "14"),
            transformacion: (document.getElementById('cov-transform') as HTMLSelectElement)?.value || "uppercase"
          },
          mostrarDocente: (document.getElementById('cov-show-docente') as HTMLInputElement)?.checked ?? true,
          mostrarIntegrantes: (document.getElementById('cov-show-integrantes') as HTMLInputElement)?.checked ?? true,
          mostrarPie: (document.getElementById('cov-show-pie') as HTMLInputElement)?.checked ?? true
        }
      };

      await navigator.clipboard.writeText(JSON.stringify(jsonCov, null, 2));
      notificarCopiado(btnExpCov, '📋 Copiar JSON para caratulas.json');
    };
  }
}