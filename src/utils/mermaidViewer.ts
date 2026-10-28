// src/utils/mermaidViewer.ts
import type { MermaidConfig } from 'mermaid';
import { getThemeForDiagram } from './mermaidThemes';

const diagramRenderCache = new Map<string, string>();

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
    themeVariables: {
      background: 'transparent',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '13px'
    },
    flowchart: {
      htmlLabels: true,
      padding: 14,
      nodeSpacing: 45,
      rankSpacing: 45,
      curve: 'basis',
      useMaxWidth: false
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
      <button class="mermaid-tool-btn btn-fullscreen-diagram" title="Ver en Pantalla Completa">⛶</button>
    </div>
    <div class="mermaid-viewport">${innerContent}</div>
  `;
  return wrapper;
}

// Validador dimensional numérico estricto
function parseDimension(val: string | null | undefined): string | null {
  if (!val) return null;
  const clean = val.trim();
  const match = clean.match(/^(\d+(?:\.\d+)?)(px|%|vh|vw)?$/i);
  if (!match) return null;
  return `${match[1]}${match[2] || 'px'}`;
}

function attachMermaidControls(wrapper: HTMLElement, _code: string) {
  const svg = wrapper.querySelector('svg') as SVGElement | null;
  if (!svg) return;

  wrapper.querySelector('.btn-fullscreen-diagram')?.addEventListener('click', () => {
    const clonedSvg = svg.cloneNode(true) as SVGElement;
    clonedSvg.style.transform = 'none';

    clonedSvg.removeAttribute('width');
    clonedSvg.removeAttribute('height');
    clonedSvg.style.removeProperty('width');
    clonedSvg.style.removeProperty('height');
    clonedSvg.style.removeProperty('max-width');
    clonedSvg.style.removeProperty('min-width');
    clonedSvg.style.removeProperty('max-height');
    clonedSvg.style.removeProperty('min-height');

    const widthA = wrapper.dataset.widthA;
    const heightA = wrapper.dataset.heightA;

    const modalBodyContainer = document.createElement('div');
    modalBodyContainer.className = 'mermaid-modal-body';

    if (widthA || heightA) {
      modalBodyContainer.classList.add('has-custom-modal-dims');
      if (widthA) {
        clonedSvg.style.setProperty('width', widthA, 'important');
        clonedSvg.style.setProperty('min-width', widthA, 'important');
      }
      if (heightA) {
        clonedSvg.style.setProperty('height', heightA, 'important');
        clonedSvg.style.setProperty('min-height', heightA, 'important');
      }
    } else {
      clonedSvg.style.setProperty('max-width', '100%', 'important');
      clonedSvg.style.setProperty('max-height', '76vh', 'important');
      clonedSvg.style.setProperty('width', 'auto', 'important');
      clonedSvg.style.setProperty('height', 'auto', 'important');
    }

    modalBodyContainer.appendChild(clonedSvg);

    window.dispatchEvent(
      new CustomEvent('open-global-modal', {
        detail: {
          title: 'Diagrama de Mermaid',
          subtitle: 'Vista ampliada del flujo de trabajo',
          contentHTML: modalBodyContainer
        }
      })
    );
  });
}

async function renderSingleDiagram(item: HTMLElement, index: number, forceReRender: boolean) {
  const code = item.dataset.sourceCode;
  if (!code) return;

  const currentModo = document.documentElement.getAttribute('data-modo') || 'oscuro';
  const currentEstilo = document.documentElement.getAttribute('data-estilo') || 'default';
  const renderSignature = `${currentModo}-${currentEstilo}`;

  if (item.dataset.renderedSignature === renderSignature && !forceReRender) return;

  const widthNMatch = code.match(/%%width-n:\s*([^\s%]+)\s*%%/i);
  const heightNMatch = code.match(/%%height-n:\s*([^\s%]+)\s*%%/i);

  const widthAMatch = code.match(/%%width-a:\s*([^\s%]+)\s*%%/i);
  const heightAMatch = code.match(/%%height-a:\s*([^\s%]+)\s*%%/i);

  const generalWidthMatch = code.match(/%%width:\s*([^\s%]+)\s*%%/i);
  const generalHeightMatch = code.match(/%%height:\s*([^\s%]+)\s*%%/i);

  const parsedWidthN = parseDimension(widthNMatch ? widthNMatch[1] : generalWidthMatch ? generalWidthMatch[1] : null);
  const parsedHeightN = parseDimension(heightNMatch ? heightNMatch[1] : generalHeightMatch ? generalHeightMatch[1] : null);

  const parsedWidthA = parseDimension(widthAMatch ? widthAMatch[1] : null);
  const parsedHeightA = parseDimension(heightAMatch ? heightAMatch[1] : null);

  let cleanCode = code
    .replace(/%%layout:.*?%%/gi, '')
    .replace(/%%width(-[nsa])?:.*?%%/gi, '')
    .replace(/%%height(-[nsa])?:.*?%%/gi, '')
    .replace(/%%max-width:.*?%%/gi, '')
    .trim();

  const hasCustomConfig = cleanCode.includes('%%{init') || cleanCode.startsWith('---');
  const isGantt = cleanCode.replace(/%%[\s\S]*?%%/g, '').trim().startsWith('gantt');
  const diagramType = detectDiagramType(cleanCode);

  let codeToRender = cleanCode;
  const baseConfig = getThemeForDiagram(diagramType);

  if (!hasCustomConfig) {
    let initConfig = { ...baseConfig };
    if (isGantt) {
      const numericWidth = parsedWidthN && !parsedWidthN.includes('%') && !parsedWidthN.includes('vw') ? parseInt(parsedWidthN, 10) : 1200;
      initConfig = {
        ...baseConfig,
        gantt: {
          ...(baseConfig.gantt || {}),
          useWidth: numericWidth
        }
      };
    }
    const generatedInit = `%%{init: ${JSON.stringify(initConfig)} }%%\n`;
    codeToRender = generatedInit + cleanCode;
  }

  const cacheKey = `${renderSignature}::${codeToRender}`;
  let finalSvg = '';

  if (!forceReRender && diagramRenderCache.has(cacheKey)) {
    finalSvg = diagramRenderCache.get(cacheKey)!;
  } else {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize(getMermaidConfig());

    const renderId = `mermaid-render-${Date.now()}-${index}`;
    try {
      const { svg } = await mermaid.render(renderId, codeToRender);
      document.querySelectorAll(`body > #${renderId}, body > #d${renderId}`).forEach((el) => el.remove());
      finalSvg = svg;
      diagramRenderCache.set(cacheKey, finalSvg);
    } catch (err) {
      console.error(`Error renderizando diagrama #${index}:`, err);
      return;
    }
  }

  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = finalSvg;
  const svgEl = tempContainer.querySelector('svg');

  if (svgEl) {
    fixDarkNodeTextContrast(svgEl);
    svgEl.setAttribute('preserveAspectRatio', 'xMidYMin meet');
    svgEl.removeAttribute('height');
    svgEl.style.removeProperty('height');

    if (parsedWidthN) {
      svgEl.style.setProperty('width', parsedWidthN, 'important');
      svgEl.style.setProperty('min-width', parsedWidthN, 'important');
      svgEl.style.setProperty('max-width', 'none', 'important');
    }
    if (parsedHeightN) {
      svgEl.style.setProperty('height', parsedHeightN, 'important');
      svgEl.style.setProperty('min-height', parsedHeightN, 'important');
      svgEl.style.setProperty('max-height', 'none', 'important');
      if (!parsedWidthN) {
        svgEl.style.setProperty('max-width', 'none', 'important');
        svgEl.style.setProperty('width', 'auto', 'important');
      }
    }
  }

  const wrapper = buildWrapperStructure(svgEl ? svgEl.outerHTML : finalSvg);
  wrapper.dataset.sourceCode = code;
  if (parsedWidthA) wrapper.dataset.widthA = parsedWidthA;
  if (parsedHeightA) wrapper.dataset.heightA = parsedHeightA;

  if (hasCustomConfig) {
    wrapper.classList.add('has-custom-init');
  } else {
    wrapper.classList.add('use-site-theme');
  }

  if (isGantt) wrapper.classList.add('is-gantt');
  if (parsedWidthN || parsedHeightN) wrapper.classList.add('has-custom-dims');

  item.replaceWith(wrapper);
  attachMermaidControls(wrapper, code);
  wrapper.dataset.renderedSignature = renderSignature;
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
    container.style.cssText =
      'min-height: 120px; margin: 1.5rem 0; border-radius: 8px; border: 1px dashed var(--border-color, #334155); display: flex; align-items: center; justify-content: center; color: var(--text-muted, #94a3b8); font-size: 0.8rem;';
    container.textContent = 'Cargando diagrama...';
    pre.after(container);
    pre.style.display = 'none';
    pre.dataset.mermaidRegistered = 'true';
  });

  const containers = Array.from(document.querySelectorAll<HTMLElement>(`${targetSelector} .mermaid-native, ${targetSelector} .mermaid-wrapper`));
  if (containers.length === 0) return;

  if (forceReRender) {
    for (const [index, item] of containers.entries()) {
      await renderSingleDiagram(item, index, true);
    }
    return;
  }

  const scrollRoot = document.getElementById('main-scroll-container') || document.querySelector('.main-content');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const index = containers.indexOf(target);
          obs.unobserve(target);
          renderSingleDiagram(target, index >= 0 ? index : 0, false);
        }
      });
    },
    {
      root: scrollRoot,
      rootMargin: '300px 0px'
    }
  );

  containers.forEach((container) => {
    const currentModo = document.documentElement.getAttribute('data-modo') || 'oscuro';
    const currentEstilo = document.documentElement.getAttribute('data-estilo') || 'default';
    if (container.dataset.renderedSignature === `${currentModo}-${currentEstilo}`) return;
    observer.observe(container);
  });
}