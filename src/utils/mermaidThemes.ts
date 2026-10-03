// src/utils/mermaidThemes.ts

export type ModoColor = 'oscuro' | 'claro';
export type EstiloVisual = 'moderno' | 'academico' | 'minimalista';

/**
 * Obtiene el valor computado de una variable CSS en :root / <html>
 */
function getCssVar(varName: string, fallback = ''): string {
  if (typeof window === 'undefined') return fallback;
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val || fallback;
}

/**
 * Retorna la configuración completa del init según el tipo de diagrama
 * alimentado directamente por las variables declaradas en mermaid.css
 */
export function getThemeForDiagram(type: string): Record<string, any> {
  // 1. Tokens Base y Comunes
  const nodeBg = getCssVar('--mm-node-bg', '#1e293b');
  const nodeBorder = getCssVar('--mm-node-border', '#38bdf8');
  const lineColor = getCssVar('--mm-line-color', '#38bdf8');
  const textColor = getCssVar('--mm-text-color', '#f8fafc');
  const headerBg = getCssVar('--mm-header-bg', '#0f172a');
  const labelBg = getCssVar('--mm-label-bg', '#0f172a');
  const noteBg = getCssVar('--mm-note-bg', '#4c1d95');
  const noteBorder = getCssVar('--mm-note-border', '#a855f7');

  // 2. Tokens Específicos para Quadrant Chart
  const qBorder = getCssVar('--mm-quad-border', nodeBorder);
  const qLine = getCssVar('--mm-quad-line', lineColor);
  const q1 = getCssVar('--mm-q1', 'rgba(56, 189, 248, 0.15)');
  const q2 = getCssVar('--mm-q2', 'rgba(16, 185, 129, 0.15)');
  const q3 = getCssVar('--mm-q3', 'rgba(244, 63, 94, 0.15)');
  const q4 = getCssVar('--mm-q4', 'rgba(234, 179, 8, 0.15)');

  // 3. Tokens Específicos para GitGraph
  const git1 = getCssVar('--mm-git-1', '#38bdf8');
  const git2 = getCssVar('--mm-git-2', '#a855f7');
  const git3 = getCssVar('--mm-git-3', '#10b981');
  const git4 = getCssVar('--mm-git-4', '#f59e0b');

  // 4. Tokens Específicos para Pie Chart
  const pie1 = getCssVar('--mm-pie-1', '#38bdf8');
  const pie2 = getCssVar('--mm-pie-2', '#10b981');
  const pie3 = getCssVar('--mm-pie-3', '#f59e0b');

  switch (type) {
    case 'flowchart':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '14px',
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

    case 'quadrant':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          quadrant1Fill: q1,
          quadrant2Fill: q2,
          quadrant3Fill: q3,
          quadrant4Fill: q4,
          quadrant1TextFill: textColor,
          quadrant2TextFill: textColor,
          quadrant3TextFill: textColor,
          quadrant4TextFill: textColor,
          quadrantBorderColor: qBorder,
          quadrantLineColor: qLine,
          quadrantPointFill: nodeBorder,
          quadrantPointTextFill: textColor,
          quadrantXAxisTextFill: textColor,
          quadrantYAxisTextFill: textColor,
          titleColor: textColor
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

    case 'sequence':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          actorBkg: nodeBg,
          actorBorder: nodeBorder,
          actorTextColor: textColor,
          actorLineColor: lineColor,
          signalColor: lineColor,
          signalTextColor: textColor,
          noteBkgColor: noteBg,
          noteBorderColor: noteBorder,
          noteTextColor: textColor
        }
      };

    case 'gitGraph':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          gitBranchColours: [git1, git2, git3, git4],
          commitLabelColor: textColor,
          commitLabelBackground: nodeBg
        }
      };

    case 'pie':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          pie1: pie1,
          pie2: pie2,
          pie3: pie3,
          pieTextColor: textColor,
          pieStrokeColor: headerBg,
          pieOuterStrokeColor: headerBg
        }
      };

    case 'state':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: nodeBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor
        }
      };

    case 'classDiagram':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: nodeBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor
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