---
title: "Guía de Extensión del Taller de Diseño"
---
# Manual de Extensión: Sistema de Diseño e Inspector Reactivo

Esta guía describe el ciclo de vida completo para incorporar nuevos parámetros visuales independientes (colores, fuentes, alineaciones, diagramas Mermaid y carátulas) y el flujo de aplicación de temas en la plataforma.

---

## 1. El Ciclo de Vida de un Parámetro Editable

Añadir un nuevo control editable al sistema requiere conectar cinco capas en un circuito cerrado:

```text
[1. variables.css]          ---> Declara el token CSS en :root
        │
[2. CSS Componente]         ---> Aplica la variable al elemento (markdown.css, etc.)
        │
[3. TabEstilosWeb.astro]    ---> Maqueta el control dentro del acordeón correspondiente
        │
[4. src/scripts/editor/]    ---> Escucha el evento en su módulo TS y muta el DOM
        │
[5. Exportador JSON]        ---> Serializa el token para estilos-base.json o caratulas.json
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

### Paso 3: Agregar el control en la vista (`src/components/editor/TabEstilosWeb.astro`)

Dentro del acordeón correspondiente (ej. "3. Bloques de Código Fuente"), inserta el control:

```html
<div class="color-item">
  <label for="col-code-border">Borde de Código</label>
  <div class="color-picker-wrap">
    <input type="color" id="col-code-border" value="#cbd5e1" />
    <span class="color-hex" id="hex-code-border">#cbd5e1</span>
  </div>
</div>
```

### Paso 4: Enlazar la reactividad en el módulo TS correspondiente

Dependiendo de la naturaleza del parámetro, conéctalo en el archivo adecuado dentro de `src/scripts/editor/`:

#### Caso A: Parámetros de Markdown, Tablas, Código o Prosa (`src/scripts/editor/editor-markdown.ts`)

Usa el helper `bindColor` dentro de `initMarkdownControls()`:

```typescript
bindColor('col-code-border', 'hex-code-border', '--code-custom-border');
```

Si es un slider numérico de escala:

```typescript
const sizeInput = document.getElementById('size-nuevo') as HTMLInputElement | null;
const valSize = document.getElementById('val-nuevo');
if (sizeInput && valSize) {
  sizeInput.oninput = () => {
    valSize.textContent = `${sizeInput.value}rem`;
    root.style.setProperty('--nuevo-size', `${sizeInput.value}rem`);
  };
}
```

Si es un selector tipográfico o de alineación:

```typescript
const fontSelect = document.getElementById('font-nuevo') as HTMLSelectElement | null;
if (fontSelect) {
  fontSelect.onchange = () => root.style.setProperty('--font-nuevo', fontSelect.value);
}
```

#### Caso B: Diagramas Mermaid (`src/scripts/editor/editor-mermaid.ts`)

Usa el helper `bindMermaid` dentro de `initMermaidControls()` para mutar variables y refrescar el render vectorial de los SVG:

```typescript
bindMermaid('col-mm-nuevo', ['--mm-nuevo-token']);
```

#### Caso C: Carátula y Posicionamiento (`src/scripts/editor/editor-caratula.ts`)

Añade el ID del nuevo control al array de listeners para disparar `updateCoverLivePreview()` automáticamente al cambiar:

```typescript
const ids = [
  // ...otros IDs existentes...
  'pos-nuevo-elemento'
];
```

### Paso 5: Incluir el parámetro en la función de exportación (`src/scripts/editor/editor-core.ts`)

Dentro del listener del botón `btnExpEstilo.onclick` (o `btnExpCov.onclick` para carátulas), incluye el valor para que persista al copiar el JSON:

```typescript
// Dentro de jsonEstilo en editor-core.ts:
bloquesCodigo: {
  borde: (document.getElementById('col-code-border') as HTMLInputElement)?.value || "#cbd5e1"
}
```

---

## 3. Catálogo de Tipologías de Controles

Plantillas estándar compatibles con el sistema de estilos de `editor-drawer.css`:

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

Una vez calibrados los colores, tipografías y posiciones con el Inspector de Diseño (`Alt + E`), el flujo para activarlo en tu proyecto es el siguiente:

### Método 1: Guardar como Tema Permanente en el Proyecto

1. En el Inspector (`Alt + E`), calibra tus parámetros en la pestaña **Estilos Web & Prosa**.
2. Haz clic en **📋 Copiar JSON para estilos-base.json**.
3. Abre el archivo `src/config/estilos-base.json` en tu editor de código.
4. Pega el nuevo bloque JSON junto a los temas existentes (`moderno`, `academico`, etc.).
5. El tema estará disponible de inmediato en los selectores globales de la barra lateral (`LeftSidebar.astro`) y en el modal de impresión (`ModalImpresion.astro`).

### Método 2: Guardar un Nuevo Modelo de Carátula

1. En la pestaña **Carátula & Cierre**, ajusta la presencia de elementos, tamaños y ubicaciones.
2. Haz clic en **📋 Copiar JSON para caratulas.json**.
3. Abre `src/config/caratulas.json` y pega el nuevo objeto con su identificador único.

### Método 3: Forzar un Tema o Carátula en un Documento Específico

Si deseas que una página específica siempre utilice un diseño determinado de forma inmutable, declara sus identificadores en el frontmatter del archivo `.md` o `.mdx`:

```yaml
---
title: "Título de la Monografía"
theme: "nombre-de-tu-tema-nuevo"
caratula: "modelo-caratula-nuevo"
---
```