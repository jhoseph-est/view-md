// src/scripts/editor/editor-mermaid.ts

export function initMermaidControls(root: HTMLElement): void {
  const bindMermaid = (id: string, cssVars: string[], isAlpha = false) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (!input) return;
    input.oninput = () => {
      const val = isAlpha ? `${input.value}26` : input.value;
      cssVars.forEach(v => root.style.setProperty(v, val));
      window.dispatchEvent(new Event('theme-changed'));
    };
  };

  // Flowchart
  bindMermaid('col-mm-flow-bg', ['--mm-flow-bg']);
  bindMermaid('col-mm-flow-border', ['--mm-flow-border']);
  bindMermaid('col-mm-flow-line', ['--mm-flow-line']);
  bindMermaid('col-mm-flow-text', ['--mm-flow-text']);

  // Sequence
  bindMermaid('col-mm-seq-actor-bg', ['--mm-seq-actor-bg']);
  bindMermaid('col-mm-seq-actor-border', ['--mm-seq-actor-border']);
  bindMermaid('col-mm-seq-line', ['--mm-seq-line']);
  bindMermaid('col-mm-seq-note-bg', ['--mm-seq-note-bg']);
  bindMermaid('col-mm-seq-note-border', ['--mm-seq-note-border']);

  // Class Diagram
  bindMermaid('col-mm-class-bg', ['--mm-class-bg']);
  bindMermaid('col-mm-class-border', ['--mm-class-border']);
  bindMermaid('col-mm-class-line', ['--mm-class-line']);

  // State Diagram
  bindMermaid('col-mm-state-bg', ['--mm-state-bg']);
  bindMermaid('col-mm-state-border', ['--mm-state-border']);
  bindMermaid('col-mm-state-line', ['--mm-state-line']);

  // ER Diagram
  bindMermaid('col-mm-er-header', ['--mm-er-header-bg']);
  bindMermaid('col-mm-er-border', ['--mm-er-border']);
  bindMermaid('col-mm-er-line', ['--mm-er-line']);
  bindMermaid('col-mm-er-odd', ['--mm-er-row-odd']);
  bindMermaid('col-mm-er-even', ['--mm-er-row-even']);

  // Gantt
  bindMermaid('col-mm-gantt-done', ['--mm-gantt-done']);
  bindMermaid('col-mm-gantt-active', ['--mm-gantt-active']);
  bindMermaid('col-mm-gantt-crit', ['--mm-gantt-crit']);

  // GitGraph
  bindMermaid('col-mm-git-1', ['--mm-git-1']);
  bindMermaid('col-mm-git-2', ['--mm-git-2']);
  bindMermaid('col-mm-git-3', ['--mm-git-3']);
  bindMermaid('col-mm-git-4', ['--mm-git-4']);

  // Quadrant
  bindMermaid('col-mm-quad-border', ['--mm-quad-border', '--mm-quad-line']);
  bindMermaid('col-mm-q1', ['--mm-q1'], true);
  bindMermaid('col-mm-q2', ['--mm-q2'], true);
  bindMermaid('col-mm-q3', ['--mm-q3'], true);
  bindMermaid('col-mm-q4', ['--mm-q4'], true);

  // Pie Chart
  bindMermaid('col-mm-pie-1', ['--mm-pie-1']);
  bindMermaid('col-mm-pie-2', ['--mm-pie-2']);
  bindMermaid('col-mm-pie-3', ['--mm-pie-3']);
}