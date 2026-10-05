// src/utils/mermaidThemes.ts

function getCssVar(varName: string, fallback = ''): string {
  if (typeof window === 'undefined') return fallback;
  const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return val || fallback;
}

export function getThemeForDiagram(type: string): Record<string, any> {
  // 1. Lectura directa de tokens del DOM
  const nodeBg = getCssVar('--mm-node-bg');
  const nodeBorder = getCssVar('--mm-node-border');
  const lineColor = getCssVar('--mm-line-color');
  const textColor = getCssVar('--mm-text-color');
  const headerBg = getCssVar('--mm-header-bg');
  const labelBg = getCssVar('--mm-label-bg');
  const clusterBg = getCssVar('--mm-cluster-bg');
  const clusterBorder = getCssVar('--mm-cluster-border');

  const actorBg = getCssVar('--mm-actor-bg');
  const actorBorder = getCssVar('--mm-actor-border');
  const noteBg = getCssVar('--mm-note-bg');
  const noteBorder = getCssVar('--mm-note-border');

  const ganttDone = getCssVar('--mm-gantt-done');
  const ganttActive = getCssVar('--mm-gantt-active');
  const ganttCrit = getCssVar('--mm-gantt-crit');

  const gitBranches = [
    getCssVar('--mm-git-1'),
    getCssVar('--mm-git-2'),
    getCssVar('--mm-git-3'),
    getCssVar('--mm-git-4')
  ].filter(Boolean);

  const pieColors = [
    getCssVar('--mm-pie-1'),
    getCssVar('--mm-pie-2'),
    getCssVar('--mm-pie-3')
  ].filter(Boolean);

  // 2. Mapeo estructural según la tipología
  switch (type) {
    case 'flowchart':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: nodeBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor,
          textColor: textColor,
          labelBoxBkgColor: labelBg,
          labelBoxBorderColor: nodeBorder,
          labelTextColor: textColor,
          clusterBkg: clusterBg,
          clusterBorder: clusterBorder,
          edgeLabelBackground: labelBg
        }
      };

    case 'sequence':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          actorBkg: actorBg,
          actorBorder: actorBorder,
          actorTextColor: textColor,
          actorLineColor: lineColor,
          signalColor: lineColor,
          signalTextColor: textColor,
          labelBoxBkgColor: labelBg,
          labelBoxBorderColor: nodeBorder,
          labelTextColor: textColor,
          noteBkgColor: noteBg,
          noteBorderColor: noteBorder,
          noteTextColor: textColor,
          activationBkgColor: nodeBorder,
          activationBorderColor: lineColor
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
          lineColor: lineColor,
          textColor: textColor,
          classText: textColor
        }
      };

    case 'state':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          labelColor: textColor,
          altBackground: headerBg,
          primaryColor: nodeBg,
          primaryTextColor: textColor,
          primaryBorderColor: nodeBorder,
          lineColor: lineColor,
          textColor: textColor
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

    case 'gantt':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          textColor: textColor,
          sectionBkgColor: 'transparent',
          sectionBkgColor2: 'transparent',
          taskBorderColor: nodeBorder,
          taskBkgColor: nodeBg,
          taskTextLightColor: textColor,
          activeTaskBorderColor: ganttActive,
          activeTaskBkgColor: ganttActive,
          doneTaskBorderColor: ganttDone,
          doneTaskBkgColor: ganttDone,
          critBorderColor: ganttCrit,
          critBkgColor: ganttCrit,
          todayLineColor: ganttCrit,
          gridColor: clusterBorder
        }
      };

    case 'gitGraph':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          gitBranchColours: gitBranches.length > 0 ? gitBranches : undefined,
          commitLabelColor: textColor,
          commitLabelBackground: nodeBg
        }
      };

    case 'quadrant':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          quadrant1Fill: getCssVar('--mm-q1'),
          quadrant2Fill: getCssVar('--mm-q2'),
          quadrant3Fill: getCssVar('--mm-q3'),
          quadrant4Fill: getCssVar('--mm-q4'),
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

    case 'pie':
      return {
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          pie1: pieColors[0],
          pie2: pieColors[1],
          pie3: pieColors[2],
          pieTitleTextColor: textColor,
          pieSectionTextColor: textColor,
          pieLegendTextColor: textColor,
          pieStrokeColor: nodeBorder,
          pieStrokeWidth: '1.5px'
        }
      };

    case 'mindmap':
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