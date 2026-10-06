// src/scripts/core/clipboard.ts

export function initClipboard(): void {
  // 1. Decoración interactiva para imágenes (Botón Copiar)
  document.querySelectorAll<HTMLImageElement>('.main-content article img').forEach((img) => {
    if (img.closest('.img-interactive-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'img-interactive-wrapper';

    const toolbar = document.createElement('div');
    toolbar.className = 'img-toolbar';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'img-tool-btn';
    copyBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
      <span>Copiar</span>
    `;

    copyBtn.onclick = async () => {
      try {
        const response = await fetch(img.src);
        const blob = await response.blob();

        if (blob.type.includes('png') || blob.type.includes('jpeg')) {
          await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob })
          ]);
        } else {
          await navigator.clipboard.writeText(img.src);
        }

        copyBtn.classList.add('copied');
        copyBtn.querySelector('span')!.textContent = '✓ Copiado';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.querySelector('span')!.textContent = 'Copiar';
        }, 1500);
      } catch {
        await navigator.clipboard.writeText(img.src);
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span')!.textContent = '✓ Enlace Copiado';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          copyBtn.querySelector('span')!.textContent = 'Copiar';
        }, 1500);
      }
    };

    toolbar.appendChild(copyBtn);
    img.parentNode?.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(toolbar);
  });
}

// Escuchador global para botones de copiado de código (delegación de eventos)
export function setupCodeCopyListener(): void {
  if ((window as any).__codeCopyListenerInitialized) return;
  (window as any).__codeCopyListenerInitialized = true;

  document.addEventListener('click', async (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const btn = target.closest('.copy-code-btn');
    if (!btn) return;

    const wrapper = btn.closest('.code-block-wrapper') as HTMLElement | null;
    const text = wrapper?.dataset.sourceCode ||
                wrapper?.querySelector('pre code')?.textContent ||
                wrapper?.querySelector('pre')?.textContent ||
                '';

    if (!text) return;

    await navigator.clipboard.writeText(text.trim());
    btn.textContent = '✓ Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copiar';
      btn.classList.remove('copied');
    }, 1500);
  });
}