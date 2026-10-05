// src/utils/themeInjector.ts
import estilosBase from '../config/estilos-base.json';
import componentes from '../config/componentes.json';

interface HeadingConfig {
  color?: string;
  tamano?: string;
  peso?: string | number;
  alineacion?: string;
  espaciadoSuperior?: string;
  espaciadoInferior?: string;
  interlineado?: string;
  transformacion?: string;
  bordeInferior?: string;
}

interface ThemePalette {
  fondo?: string;
  fondoCabecera?: string;
  fondoTarjeta?: string;
  fondoAtenuado?: string;
  borde?: string;
  bordeFuerte?: string;
  texto?: string;
  textoAtenuado?: string;
  textoNegrita?: string;
  textoCursiva?: string;
  enlace?: string;
  enlaceHover?: string;
  acento?: string;
  acentoHover?: string;
  acentoTenue?: string;
  acentoBorde?: string;
  colorMatematica?: string;
  encabezados?: Record<string, HeadingConfig>;
}

export function generateThemeCss(): string {
  let css = ':root {\n';

  // 1. INYECCIÓN DE COMPONENTES GLOBALES (componentes.json)
  if (componentes) {
    // Tarjeta de informe / cabecera web
    const tj = componentes.tarjetaInforme;
    if (tj) {
      css += `  --report-card-bg: ${tj.fondo || 'rgba(255, 255, 255, 0.03)'};\n`;
      css += `  --report-card-border: ${tj.borde || 'var(--border-color)'};\n`;
      css += `  --report-card-radius: ${tj.radioBorde || '8px'};\n`;
      css += `  --report-card-padding: ${tj.espaciadoInterno || '1rem 1.25rem'};\n`;
      css += `  --report-banner-font: ${tj.fuenteBanner || 'var(--ui-font)'};\n`;
      css += `  --report-banner-color: ${tj.colorBanner || 'var(--accent-color)'};\n`;
      css += `  --report-subtitle-color: ${tj.colorSubtitulo || 'var(--text-color)'};\n`;
      css += `  --report-label-color: ${tj.colorEtiqueta || 'var(--text-muted)'};\n`;
      css += `  --report-value-color: ${tj.colorValor || 'var(--text-color)'};\n`;
      css += `  --report-bullet-color: ${tj.vinetaColor || 'var(--accent-color)'};\n`;
    }

    // Citas formales (blockquote)
    const ct = componentes.citas;
    if (ct) {
      css += `  --quote-border-w: ${ct.grosorBorde || '3px'};\n`;
      css += `  --quote-border-style: ${ct.estiloBorde || 'solid'};\n`;
      css += `  --quote-border-color: ${ct.colorBorde || 'var(--accent-color)'};\n`;
      css += `  --quote-indent: ${ct.sangriaIzquierda || '1.25rem'};\n`;
      css += `  --quote-font-style: ${ct.estiloFuente || 'italic'};\n`;
      css += `  --quote-opacity: ${ct.opacidad || '0.9'};\n`;
    }

    // Bloque de código Shiki / Wrapper
    const cd = componentes.bloqueCodigo;
    if (cd) {
      css += `  --code-radius: ${cd.radioBorde || '8px'};\n`;
      css += `  --code-border-w: ${cd.grosorBorde || '1px'};\n`;
      css += `  --code-border-color: ${cd.colorBorde || 'var(--border-color)'};\n`;
      css += `  --code-shadow: ${cd.sombra || 'none'};\n`;
      css += `  --code-toolbar-bg: ${cd.fondoToolbar || 'rgba(15, 23, 42, 0.85)'};\n`;
      css += `  --code-btn-color: ${cd.colorBotonCopiar || '#f8fafc'};\n`;
      css += `  --code-btn-hover-color: ${cd.colorBotonCopiarHover || '#c4b5fd'};\n`;
    }

    // Tablas APA y generales
    const tb = componentes.tablas;
    if (tb) {
      css += `  --table-border-top-w: ${tb.grosorBordeSuperior || '1.5pt'};\n`;
      css += `  --table-border-bottom-w: ${tb.grosorBordeInferior || '1.5pt'};\n`;
      css += `  --table-border-header-w: ${tb.grosorBordeCabecera || '1pt'};\n`;
      css += `  --table-header-bg: ${tb.fondoCabecera || 'transparent'};\n`;
      css += `  --table-cell-padding: ${tb.paddingCeldas || '0.5rem 0.75rem'};\n`;
      css += `  --table-font-size: ${tb.tamanoFuente || '0.95rem'};\n`;
    }

    // Fórmulas KaTeX
    const kt = componentes.katex;
    if (kt) {
      css += `  --katex-glyph-color: ${kt.colorGlifo || 'var(--color-math)'};\n`;
      css += `  --katex-display-scale: ${kt.escalaDisplay || '100%'};\n`;
      css += `  --katex-display-margin: ${kt.margenVertical || '1.5rem'};\n`;
    }
  }

  css += '}\n\n';

  // 2. INYECCIÓN POR CADA ESTILO Y MODO (estilos-base.json)
  const estilos = estilosBase as Record<string, any>;

  for (const [estiloKey, config] of Object.entries(estilos)) {
    const selectorEstilo = `[data-estilo="${estiloKey}"]`;

    // Tipografía común al estilo
    if (config.tipografia) {
      css += `${selectorEstilo} {\n`;
      css += `  --doc-font: ${config.tipografia.fuenteCuerpo || 'system-ui, sans-serif'};\n`;
      css += `  --heading-font: ${config.tipografia.fuenteTitulos || 'system-ui, sans-serif'};\n`;
      css += `  --line-height-base: ${config.tipografia.interlineado || '1.65'};\n`;
      css += `}\n\n`;
    }

    // Modos Claro y Oscuro del estilo
    for (const modo of ['claro', 'oscuro']) {
      const p: ThemePalette = config[modo];
      if (!p) continue;

      const selectorCompleto = `html[data-estilo="${estiloKey}"][data-modo="${modo}"], ${selectorEstilo}[data-modo="${modo}"]`;

      css += `${selectorCompleto} {\n`;
      // Superficies y bordes
      if (p.fondo) css += `  --bg-color: ${p.fondo};\n`;
      if (p.fondoCabecera) css += `  --header-bg: ${p.fondoCabecera};\n`;
      if (p.fondoTarjeta) css += `  --card-bg: ${p.fondoTarjeta};\n`;
      if (p.fondoAtenuado) css += `  --bg-muted: ${p.fondoAtenuado};\n`;
      if (p.borde) css += `  --border-color: ${p.borde};\n`;
      if (p.bordeFuerte) css += `  --border-strong: ${p.bordeFuerte};\n`;

      // Textos y acentos
      if (p.texto) css += `  --text-color: ${p.texto};\n`;
      if (p.textoAtenuado) css += `  --text-muted: ${p.textoAtenuado};\n`;
      if (p.textoNegrita) css += `  --text-bold: ${p.textoNegrita};\n`;
      if (p.textoCursiva) css += `  --text-italic: ${p.textoCursiva};\n`;
      if (p.enlace) css += `  --link-color: ${p.enlace};\n`;
      if (p.enlaceHover) css += `  --link-hover: ${p.enlaceHover};\n`;
      if (p.acento) css += `  --accent-color: ${p.acento};\n`;
      if (p.acentoHover) css += `  --accent-hover: ${p.acentoHover};\n`;
      if (p.acentoTenue) css += `  --accent-subtle: ${p.acentoTenue};\n`;
      if (p.acentoBorde) css += `  --accent-border: ${p.acentoBorde};\n`;
      if (p.colorMatematica) css += `  --color-math: ${p.colorMatematica};\n`;

      // Jerarquía H1 a H6 independiente y completa
      if (p.encabezados) {
        for (let i = 1; i <= 6; i++) {
          const h = p.encabezados[`h${i}`];
          if (!h) continue;
          if (h.color) css += `  --h${i}-color: ${h.color};\n`;
          if (h.tamano) css += `  --h${i}-size: ${h.tamano};\n`;
          if (h.peso) css += `  --h${i}-weight: ${h.peso};\n`;
          if (h.alineacion) css += `  --h${i}-align: ${h.alineacion};\n`;
          if (h.espaciadoSuperior) css += `  --h${i}-margin-top: ${h.espaciadoSuperior};\n`;
          if (h.espaciadoInferior) css += `  --h${i}-margin-bottom: ${h.espaciadoInferior};\n`;
          if (h.interlineado) css += `  --h${i}-line-height: ${h.interlineado};\n`;
          if (h.transformacion) css += `  --h${i}-transform: ${h.transformacion};\n`;
          if (h.bordeInferior) css += `  --h${i}-border-bottom: ${h.bordeInferior};\n`;
        }
      }

      css += `}\n\n`;
    }
  }

  return css;
}