// src/utils/themeInjector.ts
import estilosData from '../config/estilos-base.json';

export function generateThemeCss(): string {
  let css = '';

  for (const [id, config] of Object.entries(estilosData as Record<string, any>)) {
    css += `
      html[data-estilo="${id}"] {
        --doc-font: ${config.tipografia?.fuenteCuerpo || "system-ui, sans-serif"};
        --title-font: ${config.tipografia?.fuenteTitulos || "system-ui, sans-serif"};
        --doc-line-height: ${config.tipografia?.interlineado || "1.65"};
      }
    `;

    // Modo Claro
    if (config.claro) {
      const c = config.claro;
      css += `
        html[data-estilo="${id}"][data-modo="claro"] {
          --bg-color: ${c.superficies?.fondoPrincipal || "#ffffff"};
          --header-bg: ${c.superficies?.fondoSecundario || "#f8fafc"};
          --card-bg: ${c.superficies?.fondoTarjetas || "#f1f5f9"};
          --border-color: ${c.superficies?.borde || "#cbd5e1"};

          --text-color: ${c.textos?.principal || "#0f172a"};
          --text-muted: ${c.textos?.secundario || "#64748b"};
          --color-negrita: ${c.textos?.negrita || "#020617"};
          --link-color: ${c.textos?.enlace || "#2563eb"};
          --link-hover: ${c.textos?.enlaceHover || "#1d4ed8"};

          --accent-color: ${c.acento || "#8b5cf6"};
          --accent-hover: ${c.acentoHover || "#7c3aed"};
          --accent-subtle: ${c.acentoSubtle || "rgba(139, 92, 246, 0.12)"};
          --accent-border: ${c.acentoBorder || "rgba(139, 92, 246, 0.25)"};

          --color-h1: ${c.encabezados?.h1?.color || "#15803d"};
          --h1-size: ${c.encabezados?.h1?.tamano || "2.2rem"};
          --color-h2: ${c.encabezados?.h2?.color || "#0f766e"};
          --h2-size: ${c.encabezados?.h2?.tamano || "1.8rem"};
          --color-h3: ${c.encabezados?.h3?.color || "#1d4ed8"};
          --h3-size: ${c.encabezados?.h3?.tamano || "1.5rem"};
          --color-h4: ${c.encabezados?.h4?.color || "#4338ca"};
          --h4-size: ${c.encabezados?.h4?.tamano || "1.25rem"};
          --color-h5: ${c.encabezados?.h5?.color || "#6d28d9"};
          --h5-size: ${c.encabezados?.h5?.tamano || "1.1rem"};
          --color-h6: ${c.encabezados?.h6?.color || "#475569"};
          --h6-size: ${c.encabezados?.h6?.tamano || "1rem"};
        }
      `;
    }

    // Modo Oscuro
    if (config.oscuro) {
      const o = config.oscuro;
      css += `
        html[data-estilo="${id}"][data-modo="oscuro"] {
          --bg-color: ${o.superficies?.fondoPrincipal || "#0f172a"};
          --header-bg: ${o.superficies?.fondoSecundario || "#1e293b"};
          --card-bg: ${o.superficies?.fondoTarjetas || "#1e293b"};
          --border-color: ${o.superficies?.borde || "#334155"};

          --text-color: ${o.textos?.principal || "#f8fafc"};
          --text-muted: ${o.textos?.secundario || "#94a3b8"};
          --color-negrita: ${o.textos?.negrita || "#ffffff"};
          --link-color: ${o.textos?.enlace || "#60a5fa"};
          --link-hover: ${o.textos?.enlaceHover || "#93c5fd"};

          --accent-color: ${o.acento || "#8b5cf6"};
          --accent-hover: ${o.acentoHover || "#a78bfa"};
          --accent-subtle: ${o.acentoSubtle || "rgba(139, 92, 246, 0.18)"};
          --accent-border: ${o.acentoBorder || "rgba(139, 92, 246, 0.35)"};

          --color-h1: ${o.encabezados?.h1?.color || "#4ade80"};
          --h1-size: ${o.encabezados?.h1?.tamano || "2.2rem"};
          --color-h2: ${o.encabezados?.h2?.color || "#2dd4bf"};
          --h2-size: ${o.encabezados?.h2?.tamano || "1.8rem"};
          --color-h3: ${o.encabezados?.h3?.color || "#60a5fa"};
          --h3-size: ${o.encabezados?.h3?.tamano || "1.5rem"};
          --color-h4: ${o.encabezados?.h4?.color || "#818cf8"};
          --h4-size: ${o.encabezados?.h4?.tamano || "1.25rem"};
          --color-h5: ${o.encabezados?.h5?.color || "#a78bfa"};
          --h5-size: ${o.encabezados?.h5?.tamano || "1.1rem"};
          --color-h6: ${o.encabezados?.h6?.color || "#94a3b8"};
          --h6-size: ${o.encabezados?.h6?.tamano || "1rem"};
        }
      `;
    }
  }

  return css;
}