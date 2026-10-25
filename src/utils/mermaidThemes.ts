// src/utils/mermaidThemes.ts
import mermaidEstilos from '../config/mermaid-estilos.json';

export function getThemeForDiagram(_type: string): Record<string, any> {
  const currentTema = typeof document !== 'undefined' ? document.documentElement.getAttribute('data-estilo') || 'default' : 'default';
  const currentModo = typeof document !== 'undefined' ? document.documentElement.getAttribute('data-modo') || 'oscuro' : 'oscuro';

  const estiloTema = (mermaidEstilos as any)[currentTema] || (mermaidEstilos as any)['default'];
  const configModo = estiloTema[currentModo] || estiloTema['claro'];

  return {
    theme: configModo.theme || 'base',
    themeVariables: {
      background: 'transparent',
      ...(configModo.themeVariables || {})
    }
  };
}