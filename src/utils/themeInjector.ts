// src/utils/themeInjector.ts
import estilosData from '../config/estilos-base.json';
import { compileThemeToCss, type WebThemeConfig } from './themePresetsManager';

export function generateThemeCss(): string {
  let css = '';
  for (const [id, config] of Object.entries(estilosData as Record<string, WebThemeConfig>)) {
    css += compileThemeToCss(id, config);
  }
  return css;
}