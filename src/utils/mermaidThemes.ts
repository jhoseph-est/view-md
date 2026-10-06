// src/utils/mermaidThemes.ts

function getCssVar(varName: string, fallback = ''): string {
  if (typeof window === 'undefined') return fallback;
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val || fallback;
}

export function getThemeForDiagram(type: string): Record<string, any> {
  // Tokens Genéricos (Fallbacks)
  const nodeBg = getCssVar('--mm-node-bg');
  const nodeBorder = getCssVar('--mm-node-border');
  const lineColor = getCssVar('--mm-line-color');
  const textColor = getCssVar('--mm-text-color');
  const headerBg = getCssVar('--mm-header-bg');
  const labelBg = getCssVar('--mm-label-bg');
  const clusterBg = getCssVar('--mm-cluster-bg');
  const clusterBorder = getCssVar('--mm-cluster-border');

  switch (type) {
    case 'flowchart':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: getCssVar('--mm-flow-bg', nodeBg),
          primaryTextColor: getCssVar('--mm-flow-text', textColor),
          primaryBorderColor: getCssVar('--mm-flow-border', nodeBorder),
          lineColor: getCssVar('--mm-flow-line', lineColor),
          textColor: getCssVar('--mm-flow-text', textColor),
          labelBoxBkgColor: getCssVar('--mm-flow-label-bg', labelBg),
          labelBoxBorderColor: getCssVar('--mm-flow-border', nodeBorder),
          labelTextColor: getCssVar('--mm-flow-text', textColor),
          clusterBkg: getCssVar('--mm-flow-cluster-bg', clusterBg),
          clusterBorder: getCssVar('--mm-flow-cluster-border', clusterBorder),
          edgeLabelBackground: getCssVar('--mm-flow-label-bg', labelBg)
        }
      };

    case 'sequence':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          actorBkg: getCssVar('--mm-seq-actor-bg', nodeBg),
          actorBorder: getCssVar('--mm-seq-actor-border', nodeBorder),
          actorTextColor: getCssVar('--mm-seq-actor-text', textColor),
          actorLineColor: getCssVar('--mm-seq-line', lineColor),
          signalColor: getCssVar('--mm-seq-line', lineColor),
          signalTextColor: getCssVar('--mm-seq-signal-text', textColor),
          labelBoxBkgColor: labelBg,
          labelBoxBorderColor: nodeBorder,
          labelTextColor: textColor,
          noteBkgColor: getCssVar('--mm-seq-note-bg', '#4c1d95'),
          noteBorderColor: getCssVar('--mm-seq-note-border', '#a855f7'),
          noteTextColor: getCssVar('--mm-seq-note-text', textColor),
          activationBkgColor: getCssVar('--mm-seq-activation-bg', nodeBorder),
          activationBorderColor: getCssVar('--mm-seq-activation-border', lineColor)
        }
      };

    case 'classDiagram':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: getCssVar('--mm-class-bg', nodeBg),
          primaryTextColor: getCssVar('--mm-class-text', textColor),
          primaryBorderColor: getCssVar('--mm-class-border', nodeBorder),
          lineColor: getCssVar('--mm-class-line', lineColor),
          textColor: getCssVar('--mm-class-text', textColor),
          classText: getCssVar('--mm-class-text', textColor)
        }
      };

    case 'state':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          labelColor: getCssVar('--mm-state-text', textColor),
          altBackground: getCssVar('--mm-state-alt-bg', headerBg),
          primaryColor: getCssVar('--mm-state-bg', nodeBg),
          primaryTextColor: getCssVar('--mm-state-text', textColor),
          primaryBorderColor: getCssVar('--mm-state-border', nodeBorder),
          lineColor: getCssVar('--mm-state-line', lineColor),
          textColor: getCssVar('--mm-state-text', textColor)
        }
      };

    case 'er':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: getCssVar('--mm-er-header-bg', headerBg),
          primaryTextColor: getCssVar('--mm-er-text', textColor),
          primaryBorderColor: getCssVar('--mm-er-border', nodeBorder),
          lineColor: getCssVar('--mm-er-line', lineColor),
          rowRectOddBgColor: getCssVar('--mm-er-row-odd', nodeBg),
          rowRectEvenBgColor: getCssVar('--mm-er-row-even', headerBg),
          textColor: getCssVar('--mm-er-text', textColor)
        }
      };

    case 'gantt': {
      const ganttDone = getCssVar('--mm-gantt-done');
      const ganttActive = getCssVar('--mm-gantt-active');
      const ganttCrit = getCssVar('--mm-gantt-crit');
      const ganttText = getCssVar('--mm-gantt-text', textColor);
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          textColor: ganttText,
          sectionBkgColor: 'transparent',
          sectionBkgColor2: 'transparent',
          taskBorderColor: getCssVar('--mm-gantt-task-border', nodeBorder),
          taskBkgColor: getCssVar('--mm-gantt-task-bg', nodeBg),
          taskTextLightColor: ganttText,
          activeTaskBorderColor: ganttActive,
          activeTaskBkgColor: ganttActive,
          doneTaskBorderColor: ganttDone,
          doneTaskBkgColor: ganttDone,
          critBorderColor: ganttCrit,
          critBkgColor: ganttCrit,
          todayLineColor: ganttCrit,
          gridColor: getCssVar('--mm-gantt-grid', clusterBorder)
        }
      };
    }

    case 'gitGraph': {
      const gitBranches = [
        getCssVar('--mm-git-1'),
        getCssVar('--mm-git-2'),
        getCssVar('--mm-git-3'),
        getCssVar('--mm-git-4')
      ].filter(Boolean);
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          gitBranchColours: gitBranches.length > 0 ? gitBranches : undefined,
          commitLabelColor: getCssVar('--mm-git-commit-label-text', textColor),
          commitLabelBackground: getCssVar('--mm-git-commit-label-bg', nodeBg)
        }
      };
    }

    case 'quadrant':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          quadrant1Fill: getCssVar('--mm-q1'),
          quadrant2Fill: getCssVar('--mm-q2'),
          quadrant3Fill: getCssVar('--mm-q3'),
          quadrant4Fill: getCssVar('--mm-q4'),
          quadrant1TextFill: getCssVar('--mm-quad-text', textColor),
          quadrant2TextFill: getCssVar('--mm-quad-text', textColor),
          quadrant3TextFill: getCssVar('--mm-quad-text', textColor),
          quadrant4TextFill: getCssVar('--mm-quad-text', textColor),
          quadrantBorderColor: getCssVar('--mm-quad-border', nodeBorder),
          quadrantLineColor: getCssVar('--mm-quad-line', lineColor),
          quadrantPointFill: getCssVar('--mm-quad-point-fill', nodeBorder),
          quadrantPointTextFill: getCssVar('--mm-quad-point-text', textColor),
          titleColor: getCssVar('--mm-quad-text', textColor)
        }
      };

    case 'pie': {
      const pieColors = [
        getCssVar('--mm-pie-1'),
        getCssVar('--mm-pie-2'),
        getCssVar('--mm-pie-3')
      ].filter(Boolean);
      const pieText = getCssVar('--mm-pie-text', textColor);
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          pie1: pieColors[0],
          pie2: pieColors[1],
          pie3: pieColors[2],
          pieTitleTextColor: pieText,
          pieSectionTextColor: pieText,
          pieLegendTextColor: pieText,
          pieStrokeColor: getCssVar('--mm-pie-border', nodeBorder),
          pieStrokeWidth: '1.5px'
        }
      };
    }

    case 'mindmap':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: getCssVar('--mm-mindmap-bg', nodeBg),
          primaryTextColor: getCssVar('--mm-mindmap-text', textColor),
          primaryBorderColor: getCssVar('--mm-mindmap-border', nodeBorder),
          lineColor: getCssVar('--mm-mindmap-line', lineColor),
          textColor: getCssVar('--mm-mindmap-text', textColor)
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