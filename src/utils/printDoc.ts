// src/utils/printDoc.ts
import caratulasData from '../config/caratulas.json';
import plantillasData from '../config/plantillas-impresion.json';

export interface OpcionesImpresion {
  estiloId: string;
  plantillaId: string;
  caratulaId: string;
  cierreId: string;
  hojaRespeto: boolean;
  mostrarIndice: boolean;
  formatoHoja: 'A4' | 'Carta';
  margenSuperior: string;
  margenInferior: string;
  margenLateral: string;
}

/** Ensambla el HTML de una hoja de carátula o cierre usando datos del YAML y el modelo del JSON posicional */
export function renderizarHojaCaratula(data: Record<string, any>, modeloId: string, esCierre = false): string {
  if (!modeloId || modeloId === 'ninguna') return '';
  const modelo = (caratulasData as Record<string, any>)[modeloId];
  if (!modelo) return '';

  const institucion = data.institucion || 'UNIVERSIDAD NACIONAL DE INGENIERÍA';
  const facultad = data.facultad || 'FACULTAD DE INGENIERÍA MECÁNICA';
  const escuela = data.escuela || 'Escuela Profesional';
  const logo = data.logo || '';
  const curso = data.curso || '';
  const titulo = data.title || 'DOCUMENTO SIN TÍTULO';
  const subtitulo = data.subtitulo || '';
  const docente = data.docente || '';
  const integrantes = data.integrantes || [];
  const autor = data.author || '';
  const codigo = data.codigo || '';
  const ciudad = data.ciudad || 'LIMA — PERÚ';
  const anio = data.anio || new Date().getFullYear();

  // Posiciones porcentuales (con fallbacks si el JSON es de formato antiguo)
  const yHeader = modelo.zonas?.membreteY ?? modelo.posHeaderY ?? '4';
  const yLogo = modelo.zonas?.logoY ?? modelo.posLogoY ?? '22';
  const yTitle = modelo.zonas?.tituloY ?? modelo.posTitleY ?? '42';
  const yAutores = modelo.zonas?.autoresY ?? modelo.posAutoresY ?? '64';
  const yPie = modelo.zonas?.pieY ?? modelo.posPieY ?? '92';

  // Alineaciones
  const alignHeader = modelo.zonas?.membreteAlign || 'center';
  const alignTitle = modelo.zonas?.tituloAlign || 'center';
  const alignAutores = modelo.zonas?.autoresAlign || 'left';
  const alignPie = modelo.zonas?.pieAlign || 'center';

  const logoSize = modelo.logo?.altoMaximoMm || 38;
  const mostrarLogo = modelo.logo?.mostrar !== false;
  const titleSizePt = modelo.titulo?.tamanoPt || 14;
  const titleTransform = modelo.titulo?.transformacion || 'uppercase';

  // Fallback del escudo si no hay archivo de imagen
  const logoHtml = logo
    ? `<img src="${logo}" alt="Logo" style="max-height: ${logoSize}mm !important; height: auto !important; width: auto !important; max-width: 80% !important; margin: 0 auto; object-fit: contain; background: transparent !important;" />`
    : `
      <svg width="${logoSize * 2.8}" height="${logoSize * 2.8}" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="max-height: ${logoSize}mm;">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M12 8v4"/>
        <path d="M12 16h.01"/>
      </svg>
    `;

  let bloqueAutoria = '';
  if (modelo.mostrarIntegrantes && integrantes.length > 0) {
    bloqueAutoria = `
      <div style="font-size: 10pt; line-height: 1.4; color: #000000;">
        <strong style="text-transform: uppercase;">${esCierre ? 'EQUIPO RESPONSABLE:' : 'INTEGRANTES:'}</strong>
        <div style="margin-top: 3px;">
          ${integrantes.map((m: any) => `<div>• ${m.nombre}${m.codigo ? ` (${m.codigo})` : ''}${m.rol ? ` — <em>${m.rol}</em>` : ''}</div>`).join('')}
        </div>
      </div>
    `;
  } else if (modelo.mostrarIntegrantes && autor) {
    bloqueAutoria = `
      <div style="font-size: 10pt; color: #000000;">
        <strong>AUTOR:</strong> ${autor} ${codigo ? `(${codigo})` : ''}
      </div>
    `;
  }

  return `
    <div class="report-cover-page ${esCierre ? 'report-closing-page' : ''}" style="
      page-break-before: ${esCierre ? 'always' : 'avoid'} !important;
      break-before: ${esCierre ? 'page' : 'avoid'} !important;
      page-break-after: always !important;
      break-after: page !important;
      position: relative !important;
      width: 100% !important;
      height: 100% !important;
      min-height: 270mm !important;
      box-sizing: border-box !important;
      background: #ffffff !important;
      color: #000000 !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
    ">
      <!-- 1. Membrete Institucional -->
      <div style="
        position: absolute;
        top: ${yHeader}%;
        left: 5%;
        width: 90%;
        text-align: ${alignHeader};
        border-bottom: 0.5pt solid #000000;
        padding-bottom: 4px;
      ">
        <h2 style="font-size: 11pt; font-weight: 800; text-transform: uppercase; margin: 0; color: #000000;">${institucion}</h2>
        ${facultad ? `<p style="font-size: 9.5pt; font-weight: 700; margin: 2px 0 0 0; color: #000000;">${facultad}</p>` : ''}
        ${escuela ? `<p style="font-size: 8.5pt; opacity: 0.85; margin: 1px 0 0 0; color: #000000;">${escuela}</p>` : ''}
      </div>

      <!-- 2. Logo / Escudo -->
      ${mostrarLogo ? `
        <div style="
          position: absolute;
          top: ${yLogo}%;
          left: 5%;
          width: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        ">
          ${logoHtml}
        </div>
      ` : ''}

      <!-- 3. Título Central -->
      <div style="
        position: absolute;
        top: ${yTitle}%;
        left: 6%;
        width: 88%;
        text-align: ${alignTitle};
      ">
        ${curso ? `<p style="font-size: 9.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 4px 0; color: #334155;">${curso}</p>` : ''}
        <h1 style="font-size: ${titleSizePt}pt !important; text-transform: ${titleTransform}; font-weight: 800; line-height: 1.25; margin: 0; color: #000000;">
          ${titulo}
        </h1>
        ${subtitulo ? `<p style="font-size: 9.5pt; font-style: italic; margin: 4px 0 0 0; opacity: 0.85; color: #000000;">${subtitulo}</p>` : ''}
      </div>

      <!-- 4. Docente y Autores -->
      <div style="
        position: absolute;
        top: ${yAutores}%;
        left: 8%;
        width: 84%;
        text-align: ${alignAutores};
      ">
        ${modelo.mostrarDocente && docente ? `
          <div style="font-size: 9.5pt; margin-bottom: 5px; color: #000000;">
            <strong style="text-transform: uppercase;">Docente:</strong> ${docente}
          </div>
        ` : ''}
        ${bloqueAutoria}
      </div>

      <!-- 5. Pie de Página -->
      ${modelo.mostrarPie ? `
        <div style="
          position: absolute;
          top: ${yPie}%;
          left: 8%;
          width: 84%;
          text-align: ${alignPie};
          font-size: 9pt;
          font-weight: 600;
          border-top: 0.5pt solid #000000;
          padding-top: 4px;
        ">
          ${ciudad ? `<span>${ciudad}</span> — ` : ''}<span>${anio}</span>
        </div>
      ` : ''}
    </div>
  `;
}

/** Ensambla el índice formal dinámico si el usuario lo solicita */
function generarHtmlIndice(): string {
  const headings = Array.from(document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3'));
  if (headings.length === 0) return '';

  const items = headings.map((h) => {
    const text = h.textContent?.trim() || '';
    const tag = h.tagName.toLowerCase();
    const depth = tag === 'h1' ? 1 : tag === 'h2' ? 2 : 3;
    const indent = depth === 1 ? '0' : depth === 2 ? '1.25rem' : '2.25rem';
    const weight = depth === 1 ? '700' : depth === 2 ? '600' : '400';

    return `
      <li style="margin-bottom: 0.35rem; padding-left: ${indent}; font-weight: ${weight}; display: flex; justify-content: space-between; align-items: baseline;">
        <span style="flex-shrink: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;">${text}</span>
        <span style="flex-grow: 1; margin: 0 0.5rem; border-bottom: 1.5px dotted #000000; opacity: 0.4;"></span>
        <span style="font-weight: 600;">—</span>
      </li>
    `;
  }).join('');

  return `
    <div class="report-toc-page" style="
      page-break-before: always !important;
      break-before: page !important;
      page-break-after: always !important;
      break-after: page !important;
      background: #ffffff !important;
      color: #000000 !important;
      padding: 0 !important;
      margin: 0 0 1.5rem 0 !important;
      width: 100%;
    ">
      <h2 style="text-align: center; font-size: 13pt; font-weight: 800; text-transform: uppercase; margin: 0 0 1.5rem 0 !important; color: #000000;">ÍNDICE</h2>
      <ul style="list-style: none !important; padding: 0 !important; margin: 0 !important; width: 100%;">
        ${items}
      </ul>
    </div>
  `;
}

/** Dispara la impresión física aislando el DOM en un iframe en blanco puro */
export async function ejecutarImpresionAislada(opts: OpcionesImpresion): Promise<void> {
  const contentEl = document.querySelector('#document-view .markdown-body') || document.querySelector('.markdown-body');
  if (!contentEl) return;

  const dataScript = document.getElementById('doc-frontmatter-data');
  let dataYaml: Record<string, any> = {};
  if (dataScript) {
    try {
      dataYaml = JSON.parse(dataScript.textContent || '{}');
    } catch {
      dataYaml = {};
    }
  }

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = 'none';
  iframe.style.visibility = 'hidden';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) return;

  // Inyectar hojas externas Y hojas de estilos locales compiladas por Vite/Astro
  let estilosDocumento = '';
  document.querySelectorAll('link[rel="stylesheet"], style').forEach((node: any) => {
    estilosDocumento += node.outerHTML;
  });

  const htmlRespeto = opts.hojaRespeto ? `
    <div style="page-break-before: avoid !important; break-before: avoid !important; page-break-after: always !important; break-after: page !important; height: 100%; min-height: 200mm; background: #ffffff !important;"></div>
  ` : '';
  const htmlCaratula = renderizarHojaCaratula(dataYaml, opts.caratulaId, false);
  const htmlIndice = opts.mostrarIndice ? generarHtmlIndice() : '';
  const htmlCierre = renderizarHojaCaratula(dataYaml, opts.cierreId, true);

  const plantilla = (plantillasData as Record<string, any>)[opts.plantillaId]?.parrafo || {};
  const sangria = plantilla.sangriaPrimeraLinea || '0cm';
  const alineacion = plantilla.alineacion || 'left';
  const interlineado = plantilla.interlineado || '1.6';

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="es" data-modo="claro" data-estilo="${opts.estiloId}">
      <head>
        <meta charset="utf-8" />
        <title>${document.title}</title>
        ${estilosDocumento}
        <style>
          @page {
            size: ${opts.formatoHoja};
            margin-top: ${opts.margenSuperior};
            margin-bottom: ${opts.margenInferior};
            margin-left: ${opts.margenLateral};
            margin-right: ${opts.margenLateral};
          }
          *, *::before, *::after {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            box-sizing: border-box !important;
          }
          .main-content::after,
          .sticky-panel::after,
          body::after,
          html::after {
            display: none !important;
            content: none !important;
            height: 0 !important;
          }

          html, body {
            background-color: #ffffff !important;
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            height: auto !important;
            min-height: 100% !important;
            overflow: visible !important;
            font-size: 11pt !important;
          }

          .content-wrapper, 
          .markdown-body, 
          #document-view {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .markdown-body h1,
          .markdown-body h2,
          .markdown-body h3,
          .markdown-body h4,
          .markdown-body h5,
          .markdown-body h6 {
            scroll-margin-top: 0 !important;
            color: #000000 !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }

          .markdown-body h1 {
            margin-top: 1.2rem !important;
            margin-bottom: 0.5rem !important;
          }

          .markdown-body h2 {
            margin-top: 1rem !important;
            margin-bottom: 0.4rem !important;
          }

          .markdown-body > *:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }

          .markdown-body p {
            color: #000000 !important;
            margin-top: 0 !important;
            margin-bottom: 0.65rem !important;
            text-indent: ${sangria} !important;
            text-align: ${alineacion} !important;
            line-height: ${interlineado} !important;
          }

          /* Ocultar elementos web interactivos */
          .doc-report-header,
          .activity-bar, .left-sidebar-panel, .independent-panel,
          .mobile-bottom-bar, .mobile-drawer, .mobile-drawer-backdrop,
          .breadcrumbs, .doc-nav, .nav-divider, .zen-exit-btn,
          .copy-code-btn, .code-toolbar, .code-block-header, .img-toolbar,
          .mermaid-toolbar, .editor-drawer {
            display: none !important;
          }

          table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin: 1rem auto !important;
            page-break-inside: avoid !important;
          }
          pre.astro-code {
            background-color: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            page-break-inside: avoid !important;
          }
          .mermaid-wrapper {
            max-width: 100% !important;
            border: 1px solid #cbd5e1 !important;
            background: #ffffff !important;
            display: flex !important;
            justify-content: center !important;
            margin: 1rem 0 !important;
            page-break-inside: avoid !important;
          }
          hr {
            display: block !important;
            border: none !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            visibility: hidden !important;
            page-break-before: always !important;
            break-before: page !important;
          }
        </style>
      </head>
      <body>
        <div class="content-wrapper">
          ${htmlRespeto}
          ${htmlCaratula}
          ${htmlIndice}
          <div class="markdown-body">
            ${contentEl.innerHTML}
          </div>
          ${htmlCierre}
        </div>
      </body>
    </html>
  `);
  doc.close();

  if (iframe.contentWindow?.document?.fonts) {
    await iframe.contentWindow.document.fonts.ready;
  }

  iframe.contentWindow?.focus();
  setTimeout(() => {
    iframe.contentWindow?.print();
    setTimeout(() => {
      iframe.remove();
    }, 1500);
  }, 350);
}