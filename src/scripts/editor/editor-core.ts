// src/scripts/editor/editor-core.ts
import { initMarkdownControls } from './editor-markdown';
import { initMermaidControls } from './editor-mermaid';
import { initCaratulaControls, updateCoverLivePreview } from './editor-caratula';

export function setupEditorDrawer(): void {
  const drawer = document.getElementById('editor-diseno-drawer');
  const closeBtn = document.getElementById('btn-close-editor');
  const root = document.documentElement;
  if (!drawer) return;

  // 1. Abrir / Cerrar Drawer
  function toggleDrawer(open?: boolean): void {
    const isCurrentlyActive = drawer?.classList.contains('is-open');
    const shouldOpen = open !== undefined ? open : !isCurrentlyActive;

    if (shouldOpen) {
      drawer?.classList.add('is-open');
      drawer?.setAttribute('aria-hidden', 'false');
      updateCoverLivePreview();
    } else {
      drawer?.classList.remove('is-open');
      drawer?.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeBtn) closeBtn.onclick = () => toggleDrawer(false);
  window.addEventListener('toggle-editor-drawer', () => toggleDrawer());

  // 2. Navegación por pestañas
  const tabs = drawer.querySelectorAll<HTMLButtonElement>('.tab-btn');
  const contents = drawer.querySelectorAll<HTMLElement>('.tab-content');

  tabs.forEach(btn => {
    btn.onclick = () => {
      tabs.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      if (targetId) {
        document.getElementById(targetId)?.classList.add('active');
        if (targetId === 'tab-caratula') updateCoverLivePreview();
      }
    };
  });

  // 3. Conmutador de modo claro / oscuro
  const btnClaro = document.getElementById('btn-mode-claro');
  const btnOscuro = document.getElementById('btn-mode-oscuro');

  btnClaro?.addEventListener('click', () => {
    btnClaro.classList.add('active');
    btnOscuro?.classList.remove('active');
    root.setAttribute('data-modo', 'claro');
    window.dispatchEvent(new Event('theme-changed'));
  });

  btnOscuro?.addEventListener('click', () => {
    btnOscuro.classList.add('active');
    btnClaro?.classList.remove('active');
    root.setAttribute('data-modo', 'oscuro');
    window.dispatchEvent(new Event('theme-changed'));
  });

  // 4. Superficies y Acentos Base
  const bindBaseColor = (id: string, hexId: string, cssVar: string) => {
    const input = document.getElementById(id) as HTMLInputElement | null;
    const hex = hexId ? document.getElementById(hexId) : null;
    if (!input) return;
    input.oninput = () => {
      if (hex) hex.textContent = input.value;
      root.style.setProperty(cssVar, input.value);
      if (cssVar === '--accent-color') {
        root.style.setProperty('--accent-subtle', `${input.value}1f`);
        root.style.setProperty('--accent-border', `${input.value}40`);
      }
    };
  };

  bindBaseColor('col-bg', 'hex-bg', '--bg-color');
  bindBaseColor('col-header', 'hex-header', '--header-bg');
  bindBaseColor('col-card', 'hex-card', '--card-bg');
  bindBaseColor('col-border', 'hex-border', '--border-color');
  bindBaseColor('col-accent', 'hex-accent', '--accent-color');
  bindBaseColor('col-link', 'hex-link', '--link-color');

  // 5. Inicializar submódulos
  initMarkdownControls(root);
  initMermaidControls(root);
  initCaratulaControls();

  // 6. Exportadores a JSON
  function notificarCopiado(btn: HTMLButtonElement, textoOriginal: string): void {
    btn.textContent = '✓ ¡Copiado al Portapapeles!';
    btn.style.backgroundColor = '#10b981';
    setTimeout(() => {
      btn.textContent = textoOriginal;
      btn.style.backgroundColor = '';
    }, 1800);
  }

  const btnExpEstilo = document.getElementById('btn-export-estilo') as HTMLButtonElement | null;
  if (btnExpEstilo) {
    btnExpEstilo.onclick = async () => {
      const name = (document.getElementById('ed-style-name') as HTMLInputElement)?.value || 'Nuevo Estilo';
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const modoActual = root.getAttribute('data-modo') || 'claro';

      const jsonEstilo = {
        [id]: {
          id,
          nombre: name,
          tipografia: {
            fuenteCuerpo: (document.getElementById('font-doc') as HTMLSelectElement)?.value || "system-ui, sans-serif",
            fuenteTitulos: (document.getElementById('font-title') as HTMLSelectElement)?.value || "system-ui, sans-serif",
            tamanoBase: "16px",
            interlineado: (document.getElementById('geo-lineheight') as HTMLInputElement)?.value || "1.65"
          },
          [modoActual]: {
            acento: (document.getElementById('col-accent') as HTMLInputElement)?.value || "#8b5cf6",
            superficies: {
              fondoPrincipal: (document.getElementById('col-bg') as HTMLInputElement)?.value || "#ffffff",
              fondoSecundario: (document.getElementById('col-header') as HTMLInputElement)?.value || "#f8fafc",
              fondoTarjetas: (document.getElementById('col-card') as HTMLInputElement)?.value || "#f1f5f9",
              borde: (document.getElementById('col-border') as HTMLInputElement)?.value || "#cbd5e1"
            },
            textos: {
              principal: (document.getElementById('col-text') as HTMLInputElement)?.value || "#0f172a",
              negrita: (document.getElementById('col-bold') as HTMLInputElement)?.value || "#020617",
              cursiva: (document.getElementById('col-italic') as HTMLInputElement)?.value || "#16a34a",
              enlace: (document.getElementById('col-link') as HTMLInputElement)?.value || "#2563eb",
              math: (document.getElementById('col-katex') as HTMLInputElement)?.value || "#0f172a"
            }
          }
        }
      };

      await navigator.clipboard.writeText(JSON.stringify(jsonEstilo, null, 2));
      notificarCopiado(btnExpEstilo, '📋 Copiar JSON para estilos-base.json');
    };
  }

  const btnExpCov = document.getElementById('btn-export-caratula') as HTMLButtonElement | null;
  if (btnExpCov) {
    btnExpCov.onclick = async () => {
      const name = (document.getElementById('ed-cover-name') as HTMLInputElement)?.value || 'Nuevo Modelo';
      const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');

      const jsonCov = {
        [id]: {
          id,
          nombre: name,
          zonas: {
            membrete: (document.getElementById('pos-header') as HTMLSelectElement)?.value || 'top-center',
            logo: (document.getElementById('pos-logo') as HTMLSelectElement)?.value || 'mid-center',
            titulo: (document.getElementById('pos-title') as HTMLSelectElement)?.value || 'mid-center',
            autores: (document.getElementById('pos-autores') as HTMLSelectElement)?.value || 'mid-center',
            pie: (document.getElementById('pos-pie') as HTMLSelectElement)?.value || 'bottom-center'
          },
          logo: {
            altoMaximoMm: parseInt((document.getElementById('cov-logosize') as HTMLInputElement)?.value || '40', 10),
            mostrar: (document.getElementById('cov-show-logo') as HTMLInputElement)?.checked ?? true
          },
          titulo: {
            tamanoPt: parseFloat((document.getElementById('cov-titlesize') as HTMLInputElement)?.value || '14'),
            transformacion: (document.getElementById('cov-transform') as HTMLSelectElement)?.value || 'uppercase'
          },
          mostrarDocente: (document.getElementById('cov-show-docente') as HTMLInputElement)?.checked ?? true,
          mostrarIntegrantes: (document.getElementById('cov-show-integrantes') as HTMLInputElement)?.checked ?? true,
          mostrarPie: (document.getElementById('cov-show-pie') as HTMLInputElement)?.checked ?? true
        }
      };

      await navigator.clipboard.writeText(JSON.stringify(jsonCov, null, 2));
      notificarCopiado(btnExpCov, '📋 Copiar JSON para caratulas.json');
    };
  }
}