// src/scripts/editor/editor-caratula.ts

function getFrontmatterData(): Record<string, any> {
  const dataScript = document.getElementById('doc-frontmatter-data');
  if (!dataScript) return {};
  try {
    return JSON.parse(dataScript.textContent || '{}');
  } catch {
    return {};
  }
}

export function updateCoverLivePreview(): void {
  const canvas = document.getElementById('cover-live-canvas');
  if (!canvas) return;

  const data = getFrontmatterData();

  // Estados de Switches
  const showHeader = (document.getElementById('cov-show-header') as HTMLInputElement)?.checked ?? true;
  const showLogo = (document.getElementById('cov-show-logo') as HTMLInputElement)?.checked ?? true;
  const showTitle = (document.getElementById('cov-show-title') as HTMLInputElement)?.checked ?? true;
  const showDocente = (document.getElementById('cov-show-docente') as HTMLInputElement)?.checked ?? true;
  const showIntegrantes = (document.getElementById('cov-show-integrantes') as HTMLInputElement)?.checked ?? true;
  const showPie = (document.getElementById('cov-show-pie') as HTMLInputElement)?.checked ?? true;

  // Parámetros de Escala y Posición Vertical (Y)
  const yHeader = (document.getElementById('pos-y-header') as HTMLInputElement)?.value || '4';
  const yLogo = (document.getElementById('pos-y-logo') as HTMLInputElement)?.value || '22';
  const yTitle = (document.getElementById('pos-y-title') as HTMLInputElement)?.value || '42';
  const yAutores = (document.getElementById('pos-y-autores') as HTMLInputElement)?.value || '64';
  const yPie = (document.getElementById('pos-y-pie') as HTMLInputElement)?.value || '92';

  // Alineaciones
  const alignHeader = (document.getElementById('pos-align-header') as HTMLSelectElement)?.value || 'center';
  const alignTitle = (document.getElementById('pos-align-title') as HTMLSelectElement)?.value || 'center';
  const alignAutores = (document.getElementById('pos-align-autores') as HTMLSelectElement)?.value || 'left';
  const alignPie = (document.getElementById('pos-align-pie') as HTMLSelectElement)?.value || 'center';

  // Tamaños y Formatos
  const logoSizeMm = parseInt((document.getElementById('cov-logosize') as HTMLInputElement)?.value || '38', 10);
  const titleSizePt = parseFloat((document.getElementById('cov-titlesize') as HTMLInputElement)?.value || '14');
  const titleTransform = (document.getElementById('cov-transform') as HTMLSelectElement)?.value || 'uppercase';

  // Conversión proporcional a la miniatura A4
  const scale = 0.42;
  const previewLogoHeight = Math.max(14, Math.round(logoSizeMm * scale * 1.5));
  const previewTitleSize = Math.max(8, Math.round(titleSizePt * scale * 1.6));

  // Metadatos con fallback
  const institucion = data.institucion || 'UNIVERSIDAD NACIONAL DE INGENIERÍA';
  const facultad = data.facultad || 'FACULTAD DE INGENIERÍA MECÁNICA';
  const escuela = data.escuela || 'Escuela Profesional';
  const curso = data.curso || 'CURSO PRINCIPAL';
  const titulo = data.title || 'TÍTULO DEL DOCUMENTO';
  const subtitulo = data.subtitulo || 'Subtítulo del informe o monografía';
  const docente = data.docente || 'Ing. Docente Titular';
  const integrantes = (data.integrantes && data.integrantes.length > 0)
    ? data.integrantes
    : [
        { nombre: 'Estudiante Ejemplo 1', codigo: '20220001A' },
        { nombre: 'Estudiante Ejemplo 2', codigo: '20220002B' }
      ];
  const ciudad = data.ciudad || 'LIMA — PERÚ';
  const anio = data.anio || new Date().getFullYear();

  // Escudo institucional con SVG nítido si no se suministra archivo logo
  const logoHtml = data.logo 
    ? `<img src="${data.logo}" style="max-height: ${previewLogoHeight}px; height: auto; max-width: 80%; object-fit: contain; display: block; margin: 0 auto;" />`
    : `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto;">
        <svg width="${previewLogoHeight}" height="${previewLogoHeight}" viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="max-height: ${previewLogoHeight}px;">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
        </svg>
      </div>
    `;

  canvas.innerHTML = `
    <div style="
      position: relative;
      width: 100%;
      height: 100%;
      background: #ffffff;
      color: #000000;
      font-family: var(--ui-font);
      box-sizing: border-box;
      overflow: hidden;
    ">
      <!-- 1. MEMBRETE INSTITUCIONAL -->
      ${showHeader ? `
        <div style="
          position: absolute;
          top: ${yHeader}%;
          left: 5%;
          width: 90%;
          text-align: ${alignHeader};
          border-bottom: 0.5px solid rgba(0,0,0,0.18);
          padding-bottom: 3px;
        ">
          <div style="font-size: 6.5pt; font-weight: 800; text-transform: uppercase; line-height: 1.15;">${institucion}</div>
          <div style="font-size: 5.5pt; font-weight: 600; margin-top: 1px;">${facultad}</div>
          <div style="font-size: 4.8pt; opacity: 0.8;">${escuela}</div>
        </div>
      ` : ''}

      <!-- 2. ESCUDO / LOGO -->
      ${showLogo ? `
        <div style="
          position: absolute;
          top: ${yLogo}%;
          left: 5%;
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          ${logoHtml}
        </div>
      ` : ''}

      <!-- 3. TÍTULO Y CURSO -->
      ${showTitle ? `
        <div style="
          position: absolute;
          top: ${yTitle}%;
          left: 6%;
          width: 88%;
          text-align: ${alignTitle};
        ">
          ${curso ? `<div style="font-size: 5.5pt; font-weight: 700; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; margin-bottom: 2px;">${curso}</div>` : ''}
          <div style="font-size: ${previewTitleSize}px; font-weight: 800; text-transform:${titleTransform}; line-height: 1.2;">
            ${titulo}
          </div>
          ${subtitulo ? `<div style="font-size: 5pt; font-style: italic; opacity: 0.85; margin-top: 2px;">${subtitulo}</div>` : ''}
        </div>
      ` : ''}

      <!-- 4. DOCENTE Y AUTORES -->
      <div style="
        position: absolute;
        top: ${yAutores}%;
        left: 8%;
        width: 84%;
        text-align: ${alignAutores};
        font-size: 5.8pt;
        line-height: 1.35;
      ">
        ${showDocente ? `
          <div style="margin-bottom: 3px;">
            <strong style="text-transform: uppercase;">Docente:</strong> ${docente}
          </div>
        ` : ''}

        ${showIntegrantes ? `
          <div>
            <strong style="text-transform: uppercase;">Integrantes:</strong>
            <div style="padding-left: 2px; margin-top: 1px;">
              ${integrantes.map((m: any) => `<div>• ${m.nombre} ${m.codigo ? `(${m.codigo})` : ''}</div>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 5. PIE DE PÁGINA -->
      ${showPie ? `
        <div style="
          position: absolute;
          top: ${yPie}%;
          left: 8%;
          width: 84%;
          text-align: ${alignPie};
          font-size: 5.2pt;
          font-weight: 600;
          border-top: 0.5px solid rgba(0,0,0,0.18);
          padding-top: 3px;
        ">
          <span>${ciudad}</span> — <span>${anio}</span>
        </div>
      ` : ''}
    </div>
  `;
}

export function initCaratulaControls(): void {
  // Listeners reactivos de switches y selects
  const changeIds = [
    'cov-show-header', 'cov-show-logo', 'cov-show-title',
    'cov-show-docente', 'cov-show-integrantes', 'cov-show-pie',
    'pos-align-header', 'pos-align-title', 'pos-align-autores', 'pos-align-pie',
    'cov-transform'
  ];

  changeIds.forEach(id => {
    document.getElementById(id)?.addEventListener('change', updateCoverLivePreview);
  });

  // Listeners reactivos para sliders de posición vertical (Y)
  const rangeBindings = [
    { id: 'pos-y-header', valId: 'val-y-header', unit: '%' },
    { id: 'pos-y-logo', valId: 'val-y-logo', unit: '%' },
    { id: 'pos-y-title', valId: 'val-y-title', unit: '%' },
    { id: 'pos-y-autores', valId: 'val-y-autores', unit: '%' },
    { id: 'pos-y-pie', valId: 'val-y-pie', unit: '%' },
    { id: 'cov-logosize', valId: 'val-logosize', unit: ' mm' },
    { id: 'cov-titlesize', valId: 'val-titlesize', unit: ' pt' }
  ];

  rangeBindings.forEach(({ id, valId, unit }) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    const label = document.getElementById(valId);
    input?.addEventListener('input', () => {
      if (label) label.textContent = `${input.value}${unit}`;
      updateCoverLivePreview();
    });
  });
}