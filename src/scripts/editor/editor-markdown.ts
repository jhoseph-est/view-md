// src/scripts/editor/editor-markdown.ts

export function initMarkdownControls(root: HTMLElement): void {
  // 1. Tipografía Base y Prosa
  const fontDoc = document.getElementById('font-doc') as HTMLSelectElement | null;
  if (fontDoc) {
    fontDoc.onchange = () => root.style.setProperty('--doc-font', fontDoc.value);
  }

  const fontTitle = document.getElementById('font-title') as HTMLSelectElement | null;
  if (fontTitle) {
    fontTitle.onchange = () => root.style.setProperty('--title-font', fontTitle.value);
  }

  const fontCode = document.getElementById('font-code') as HTMLSelectElement | null;
  if (fontCode) {
    fontCode.onchange = () => root.style.setProperty('--code-font', fontCode.value);
  }

  const fontQuote = document.getElementById('font-quote') as HTMLSelectElement | null;
  if (fontQuote) {
    fontQuote.onchange = () => root.style.setProperty('--quote-font', fontQuote.value);
  }

  const geoIndent = document.getElementById('geo-indent') as HTMLInputElement | null;
  const valIndent = document.getElementById('val-indent');
  if (geoIndent && valIndent) {
    geoIndent.oninput = () => {
      const val = `${geoIndent.value}cm`;
      valIndent.textContent = val;
      root.style.setProperty('--para-indent', val);
    };
  }

  const geoLineHeight = document.getElementById('geo-lineheight') as HTMLInputElement | null;
  const valLineHeight = document.getElementById('val-lineheight');
  if (geoLineHeight && valLineHeight) {
    geoLineHeight.oninput = () => {
      valLineHeight.textContent = geoLineHeight.value;
      root.style.setProperty('--doc-line-height', geoLineHeight.value);
    };
  }

  const geoAlign = document.getElementById('geo-align') as HTMLSelectElement | null;
  if (geoAlign) {
    geoAlign.onchange = () => root.style.setProperty('--para-align', geoAlign.value);
  }

  // 2. Jerarquía H1 a H6 Independiente
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
    // Color
    const colInput = document.getElementById(`col-${tag}`) as HTMLInputElement | null;
    if (colInput) {
      colInput.oninput = () => root.style.setProperty(`--color-${tag}`, colInput.value);
    }

    // Tamaño Slider
    const sizeInput = document.getElementById(`size-${tag}`) as HTMLInputElement | null;
    const valSize = document.getElementById(`val-${tag}`);
    if (sizeInput && valSize) {
      sizeInput.oninput = () => {
        valSize.textContent = `${sizeInput.value}rem`;
        root.style.setProperty(`--${tag}-size`, `${sizeInput.value}rem`);
      };
    }

    // Fuente Individual
    const fontSel = document.getElementById(`font-${tag}`) as HTMLSelectElement | null;
    if (fontSel) {
      fontSel.onchange = () => root.style.setProperty(`--font-${tag}`, fontSel.value);
    }

    // Alineación Individual
    const alignSel = document.getElementById(`align-${tag}`) as HTMLSelectElement | null;
    if (alignSel) {
      alignSel.onchange = () => root.style.setProperty(`--align-${tag}`, alignSel.value);
    }

    // Borde / Rayita Individual
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

  // 3. Énfasis y Resaltado
  const bindColor = (id: string, hexId: string, cssVar: string, isAlpha = false) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    const hex = hexId ? document.getElementById(hexId) : null;
    if (!input) return;
    input.oninput = () => {
      if (hex) hex.textContent = input.value;
      root.style.setProperty(cssVar, isAlpha ? `${input.value}33` : input.value);
    };
  };

  bindColor('col-text', 'hex-text', '--text-color');
  bindColor('col-bold', 'hex-bold', '--color-negrita');
  bindColor('col-italic', 'hex-italic', '--color-cursiva');
  bindColor('col-bold-italic', 'hex-bold-italic', '--color-negrita-cursiva');
  bindColor('col-strike', 'hex-strike', '--color-tachado');
  bindColor('col-underline', 'hex-underline', '--color-subrayado');
  bindColor('col-code-inline', 'hex-code-inline', '--color-codigo-inline');
  bindColor('col-mark-bg', 'hex-mark-bg', '--color-resaltado-bg', true);
  bindColor('col-mark-text', 'hex-mark-text', '--color-resaltado-text');

  // 4. KaTeX
  bindColor('col-katex', 'hex-katex', '--color-math');
  bindColor('col-katex-bg', 'hex-katex-bg', '--color-math-block-bg', true);
  bindColor('col-katex-border', 'hex-katex-border', '--color-math-border');

  // 5. Tablas
  bindColor('col-table-border', 'hex-table-border', '--table-border-color');
  bindColor('col-table-th-bg', 'hex-table-th-bg', '--table-th-bg');
  bindColor('col-table-th-text', 'hex-table-th-text', '--table-th-color');
  bindColor('col-table-row-even', 'hex-table-row-even', '--table-row-even-bg', true);

  // 6. Citas y Listas
  bindColor('col-quote-border', 'hex-quote-border', '--quote-border-color');
  bindColor('col-quote-bg', 'hex-quote-bg', '--quote-bg', true);
  bindColor('col-quote-text', 'hex-quote-text', '--quote-text-color');
  bindColor('col-list-bullet', 'hex-list-bullet', '--list-bullet-color');

  // 7. Bloques de Código Fuente
  bindColor('col-code-border', 'hex-code-border', '--code-border-color');
  bindColor('col-code-toolbar-bg', 'hex-code-toolbar-bg', '--code-toolbar-bg');
  bindColor('col-code-lang', 'hex-code-lang', '--code-lang-color');
  bindColor('col-code-btn', 'hex-code-btn', '--code-btn-copy-color');

  // 8. Multimedia
  bindColor('col-media-border', 'hex-media-border', '--media-border-color');
  const mediaRadius = document.getElementById('media-radius') as HTMLInputElement | null;
  const valMediaRadius = document.getElementById('val-media-radius');
  if (mediaRadius && valMediaRadius) {
    mediaRadius.oninput = () => {
      valMediaRadius.textContent = `${mediaRadius.value}px`;
      root.style.setProperty('--media-radius', `${mediaRadius.value}px`);
    };
  }
}