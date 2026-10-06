// src/scripts/core/ui-sync.ts
import { initDesktopSearch } from './search';

export function toggleZenMode(): void {
  const mainGrid = document.getElementById('main-grid');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      mainGrid?.classList.add('zen-active');
    }).catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

export function initUiSync(): void {
  const root = document.documentElement;
  const mainGrid = document.getElementById('main-grid');

  let isLeftOpen = localStorage.getItem('wiki-left-open') === 'true';
  let showToc = localStorage.getItem('wiki-show-toc') === 'true';
  let showMeta = localStorage.getItem('wiki-show-meta') === 'true';
  let activePane = localStorage.getItem('wiki-active-pane') || 'pane-explorer';

  let memLeft = localStorage.getItem('wiki-mem-left') === 'true';
  let memToc = localStorage.getItem('wiki-mem-toc') === 'true';
  let memMeta = localStorage.getItem('wiki-mem-meta') === 'true';

  const actToc = document.getElementById('act-toc');
  const actMeta = document.getElementById('act-meta');
  const actCollapse = document.getElementById('act-collapse');
  const actZen = document.getElementById('act-zen');
  const btnExitZen = document.getElementById('btn-exit-zen');
  const actExplorer = document.getElementById('act-explorer');
  const actSearch = document.getElementById('act-search');
  const actSettings = document.getElementById('act-settings');
  const actPrint = document.getElementById('act-print');
  const leftTitle = document.getElementById('left-panel-title');
  const actSlides = document.getElementById('act-slides') as HTMLAnchorElement | null;

  if (actSlides) {
    const currentDocPath = window.location.pathname.replace(/^\/docs\/?/, '').replace(/\/$/, '');
    actSlides.href = `/slides/${currentDocPath}`;
  }

  function syncUI(save = true): void {
    root.classList.toggle('no-left-panel', !isLeftOpen);
    root.classList.toggle('no-toc', !showToc);
    root.classList.toggle('no-meta', !showMeta);

    if (isLeftOpen) {
      root.setAttribute('data-active-pane', activePane);
      if (leftTitle) {
        if (activePane === 'pane-explorer') leftTitle.textContent = 'EXPLORADOR';
        if (activePane === 'pane-search') {
          leftTitle.textContent = 'BUSCAR';
          initDesktopSearch();
        }
        if (activePane === 'pane-settings') leftTitle.textContent = 'AJUSTES';
      }
    } else {
      root.removeAttribute('data-active-pane');
    }

    const anyActive = isLeftOpen || showToc || showMeta;
    if (actCollapse) actCollapse.classList.toggle('active', anyActive);

    if (save) {
      localStorage.setItem('wiki-left-open', isLeftOpen.toString());
      localStorage.setItem('wiki-show-toc', showToc.toString());
      localStorage.setItem('wiki-show-meta', showMeta.toString());
      localStorage.setItem('wiki-active-pane', activePane);
    }
  }

  if (actCollapse) {
    actCollapse.onclick = () => {
      const anyActive = isLeftOpen || showToc || showMeta;
      if (anyActive) {
        memLeft = isLeftOpen;
        memToc = showToc;
        memMeta = showMeta;
        localStorage.setItem('wiki-mem-left', memLeft.toString());
        localStorage.setItem('wiki-mem-toc', memToc.toString());
        localStorage.setItem('wiki-mem-meta', memMeta.toString());

        isLeftOpen = false;
        showToc = false;
        showMeta = false;
      } else {
        if (!memLeft && !memToc && !memMeta) {
          isLeftOpen = true;
        } else {
          isLeftOpen = memLeft;
          showToc = memToc;
          showMeta = memMeta;
        }
      }
      syncUI();
    };
  }

  if (actZen) actZen.onclick = toggleZenMode;
  if (btnExitZen) {
    btnExitZen.onclick = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        mainGrid?.classList.remove('zen-active');
      }
    };
  }

  if (actExplorer) {
    actExplorer.onclick = () => {
      if (isLeftOpen && activePane === 'pane-explorer') {
        isLeftOpen = false;
      } else {
        isLeftOpen = true;
        activePane = 'pane-explorer';
      }
      syncUI();
    };
  }

  if (actSearch) {
    actSearch.onclick = () => {
      if (isLeftOpen && activePane === 'pane-search') {
        isLeftOpen = false;
      } else {
        isLeftOpen = true;
        activePane = 'pane-search';
      }
      syncUI();
    };
  }

  if (actSettings) {
    actSettings.onclick = () => {
      if (isLeftOpen && activePane === 'pane-settings') {
        isLeftOpen = false;
      } else {
        isLeftOpen = true;
        activePane = 'pane-settings';
      }
      syncUI();
    };
  }

  if (actToc) actToc.onclick = () => { showToc = !showToc; syncUI(); };
  if (actMeta) actMeta.onclick = () => { showMeta = !showMeta; syncUI(); };

  if (actPrint) {
    actPrint.onclick = () => {
      window.dispatchEvent(new CustomEvent('open-print-modal'));
    };
  }

  syncUI(false);
}

export function setupGlobalUiListeners(): void {
  if ((window as any).__uiGlobalListenersInitialized) return;
  (window as any).__uiGlobalListenersInitialized = true;

  const root = document.documentElement;
  const mainGrid = document.getElementById('main-grid');

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      mainGrid?.classList.remove('zen-active');
    } else {
      mainGrid?.classList.add('zen-active');
    }
  });

  document.addEventListener('change', (e) => {
    const target = e.target as HTMLElement;
    if (!(target instanceof HTMLSelectElement)) return;

    const val = target.value;
    const settingType = target.getAttribute('data-setting') || target.id.toLowerCase();

    if (settingType.includes('theme') || settingType.includes('modo') || settingType === 'modo') {
      root.setAttribute('data-modo', val);
      localStorage.setItem('pref-modo', val);
      window.dispatchEvent(new Event('theme-changed'));
    } else if (settingType.includes('style') || settingType.includes('estilo') || settingType === 'estilo') {
      root.setAttribute('data-estilo', val);
      localStorage.setItem('pref-estilo', val);
      window.dispatchEvent(new Event('theme-changed'));
    } else if (settingType.includes('size') || settingType.includes('texto') || settingType === 'texto') {
      root.setAttribute('data-texto', val);
      localStorage.setItem('pref-texto', val);
    }

    document.querySelectorAll('select').forEach((sel) => {
      const other = sel as HTMLSelectElement;
      if (other !== target) {
        const otherType = other.getAttribute('data-setting') || other.id.toLowerCase();
        if (
          otherType === settingType ||
          (settingType.includes('modo') && otherType.includes('modo')) ||
          (settingType.includes('estilo') && otherType.includes('estilo')) ||
          (settingType.includes('texto') && otherType.includes('texto'))
        ) {
          other.value = val;
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    const actCollapse = document.getElementById('act-collapse');
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      actCollapse?.click();
    } else if (e.altKey && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      toggleZenMode();
    }
  });
}