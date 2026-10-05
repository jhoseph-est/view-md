// src/utils/printDoc.ts

export async function imprimirConIframeAislado() {
  const content = document.querySelector('#document-view') || document.querySelector('.markdown-body');
  if (!content) return;

  const isInforme = document.documentElement.getAttribute('data-estilo') === 'informe';

  // 1. Crear iframe invisible
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

  // 2. Extraer tipografías y KaTeX
  let estilosExternos = '';
  document.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
    // Excluir estilos de temas oscuros si existen
    estilosExternos += node.outerHTML;
  });

  // 3. Escribir documento blanco editorial puro
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="es" data-modo="claro" data-estilo="${isInforme ? 'informe' : 'moderno'}">
      <head>
        <meta charset="utf-8" />
        <title>${document.title}</title>
        ${estilosExternos}
        <style>
          @page {
            size: auto;
            margin: ${isInforme ? '2.54cm' : '1.8cm 1.5cm'};
          }

          *, *::before, *::after {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }

          /* --- RESET DE BLANCO PURO Y TEXTO NEGRO --- */
          html, body, 
          .content-wrapper, 
          .markdown-body, 
          #document-view,
          .report-cover-page,
          .report-toc-page {
            background-color: #ffffff !important;
            background: #ffffff !important;
            color: #0f172a !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            min-height: 100% !important;
            overflow: visible !important;
            font-size: ${isInforme ? '12pt' : '11pt'} !important;
            font-family: ${isInforme ? "'Times New Roman', Times, serif" : "system-ui, -apple-system, sans-serif"} !important;
          }

          /* Asegurar que la carátula sea 100% fondo blanco */
          .report-cover-page,
          .report-cover-page * {
            background: #ffffff !important;
            background-color: #ffffff !important;
            color: #000000 !important;
          }

          .report-cover-page img,
          .report-cover-page svg {
            background: transparent !important;
            background-color: transparent !important;
          }

          /* Ocultar elementos interactivos */
          .activity-bar, .left-sidebar-panel, .independent-panel,
          .mobile-bottom-bar, .mobile-drawer, .mobile-drawer-backdrop,
          .breadcrumbs, .doc-nav, .nav-divider, .zen-exit-btn,
          .copy-code-btn, .code-toolbar, .code-block-header, .code-dots,
          .img-toolbar, .mermaid-toolbar, .main-content::after, .sticky-panel::after {
            display: none !important;
          }

          /* Títulos legibles y proporcionados */
          h1, h2, h3, h4, h5, h6 {
            color: #000000 !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          h1 { font-size: 16pt !important; margin-top: 1.5rem !important; }
          h2 { font-size: 13pt !important; margin-top: 1.25rem !important; }
          h3 { font-size: 12pt !important; }

          /* Párrafos e interlineado */
          .markdown-body {
            line-height: ${isInforme ? '1.8' : '1.6'} !important;
          }
          .markdown-body p {
            color: #000000 !important;
            margin-bottom: 0.85rem !important;
            ${isInforme ? 'text-indent: 1.27cm !important; text-align: justify !important;' : 'text-indent: 0 !important;'}
          }

          /* Carátula estructurada */
          .report-cover-page {
            box-sizing: border-box !important;
            width: 100% !important;
            min-height: 230mm !important;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            page-break-before: avoid !important;
            break-before: avoid !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          .report-toc-page {
            box-sizing: border-box !important;
            width: 100% !important;
            min-height: 230mm !important;
            padding: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }

          /* Tablas APA */
          table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin: 1.5rem auto !important;
            border-top: 1.5pt solid #000000 !important;
            border-bottom: 1.5pt solid #000000 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            font-size: 10pt !important;
            color: #000000 !important;
          }
          th {
            border-bottom: 1pt solid #000000 !important;
            padding: 0.4rem 0.6rem !important;
            font-weight: bold !important;
          }
          td {
            padding: 0.4rem 0.6rem !important;
            border: none !important;
          }

          /* Bloques de código con fondo gris claro y texto Shiki */
          pre.astro-code {
            background-color: #f8fafc !important;
            border: 1px solid #e2e8f0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          pre.astro-code code span {
            color: var(--shiki-light, inherit) !important;
          }

          /* Mermaid con fondo blanco */
          .mermaid-wrapper {
            max-width: 100% !important;
            border: 1px solid #e2e8f0 !important;
            background: #ffffff !important;
            display: flex !important;
            justify-content: center !important;
            margin: 1.5rem 0 !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .mermaid-wrapper svg {
            max-width: 100% !important;
            max-height: 20cm !important;
            height: auto !important;
            width: auto !important;
          }

          .mermaid-wrapper foreignObject p,
          .mermaid-wrapper foreignObject div,
          .callout p,
          .katex-display,
          pre p {
            text-indent: 0 !important;
            text-align: left !important;
          }

          hr {
            display: block !important;
            border: none !important;
            height: 0 !important;
            margin: 0 !important;
            visibility: hidden !important;
            page-break-before: always !important;
            break-before: page !important;
          }
        </style>
      </head>
      <body>
        <div class="content-wrapper">
          <div class="markdown-body">
            ${content.innerHTML}
          </div>
        </div>
      </body>
    </html>
  `);
  doc.close();

  // 4. Esperar fuentes KaTeX
  if (iframe.contentWindow?.document?.fonts) {
    await iframe.contentWindow.document.fonts.ready;
  }

  // 5. Imprimir
  iframe.contentWindow?.focus();
  setTimeout(() => {
    iframe.contentWindow?.print();
    setTimeout(() => {
      iframe.remove();
    }, 1000);
  }, 250);
}