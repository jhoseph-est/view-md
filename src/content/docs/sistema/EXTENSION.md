---
title: "Guía de Extensión del Taller de Diseño"
---
# Manual de Extensión: Sistema de Diseño e Inspector Reactivo

Esta guía describe el ciclo de vida completo para incorporar nuevos parámetros visuales independientes (colores, fuentes, alineaciones, diagramas Mermaid) y el flujo de aplicación de temas bajo la arquitectura desacoplada del proyecto.

---

## 1. El Ciclo de Vida de un Parámetro Editable

Añadir un nuevo control editable al sistema requiere conectar cinco capas en un circuito cerrado:

```text
[1. variables.css]          ---> Declara el token CSS en :root
        │
[2. CSS Componente]         ---> Aplica la variable al elemento (markdown.css, etc.)
        │
[3. EditorDiseno.astro]     ---> Maqueta el control visual en el cajón inspector
        │
[4. editor-diseno.ts]       ---> Escucha eventos y muta variables en el DOM
        │
[5. Exportador JSON]        ---> Serializa el token para los archivos .json
```

---

## 2. Paso a Paso: Ejemplo Práctico

Tomemos como ejemplo la adición de un nuevo parámetro independiente: **El color de borde del bloque de código fuente** (`--code-custom-border`).

### Paso 1: Declarar el token en `src/styles/variables.css`

Añade la variable con sus valores iniciales en `:root` y en el override de modo oscuro:

```css
/* src/styles/variables.css */
:root {
  /* ...otros tokens... */
  --code-custom-border: #cbd5e1;
}

html[data-modo="oscuro"] {
  /* ...otros tokens... */
  --code-custom-border: #334155;
}
```

### Paso 2: Conectar el token con el elemento en el CSS

Asegúrate de que la regla CSS correspondiente consuma la nueva variable:

```css
/* src/styles/code-blocks.css */
.code-block-wrapper {
  border: 1px solid var(--code-custom-border) !important;
}
```

### Paso 3: Agregar el control en la vista (`src/components/EditorDiseno.astro`)

En la plantilla HTML del componente Astro, inserta la etiqueta del control en la pestaña correspondiente (ej. Pestaña 1):

```html
<div class="color-item">
  <label for="col-code-border">Borde de Código</label>
  <div class="color-picker-wrap">
    <input type="color" id="col-code-border" value="#cbd5e1" />
    <span class="color-hex" id="hex-code-border">#cbd5e1</span>
  </div>
</div>
```

### Paso 4: Enlazar la reactividad en `src/scripts/core/editor-diseno.ts`

Abre el script modular del editor y registra el evento según la tipología del dato dentro de `setupEditorDrawer()`:

#### Caso A: Si es un Color (Pickers)

Añade la definición al array `colorBindings`:

```typescript
{ id: 'col-code-border', hexId: 'hex-code-border', cssVar: '--code-custom-border' }
```

#### Caso B: Si es una Escala o Slider Numérico

Añade la definición al array `sliderBindings`:

```typescript
{ id: 'size-h3', valId: 'val-h3', cssVar: '--h3-size', unit: 'rem' }
```

#### Caso C: Si es un Selector (Fuentes o Alineaciones)

Escribe el listener reactivo directo:

```typescript
const selectFont = document.getElementById('mi-select-id') as HTMLSelectElement | null;
if (selectFont) {
  selectFont.onchange = () => {
    root.style.setProperty('--mi-token-css', selectFont.value);
  };
}
```

#### Caso D: Si es un Diagrama Mermaid

Utiliza el helper `bindMermaidInput` o despacha el evento global para forzar el re-renderizado vectorial del SVG:

```typescript
bindMermaidInput('col-mm-flow-bg', ['--mm-flow-bg']);
// O manualmente:
const colFlow = document.getElementById('col-flow') as HTMLInputElement | null;
if (colFlow) {
  colFlow.oninput = () => {
    root.style.setProperty('--mm-flow-bg', colFlow.value);
    window.dispatchEvent(new Event('theme-changed'));
  };
}
```

### Paso 5: Incluir el parámetro en la función de exportación (`editor-diseno.ts`)

Dentro del listener del botón `btnExpEstilo.onclick`, agrega la propiedad al JSON para que no se pierda al copiar:

```typescript
// Dentro del objeto jsonEstilo:
bloquesCodigo: {
  borde: (document.getElementById('col-code-border') as HTMLInputElement)?.value || "#cbd5e1"
}
```

---

## 3. Catálogo de Tipologías de Controles

Usa estas plantillas HTML estándar dentro de `EditorDiseno.astro` para mantener consistencia:

### 1. Control de Color Hexadecimal

```html
<div class="color-item">
  <label for="id-input">Nombre del Token</label>
  <div class="color-picker-wrap">
    <input type="color" id="id-input" value="#8b5cf6" />
    <span class="color-hex" id="hex-label">#8b5cf6</span>
  </div>
</div>
```

### 2. Control Deslizante (Slider de rango)

```html
<div class="control-row-col">
  <div class="label-with-val">
    <label for="id-slider">Propiedad Numérica</label>
    <span id="val-display">1.5 rem</span>
  </div>
  <input type="range" id="id-slider" min="1.0" max="3.0" step="0.1" value="1.5" />
</div>
```

### 3. Selector de Tipografía / Alineación

```html
<div class="control-row">
  <label for="id-select">Alineación / Familia</label>
  <select id="id-select" class="ed-select">
    <option value="left">Izquierda</option>
    <option value="center">Centro</option>
    <option value="right">Derecha</option>
  </select>
</div>
```

### 4. Conmutador Booleano (Checkbox)

```html
<label class="switch-field">
  <input type="checkbox" id="id-check" checked />
  <span>Activar / Desactivar propiedad</span>
</label>
```

---

## 4. Cómo Implementar un Nuevo Diseño en la Plataforma

Una vez calibrados los colores, tipografías y márgenes con el Inspector de Diseño (`Alt + E`), el flujo para activarlo en todo el proyecto es el siguiente:

### Método 1: Guardar como Tema Permanente en el Proyecto

1. En el Inspector (`Alt + E`), calibra tus parámetros.
2. Haz clic en **📋 Copiar JSON para estilos-base.json**.
3. Abre el archivo `src/config/estilos-base.json` en tu editor de código.
4. Pega el nuevo bloque JSON junto a los temas existentes (`moderno`, `academico`, etc.).
5. El nuevo tema aparecerá automáticamente disponible en los selectores de la barra lateral (`LeftSidebar.astro`) y en el modal de impresión (`ModalImpresion.astro`).

### Método 2: Forzar un Tema Específico a un Apunte Individual

Si deseas que una página específica siempre use ese estilo sin importar la selección global del usuario, define su ID en el frontmatter del archivo `.md` o `.mdx`:

```yaml
---
title: "Título de la Monografía"
theme: "nombre-de-tu-tema-nuevo"
plantilla: "informe-uni"
caratula: "uni-oficial"
---
```