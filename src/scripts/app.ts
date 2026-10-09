// src/scripts/app.ts
import { renderMermaid } from '../utils/mermaidViewer';
import { initClipboard, setupCodeCopyListener, setupStaticFileLinks } from './core/clipboard';
import { initMobileDrawers } from './core/mobile-drawers';
import { initUiSync, setupGlobalUiListeners, toggleZenMode } from './core/ui-sync';

export async function bootstrapApp(): Promise<void> {
  // 1. Espera crítica de fuentes antes del renderizado
  if (document.fonts) {
    await document.fonts.ready;
  }

  // 2. Renderizar diagramas de Mermaid
  renderMermaid(false, '.main-content');

  // 3. Inicializar módulos UI
  initClipboard();
  initUiSync();
  initMobileDrawers(toggleZenMode);
  setupStaticFileLinks();

  // 4. Configurar escuchadores globales persistentes
  setupCodeCopyListener();
  setupGlobalUiListeners();
}

// Reactividad ante cambio de temas
if (typeof window !== 'undefined' && !(window as any).__themeChangeRegistered) {
  (window as any).__themeChangeRegistered = true;
  window.addEventListener('theme-changed', () => {
    renderMermaid(true, '.main-content');
  });
}