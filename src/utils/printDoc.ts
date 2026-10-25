// src/utils/printDoc.ts

export interface OpcionesImpresion {
  estiloId: string;
  formatoHoja: 'A4' | 'Carta';
  margenSuperior: string;
  margenInferior: string;
  margenLateral: string;
}

/** Dispara la impresión física aislando el DOM en un iframe limpio y forzando modo claro */
export async function ejecutarImpresionAislada(opts: OpcionesImpresion): Promise<void> {
  const contentEl = document.querySelector('#document-view .markdown-body') || document.querySelector('.markdown-body') || document.querySelector('.content-wrapper');
  if (!contentEl) {
    window.print();
    return;
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

  let estilosDocumento = '';
  document.querySelectorAll('link[rel="stylesheet"], style').forEach((node: any) => {
    estilosDocumento += node.outerHTML;
  });

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
          html, body {
            background-color: #ffffff !important;
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            font-size: 11pt !important;
            font-family: system-ui, -apple-system, sans-serif !important;
          }
          .content-wrapper, 
          .markdown-body, 
          #document-view {
            background: #ffffff !important;
            color: #000000 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #000000 !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          p {
            color: #000000 !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.6 !important;
          }
          /* Ocultar elementos de interfaz en la copia impresa */
          .activity-bar, .left-sidebar-panel, .independent-panel,
          .mobile-bottom-bar, .mobile-drawer, .mobile-drawer-backdrop,
          .breadcrumbs, .doc-nav, .nav-divider, .zen-exit-btn,
          .copy-code-btn, .code-toolbar, .code-block-header, .img-toolbar,
          .mermaid-toolbar, .editor-drawer, .btn-exit {
            display: none !important;
          }
          table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin: 1rem auto !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          th, td {
            border: 1px solid #cbd5e1 !important;
            padding: 0.5rem !important;
            text-align: left !important;
          }
          pre.astro-code {
            background-color: #f8fafc !important;
            border: 1px solid #cbd5e1 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            padding: 1rem !important;
            border-radius: 6px !important;
          }
          .mermaid-wrapper {
            max-width: 100% !important;
            border: 1px solid #cbd5e1 !important;
            background: #ffffff !important;
            display: flex !important;
            justify-content: center !important;
            margin: 1rem 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          /* SALTO DE PÁGINA OBLIGATORIO CON --- (HR) */
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
          <div class="markdown-body">
            ${contentEl.innerHTML}
          </div>
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
    }, 2000);
  }, 500);
}