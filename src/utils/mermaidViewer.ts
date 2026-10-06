// src/utils/mermaidViewer.ts
import type { MermaidConfig } from 'mermaid';
import { getThemeForDiagram } from './mermaidThemes';

function detectDiagramType(code: string): string {
  let clean = code.replace(/%%[\s\S]*?%%/g, '').trim();
  if (clean.startsWith('---')) {
    const yamlEndIndex = clean.indexOf('---', 3);
    if (yamlEndIndex !== -1) {
      clean = clean.slice(yamlEndIndex + 3).trim();
    }
  }
  if (clean.startsWith('flowchart') || clean.startsWith('graph')) return 'flowchart';
  if (clean.startsWith('erDiagram')) return 'er';
  if (clean.startsWith('quadrantChart')) return 'quadrant';
  if (clean.startsWith('sequenceDiagram')) return 'sequence';
  if (clean.startsWith('classDiagram')) return 'classDiagram';
  if (clean.startsWith('stateDiagram')) return 'state';
  if (clean.startsWith('gitGraph')) return 'gitGraph';
  if (clean.startsWith('pie')) return 'pie';
  if (clean.startsWith('mindmap')) return 'mindmap';
  if (clean.startsWith('gantt')) return 'gantt';
  if (clean.startsWith('xychart')) return 'xychart';
  return 'flowchart';
}

function getMermaidConfig(): MermaidConfig {
  return {
    startOnLoad: false,
    look: 'classic',
    theme: 'base',
    themeVariables: { background: 'transparent' },
    flowchart: {
      htmlLabels: true,
      padding: 12,
      nodeSpacing: 40,
      rankSpacing: 40,
      curve: 'basis'
    },
    gantt: {
      useWidth: 1500,
      useMaxWidth: false,
      leftPadding: 160,
      barHeight: 28,
      barGap: 8,
      topPadding: 50,
      titleTopMargin: 25,
      gridLineStartPadding: 35,
      fontSize: 12,
      sectionFontSize: 14,
      numberSectionStyles: 4,
      axisFormat: '%d/%m'
    }
  };
}

function fixDarkNodeTextContrast(svgEl: SVGElement) {
  const nodes = svgEl.querySelectorAll('.node');
  nodes.forEach((node) => {
    const rectOrPath = node.querySelector('rect, path, circle, polygon');
    if (!rectOrPath) return;
    const fillAttr = rectOrPath.getAttribute('fill') || '';
    const styleAttr = rectOrPath.getAttribute('style') || '';
    const combined = (fillAttr + styleAttr).toLowerCase();
    if (
      combined.includes('#1e1e1e') || 
      combined.includes('#000') || 
      combined.includes('black') || 
      combined.includes('#111') || 
      combined.includes('#222')
    ) {
      const texts = node.querySelectorAll('text, span, p, .nodeLabel');
      texts.forEach((t) => {
        const el = t as HTMLElement | SVGElement;
        el.style.setProperty('fill', '#ffffff', 'important');
        el.style.setProperty('color', '#ffffff', 'important');
      });
    }
  });
}

function buildWrapperStructure(innerContent: string): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mermaid-wrapper';
  wrapper.innerHTML = `
    <div class="mermaid-toolbar">
      <button class="mermaid-tool-btn btn-zoom-in" title="Acercar">+</button>
      <button class="mermaid-tool-btn btn-zoom-out" title="Alejar">-</button>
      <button class="mermaid-tool-btn btn-zoom-reset" title="Restablecer">1:1</button>
      <button class="mermaid-tool-btn btn-fullscreen-diagram" title="Ver en Pantalla Completa">⛶</button>
      <button class="mermaid-tool-btn btn-download-svg" title="Descargar como SVG">SVG</button>
    </div>
    <div class="mermaid-viewport">${innerContent}</div>
  `;
  return wrapper;
}

function attachMermaidControls(wrapper: HTMLElement, code: string) {
  const svg = wrapper.querySelector('svg') as SVGElement | null;
  const viewport = wrapper.querySelector('.mermaid-viewport') as HTMLElement | null;

  let currentScale = 1;
  const scaleStep = 0.15;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;

  if (viewport) {
    viewport.addEventListener('wheel', (e) => {
      if (currentScale === 1) return;
      e.stopPropagation();
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });
  }

  if (!svg || !viewport) return;

  function updateTransform() {
    if (!svg) return;
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
  }

  wrapper.querySelector('.btn-zoom-in')?.addEventListener('click', () => {
    currentScale = Math.min(currentScale + scaleStep, 3);
    updateTransform();
  });

  wrapper.querySelector('.btn-zoom-out')?.addEventListener('click', () => {
    currentScale = Math.max(currentScale - scaleStep, 0.4);
    updateTransform();
  });

  wrapper.querySelector('.btn-zoom-reset')?.addEventListener('click', () => {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    if (svg) svg.style.transform = 'none';
  });

  viewport.addEventListener('mousedown', (e) => {
    if (currentScale === 1 && !wrapper.classList.contains('has-custom-width') && !wrapper.classList.contains('is-gantt')) return;
    isDragging = true;
    viewport.style.cursor = 'grabbing';
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  };

  const onMouseUp = () => {
    isDragging = false;
    if (viewport) viewport.style.cursor = 'default';
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  wrapper.querySelector('.btn-download-svg')?.addEventListener('click', () => {
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diagrama-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  });

  wrapper.querySelector('.btn-fullscreen-diagram')?.addEventListener('click', () => {
    const clonedSvg = svg.cloneNode(true) as SVGElement;
    clonedSvg.style.transform = 'none';
    clonedSvg.removeAttribute('width');
    clonedSvg.removeAttribute('height');
    clonedSvg.style.removeProperty('width');
    clonedSvg.style.removeProperty('height');
    clonedSvg.style.removeProperty('max-width');
    clonedSvg.style.removeProperty('min-width');

    const diagramLayout = wrapper.dataset.layout || 'fit';
    const modalBodyContainer = document.createElement('div');
    modalBodyContainer.className = `mermaid-modal-body modal-layout-${diagramLayout}`;
    modalBodyContainer.appendChild(clonedSvg);

    window.dispatchEvent(new CustomEvent('open-global-modal', {
      detail: {
        title: 'Diagrama de Mermaid',
        subtitle: 'Vista ampliada del flujo de trabajo',
        contentHTML: modalBodyContainer
      }
    }));
  });
}

export async function renderMermaid(forceReRender = false, targetSelector = '.main-content') {
  const codeBlocks = Array.from(
    document.querySelectorAll(`${targetSelector} pre[data-language="mermaid"], ${targetSelector} pre:has(code.language-mermaid), ${targetSelector} pre.mermaid`)
  );

  codeBlocks.forEach((preNode) => {
    const pre = preNode as HTMLElement;
    if (pre.dataset.mermaidRegistered === 'true') return;
    const codeEl = pre.querySelector('code');
    const rawCode = (codeEl?.textContent || pre.textContent || '').trim();
    if (!rawCode) return;

    const codeBlockWrapper = pre.closest('.code-block-wrapper') as HTMLElement | null;
    if (codeBlockWrapper) {
      codeBlockWrapper.dataset.sourceCode = rawCode;
    }

    const container = document.createElement('div');
    container.className = 'mermaid-native';
    container.dataset.sourceCode = rawCode;
    pre.after(container);
    pre.style.display = 'none';
    pre.dataset.mermaidRegistered = 'true';
  });

  const containers = Array.from(document.querySelectorAll<HTMLElement>(`${targetSelector} .mermaid-native, ${targetSelector} .mermaid-wrapper`));
  if (containers.length === 0) return;

  const { default: mermaid } = await import('mermaid');
  mermaid.initialize(getMermaidConfig());

  const currentModo = document.documentElement.getAttribute('data-modo') || 'oscuro';
  const currentEstilo = document.documentElement.getAttribute('data-estilo') || 'moderno';
  const renderSignature = `${currentModo}-${currentEstilo}`;

  for (const [index, item] of containers.entries()) {
    const code = item.dataset.sourceCode;
    if (!code) continue;
    if (item.dataset.renderedSignature === renderSignature && !forceReRender) continue;

    const layoutMatch = code.match(/%%layout:\s*(fit|pan-x|pan-y)\s*%%/i);
    const widthMatch = code.match(/%%width:\s*(\d+(?:px|%)?)\s*%%/i);
    const maxWidthMatch = code.match(/%%max-width:\s*(\d+(?:px|%)?)\s*%%/i);
    const heightMatch = code.match(/%%height:\s*(\d+(?:px|%)?)\s*%%/i);

    const parseUnit = (val: string | null) => {
      if (!val) return null;
      return val.endsWith('%') || val.endsWith('px') ? val : `${val}px`;
    };

    const parsedLayout = (layoutMatch ? layoutMatch[1].toLowerCase() : 'fit') as 'fit' | 'pan-x' | 'pan-y';
    const parsedWidth = parseUnit(widthMatch ? widthMatch[1] : null);
    const parsedMaxWidth = parseUnit(maxWidthMatch ? maxWidthMatch[1] : null);
    const parsedHeight = parseUnit(heightMatch ? heightMatch[1] : null);

    const cleanCode = code
      .replace(/%%layout:.*?%%/gi, '')
      .replace(/%%width:.*?%%/gi, '')
      .replace(/%%max-width:.*?%%/gi, '')
      .replace(/%%height:.*?%%/gi, '')
      .trim();

    // 1. Detección estricta de init manual o frontmatter propio de Mermaid
    const hasCustomConfig = cleanCode.includes('%%{init') || cleanCode.startsWith('---');
    const isGantt = cleanCode.replace(/%%[\s\S]*?%%/g, '').trim().startsWith('gantt');
    const diagramType = detectDiagramType(cleanCode);

    let codeToRender = cleanCode;

    // 2. Jerarquía de precedencia: Custom init > Tema del sitio > Base
    if (isGantt) {
      const numericWidth = widthMatch ? parseInt(widthMatch[1], 10) : 1200;
      codeToRender = hasCustomConfig
        ? cleanCode
        : `%%{init: { 'gantt': { 'useWidth': ${numericWidth} } } }%%\n` + cleanCode;
    } else if (!hasCustomConfig) {
      const initConfig = getThemeForDiagram(diagramType);
      const generatedInit = `%%{init: ${JSON.stringify(initConfig)} }%%\n`;
      codeToRender = generatedInit + cleanCode;
    }

    const renderId = `mermaid-render-${Date.now()}-${index}`;

    try {
      const { svg } = await mermaid.render(renderId, codeToRender);
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = svg;
      const svgEl = tempContainer.querySelector('svg');

      if (svgEl) {
        fixDarkNodeTextContrast(svgEl);
        if (parsedWidth) {
          svgEl.style.setProperty('width', parsedWidth, 'important');
          svgEl.style.setProperty('min-width', parsedWidth, 'important');
        }
        if (parsedMaxWidth) svgEl.style.setProperty('max-width', parsedMaxWidth, 'important');
        if (parsedHeight) svgEl.style.setProperty('max-height', parsedHeight, 'important');
      }

      const wrapper = buildWrapperStructure(svgEl ? svgEl.outerHTML : svg);
      wrapper.dataset.sourceCode = code;
      wrapper.dataset.layout = parsedLayout;

      if (hasCustomConfig) {
        wrapper.classList.add('has-custom-init');
      } else {
        wrapper.classList.add('use-site-theme');
      }

      if (isGantt) {
        wrapper.classList.add('is-gantt');
      }

      if (parsedWidth || parsedMaxWidth || parsedHeight) {
        wrapper.classList.add('has-custom-width');
      }

      item.replaceWith(wrapper);
      attachMermaidControls(wrapper, code);
      wrapper.dataset.renderedSignature = renderSignature;
    } catch (err) {
      console.error(`Error renderizando diagrama #${index}:`, err);
    }
  }
}