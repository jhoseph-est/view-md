// src/utils/themePresetsManager.ts

export interface WebThemeConfig {
  nombre?: string;
  tipografia?: {
    fuenteCuerpo?: string;
    fuenteTitulos?: string;
    fuenteCodigo?: string;
    interlineado?: string | number;
  };
  claro?: Record<string, any>;
  oscuro?: Record<string, any>;
}

export function mergeWithDefault<T extends Record<string, any>>(defaultData: T, overrideData: Partial<T>): T {
  const result: any = { ...defaultData };
  for (const key of Object.keys(overrideData)) {
    const val = overrideData[key];
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      result[key] = mergeWithDefault(defaultData[key] || {}, val);
    } else if (val !== undefined) {
      result[key] = val;
    }
  }
  return result;
}

export function compileThemeToCss(themeId: string, config: WebThemeConfig): string {
  let css = '';
  const tipo = config.tipografia || {};

  // 1. Tipografías base del tema
  css += `
    html[data-estilo="${themeId}"] {
      --doc-font: ${tipo.fuenteCuerpo || "system-ui, sans-serif"};
      --title-font: ${tipo.fuenteTitulos || "system-ui, sans-serif"};
      --code-font: ${tipo.fuenteCodigo || "'Fira Code', monospace"};
      --doc-line-height: ${tipo.interlineado || "1.65"};
    }
  `;

  // 2. Modo Claro
  if (config.claro) {
    const c = config.claro;
    css += `
      html[data-estilo="${themeId}"][data-modo="claro"] {
        --bg-color: ${c.superficies?.fondoPrincipal || "#ffffff"};
        --header-bg: ${c.superficies?.fondoSecundario || "#f8fafc"};
        --card-bg: ${c.superficies?.fondoTarjetas || "#f1f5f9"};
        --border-color: ${c.superficies?.borde || "#cbd5e1"};

        --text-color: ${c.textos?.principal || "#0f172a"};
        --text-muted: ${c.textos?.secundario || "#64748b"};
        --color-negrita: ${c.textos?.negrita || "#020617"};
        --color-cursiva: ${c.textos?.cursiva || "#16a34a"};
        --color-negrita-cursiva: ${c.textos?.negritaCursiva || "#9333ea"};
        --color-tachado: ${c.textos?.tachado || "#94a3b8"};
        --color-codigo-inline: ${c.textos?.codigoInline || "#c2410c"};

        --link-color: ${c.textos?.enlace || "#2563eb"};
        --accent-color: ${c.acento || "#8b5cf6"};
        --accent-subtle: ${c.acentoSubtle || "rgba(139, 92, 246, 0.12)"};

        --color-h1: ${c.encabezados?.h1?.color || "#15803d"};
        --h1-size: ${c.encabezados?.h1?.tamano || "2.2rem"};
        --color-h2: ${c.encabezados?.h2?.color || "#0f766e"};
        --h2-size: ${c.encabezados?.h2?.tamano || "1.8rem"};
        --color-h3: ${c.encabezados?.h3?.color || "#1d4ed8"};
        --h3-size: ${c.encabezados?.h3?.tamano || "1.5rem"};
        --color-h4: ${c.encabezados?.h4?.color || "#4338ca"};
        --color-h5: ${c.encabezados?.h5?.color || "#6d28d9"};
        --color-h6: ${c.encabezados?.h6?.color || "#475569"};
      }
    `;
  }

  // 3. Modo Oscuro
  if (config.oscuro) {
    const o = config.oscuro;
    css += `
      html[data-estilo="${themeId}"][data-modo="oscuro"] {
        --bg-color: ${o.superficies?.fondoPrincipal || "#0f172a"};
        --header-bg: ${o.superficies?.fondoSecundario || "#1e293b"};
        --card-bg: ${o.superficies?.fondoTarjetas || "#1e293b"};
        --border-color: ${o.superficies?.borde || "#334155"};

        --text-color: ${o.textos?.principal || "#f8fafc"};
        --text-muted: ${o.textos?.secundario || "#94a3b8"};
        --color-negrita: ${o.textos?.negrita || "#ffffff"};
        --color-cursiva: ${o.textos?.cursiva || "#a3e635"};
        --color-negrita-cursiva: ${o.textos?.negritaCursiva || "#c084fc"};
        --color-tachado: ${o.textos?.tachado || "#64748b"};
        --color-codigo-inline: ${o.textos?.codigoInline || "#fb923c"};

        --link-color: ${o.textos?.enlace || "#60a5fa"};
        --accent-color: ${o.acento || "#8b5cf6"};
        --accent-subtle: ${o.acentoSubtle || "rgba(139, 92, 246, 0.18)"};

        --color-h1: ${o.encabezados?.h1?.color || "#4ade80"};
        --h1-size: ${o.encabezados?.h1?.tamano || "2.2rem"};
        --color-h2: ${o.encabezados?.h2?.color || "#2dd4bf"};
        --h2-size: ${o.encabezados?.h2?.tamano || "1.8rem"};
        --color-h3: ${o.encabezados?.h3?.color || "#60a5fa"};
        --h3-size: ${o.encabezados?.h3?.tamano || "1.5rem"};
        --color-h4: ${o.encabezados?.h4?.color || "#818cf8"};
        --color-h5: ${o.encabezados?.h5?.color || "#a78bfa"};
        --color-h6: ${o.encabezados?.h6?.color || "#94a3b8"};
      }
    `;
  }

  return css;
}