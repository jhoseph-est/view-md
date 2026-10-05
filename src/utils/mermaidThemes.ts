// src/utils/mermaidThemes.ts
import mermaidConfigJson from '../config/diagramas-mermaid.json';

function getCssVar(varName: string, fallback = ''): string {
  if (typeof window === 'undefined') return fallback;
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val || fallback;
}

export function getThemeForDiagram(type: string): Record<string, any> {
  const cfg = mermaidConfigJson;

  const nodeBg = getCssVar('--mm-node-bg', cfg.flowchart.nodoFondo);
  const nodeBorder = getCssVar('--mm-node-border', cfg.flowchart.nodoBorde);
  const lineColor = getCssVar('--mm-line-color', cfg.flowchart.lineaColor);
  const textColor = getCssVar('--mm-text-color', cfg.flowchart.nodoTexto);
  const headerBg = getCssVar('--mm-header-bg', cfg.er.cabeceraFondo);
  const labelBg = getCssVar('--mm-label-bg', cfg.flowchart.etiquetaFondo);
  const noteBg = getCssVar('--mm-note-bg', cfg.sequence.notaFondo);
  const noteBorder = getCssVar('--mm-note-border', cfg.sequence.notaBorde);

  switch (type) {
    case 'flowchart':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          fontFamily: cfg.comunes.fuente,
          fontSize: cfg.comunes.tamanoFuente,
          primaryColor: nodeBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor,
          textColor: textColor,
          labelBoxBkgColor: labelBg,
          labelBoxBorderColor: nodeBorder,
          labelTextColor: textColor
        }
      };

    case 'sequence':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          actorBkg: getCssVar('--mm-actor-bg', cfg.sequence.actorFondo),
          actorBorder: getCssVar('--mm-actor-border', cfg.sequence.actorBorde),
          actorTextColor: textColor,
          actorLineColor: lineColor,
          signalColor: lineColor,
          signalTextColor: textColor,
          noteBkgColor: noteBg,
          noteBorderColor: noteBorder,
          noteTextColor: textColor
        }
      };

    case 'er':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: headerBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor,
          rowRectOddBgColor: nodeBg,
          rowRectEvenBgColor: headerBg,
          textColor: textColor
        }
      };

    case 'gitGraph':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          gitBranchColours: cfg.gitGraph.ramas,
          commitLabelColor: textColor,
          commitLabelBackground: nodeBg
        }
      };

    case 'quadrant':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          quadrant1Fill: cfg.quadrant.q1Fondo,
          quadrant2Fill: cfg.quadrant.q2Fondo,
          quadrant3Fill: cfg.quadrant.q3Fondo,
          quadrant4Fill: cfg.quadrant.q4Fondo,
          quadrant1TextFill: textColor,
          quadrant2TextFill: textColor,
          quadrant3TextFill: textColor,
          quadrant4TextFill: textColor,
          quadrantBorderColor: nodeBorder,
          quadrantLineColor: lineColor,
          quadrantPointFill: nodeBorder,
          quadrantPointTextFill: textColor,
          titleColor: textColor
        }
      };

    default:
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: nodeBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor,
          textColor: textColor
        }
      };
  }
}