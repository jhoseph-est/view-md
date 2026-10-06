// src/scripts/core/mobile-drawers.ts
import { loadPagefindAssets } from './search';

export function initMobileDrawers(toggleZenMode: () => void): void {
  const mButtons = document.querySelectorAll<HTMLElement>('.m-btn[data-drawer]');
  const drawers = document.querySelectorAll<HTMLElement>('.mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const mActZen = document.getElementById('m-act-zen');

  if (mActZen) {
    mActZen.onclick = toggleZenMode;
  }

  // 1. Clonar Explorador Móvil
  const desktopExplorer = document.getElementById('pane-explorer');
  const mobileExplorerTarget = document.getElementById('mobile-explorer-content');
  if (desktopExplorer && mobileExplorerTarget && mobileExplorerTarget.children.length === 0) {
    const clone = desktopExplorer.cloneNode(true) as HTMLElement;
    clone.style.display = 'flex';
    mobileExplorerTarget.appendChild(clone);
  }

  // 2. Buscador Móvil
  async function initMobileSearch(): Promise<void> {
    const mobileSearchTarget = document.getElementById('mobile-search-content');
    if (mobileSearchTarget && mobileSearchTarget.innerHTML.trim() === '') {
      mobileSearchTarget.innerHTML = `<div style="padding: 0.5rem 0;" id="mobile-pagefind-container">Cargando buscador...</div>`;
      await loadPagefindAssets();
      mobileSearchTarget.innerHTML = `<div style="padding: 0.5rem 0;" id="mobile-pagefind-container"></div>`;
      new window.PagefindUI({
        element: "#mobile-pagefind-container",
        showSubResults: true,
        resetStyles: false,
        ranking: {
          termFrequency: 0.2,
          pageLength: 0.75,
          termSaturation: 1.4
        }
      });
    }
  }

  // 3. Índice Móvil (TOC)
  const mobileTocTarget = document.getElementById('mobile-toc-content');
  const desktopTocBody = document.getElementById('toc-body') || document.querySelector('.toc-body');
  if (mobileTocTarget) {
    mobileTocTarget.innerHTML = '';
    if (desktopTocBody && desktopTocBody.innerHTML.trim() !== '') {
      const clone = desktopTocBody.cloneNode(true) as HTMLElement;
      mobileTocTarget.appendChild(clone);
    } else {
      mobileTocTarget.innerHTML = `<p class="empty-note" style="opacity:0.6; padding: 1rem;">Esta página no contiene subtítulos.</p>`;
    }
  }

  // 4. Metadatos Móvil
  const mobileMetaTarget = document.getElementById('mobile-meta-content');
  const desktopMetaBody = document.querySelector('.bottom-meta .panel-body') || document.querySelector('.meta-body');
  if (mobileMetaTarget) {
    mobileMetaTarget.innerHTML = '';
    if (desktopMetaBody && desktopMetaBody.innerHTML.trim() !== '') {
      const clone = desktopMetaBody.cloneNode(true) as HTMLElement;
      mobileMetaTarget.appendChild(clone);
    } else {
      mobileMetaTarget.innerHTML = `<p class="empty-note" style="opacity:0.6; padding: 1rem;">No hay metadatos disponibles para esta vista.</p>`;
    }
  }

  // 5. Ajustes Móvil
  const mobileSettingsTarget = document.getElementById('mobile-settings-content');
  const desktopSettings = document.getElementById('pane-settings');
  const root = document.documentElement;

  if (mobileSettingsTarget && desktopSettings && mobileSettingsTarget.children.length === 0) {
    const clone = desktopSettings.cloneNode(true) as HTMLElement;
    clone.style.display = 'flex';
    clone.querySelectorAll('select').forEach((sel, idx) => {
      sel.removeAttribute('id');
      if (idx === 0) sel.setAttribute('data-setting', 'modo');
      else if (idx === 1) sel.setAttribute('data-setting', 'estilo');
      else if (idx === 2) sel.setAttribute('data-setting', 'texto');
    });
    mobileSettingsTarget.appendChild(clone);

    const curModo = root.getAttribute('data-modo') || 'oscuro';
    const curEstilo = root.getAttribute('data-estilo') || 'moderno';
    const curTexto = root.getAttribute('data-texto') || 'estandar';

    desktopSettings.querySelectorAll('select').forEach((sel, idx) => {
      if (idx === 0) sel.setAttribute('data-setting', 'modo');
      else if (idx === 1) sel.setAttribute('data-setting', 'estilo');
      else if (idx === 2) sel.setAttribute('data-setting', 'texto');
    });

    mobileSettingsTarget.querySelectorAll('select').forEach((sel) => {
      const selectEl = sel as HTMLSelectElement;
      const settingType = selectEl.getAttribute('data-setting');
      if (settingType === 'modo') selectEl.value = curModo;
      if (settingType === 'estilo') selectEl.value = curEstilo;
      if (settingType === 'texto') selectEl.value = curTexto;
    });
  }

  function closeAllDrawers(): void {
    drawers.forEach((d) => d.classList.remove('open'));
    backdrop?.classList.remove('active');
    mButtons.forEach((b) => b.classList.remove('active'));
  }

  mButtons.forEach((btn) => {
    btn.onclick = () => {
      const drawerId = btn.getAttribute('data-drawer');
      const targetDrawer = drawerId ? document.getElementById(drawerId) : null;
      const isOpen = targetDrawer?.classList.contains('open');

      closeAllDrawers();

      if (!isOpen && targetDrawer) {
        if (drawerId === 'm-drawer-search') {
          initMobileSearch();
        }
        targetDrawer.classList.add('open');
        backdrop?.classList.add('active');
        btn.classList.add('active');
      }
    };
  });

  if (backdrop) {
    backdrop.onclick = closeAllDrawers;
  }
}