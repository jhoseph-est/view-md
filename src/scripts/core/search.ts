// src/scripts/core/search.ts

declare global {
  interface Window {
    PagefindUI: any;
  }
}

let pagefindLoadingPromise: Promise<void> | null = null;

export function loadPagefindAssets(): Promise<void> {
  if (window.PagefindUI) return Promise.resolve();
  if (pagefindLoadingPromise) return pagefindLoadingPromise;

  pagefindLoadingPromise = new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/pagefind/pagefind-ui.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = '/pagefind/pagefind-ui.js';
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });

  return pagefindLoadingPromise;
}

export async function initDesktopSearch(): Promise<void> {
  const container = document.getElementById('inline-pagefind-container');
  if (container && container.innerHTML.trim() === '') {
    container.innerHTML = '<span style="opacity: 0.5; font-size: 0.85rem;">Cargando motor de búsqueda...</span>';
    await loadPagefindAssets();
    container.innerHTML = '';
    new window.PagefindUI({
      element: "#inline-pagefind-container",
      showSubResults: true,
      resetStyles: false,
      ranking: {
        termFrequency: 0.2,
        pageLength: 0.75,
        termSaturation: 1.4
      }
    });
  }
  setTimeout(() => container?.querySelector('input')?.focus(), 80);
}