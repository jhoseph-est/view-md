// src/scripts/editor/editor-markdown.ts

function hexToRgba(hex: string, alphaPercent: number): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
  const a = (alphaPercent / 100).toFixed(2);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

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
    const colInput = document.getElementById(`col-${tag}`) as HTMLInputElement | null;
    if (colInput) {
      colInput.oninput = () => root.style.setProperty(`--color-${tag}`, colInput.value);
    }

    const sizeInput = document.getElementById(`size-${tag}`) as HTMLInputElement | null;
    const valSize = document.getElementById(`val-${tag}`);
    if (sizeInput && valSize) {
      sizeInput.oninput = () => {
        valSize.textContent = `${sizeInput.value}rem`;
        root.style.setProperty(`--${tag}-size`, `${sizeInput.value}rem`);
      };
    }

    const fontSel = document.getElementById(`font-${tag}`) as HTMLSelectElement | null;
    if (fontSel) {
      fontSel.onchange = () => root.style.setProperty(`--font-${tag}`, fontSel.value);
    }

    const alignSel = document.getElementById(`align-${tag}`) as HTMLSelectElement | null;
    if (alignSel) {
      alignSel.onchange = () => root.style.setProperty(`--align-${tag}`, alignSel.value);
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

  // 3. Helper de Colores Sólidos Clásicos
  const bindColor = (id: string, hexId: string, cssVar: string) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    const hex = hexId ? document.getElementById(hexId) : null;
    if (!input) return;
    input.oninput = () => {
      if (hex) hex.textContent = input.value;
      root.style.setProperty(cssVar, input.value);
    };
  };

  // 4. Helper Nativo con Color + Opacidad Flotante
  const bindAlphaControl = (
    btnId: string,
    popId: string,
    colId: string,
    alphaId: string,
    swatchId: string,
    hexLabelId: string,
    alphaValId: string,
    cssVar: string
  ) => {
    const btn = document.getElementById(btnId);
    const pop = document.getElementById(popId);
    const col = document.getElementById(colId) as HTMLInputElement | null;
    const alpha = document.getElementById(alphaId) as HTMLInputElement | null;
    const swatch = document.getElementById(swatchId);
    const hexLabel = document.getElementById(hexLabelId);
    const alphaVal = document.getElementById(alphaValId);

    if (!btn || !pop || !col || !alpha) return;

    // Abrir / Cerrar popover
    btn.onclick = (e) => {
      e.stopPropagation();
      document.querySelectorAll('.alpha-popover').forEach(p => {
        if (p !== pop) p.classList.remove('is-open');
      });
      pop.classList.toggle('is-open');
    };

    pop.onclick = (e) => e.stopPropagation();

    const updateColor = () => {
      const alphaNum = parseInt(alpha.value, 10);
      const rgba = hexToRgba(col.value, alphaNum);
      if (swatch) swatch.style.backgroundColor = rgba;
      if (hexLabel) hexLabel.textContent = `${col.value} (${alphaNum}%)`;
      if (alphaVal) alphaVal.textContent = `${alphaNum}%`;
      root.style.setProperty(cssVar, rgba);
    };

    col.oninput = updateColor;
    alpha.oninput = updateColor;
  };

  // Cerrar cualquier popover abierto al hacer clic fuera
  document.addEventListener('click', () => {
    document.querySelectorAll('.alpha-popover').forEach(p => p.classList.remove('is-open'));
  });

  // Énfasis
  bindColor('col-text', 'hex-text', '--text-color');
  bindColor('col-bold', 'hex-bold', '--color-negrita');
  bindColor('col-italic', 'hex-italic', '--color-cursiva');
  bindColor('col-bold-italic', 'hex-bold-italic', '--color-negrita-cursiva');
  bindColor('col-strike', 'hex-strike', '--color-tachado');
  bindColor('col-underline', 'hex-underline', '--color-subrayado');
  bindColor('col-code-inline', 'hex-code-inline', '--color-codigo-inline');
  bindColor('col-mark-text', 'hex-mark-text', '--color-resaltado-text');

  // Controles Translúcidos
  bindAlphaControl('btn-swatch-mark-bg', 'pop-mark-bg', 'col-mark-bg', 'alpha-mark-bg', 'swatch-mark-bg', 'hex-mark-bg', 'alpha-val-mark-bg', '--color-resaltado-bg');
  bindAlphaControl('btn-swatch-katex-bg', 'pop-katex-bg', 'col-katex-bg', 'alpha-katex-bg', 'swatch-katex-bg', 'hex-katex-bg', 'alpha-val-katex-bg', '--color-math-block-bg');
  bindAlphaControl('btn-swatch-table-row-even', 'pop-table-row-even', 'col-table-row-even', 'alpha-table-row-even', 'swatch-table-row-even', 'hex-table-row-even', 'alpha-val-table-row-even', '--table-row-even-bg');
  bindAlphaControl('btn-swatch-quote-bg', 'pop-quote-bg', 'col-quote-bg', 'alpha-quote-bg', 'swatch-quote-bg', 'hex-quote-bg', 'alpha-val-quote-bg', '--quote-bg');

  // KaTeX
  bindColor('col-katex', 'hex-katex', '--color-math');

  // Tablas
  bindColor('col-table-border', 'hex-table-border', '--table-border-color');
  bindColor('col-table-th-bg', 'hex-table-th-bg', '--table-th-bg');
  bindColor('col-table-th-text', 'hex-table-th-text', '--table-th-color');

  // Citas y Listas
  bindColor('col-quote-border', 'hex-quote-border', '--quote-border-color');
  bindColor('col-quote-text', 'hex-quote-text', '--quote-text-color');
  bindColor('col-list-bullet', 'hex-list-bullet', '--list-bullet-color');

  // Bloques de Código Fuente
  bindColor('col-code-border', 'hex-code-border', '--code-border-color');
  bindColor('col-code-toolbar-bg', 'hex-code-toolbar-bg', '--code-toolbar-bg');
  bindColor('col-code-lang', 'hex-code-lang', '--code-lang-color');
  bindColor('col-code-btn', 'hex-code-btn', '--code-btn-copy-color');

  // Multimedia
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