---
title: "Guía Multimedia y Animaciones SVG"
date: 2026-09-26
author: "Admin"
tags: ["multimedia", "imagenes", "svg", "tutorial"]
theme: "moderno"
slides: true
orden: 3
---

# Multimedia en tus Apuntes
### Imágenes y Gráficos Vectoriales Animados

Presiona la **Flecha Derecha** o la **Barra Espaciadora** para explorar los ejemplos.

---

## 1. Imágenes Básicas en Markdown

Puedes enlazar imágenes externas o locales guardadas en tu carpeta `public/`:

* **Sintaxis Markdown estándar:**
  `![Texto alternativo](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80)`

![Chip y Tecnología](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80)

--

![](/assets/apuntes/imagen.png)

## 2. Imágenes con Tamaño y Centrado Personalizado

Si quieres controlar el ancho o alto exacto de una imagen para que no desborde en el Slide, usa la etiqueta HTML `<img>`:

<div style="text-align: center; margin: 1.5rem auto;">
  <img 
    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" 
    alt="Hardware retro" 
    style="max-width: 500px; max-height: 45vh; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 8px 24px rgba(0,0,0,0.5);"
  />
  <p style="font-size: 0.8em; opacity: 0.6; margin-top: 6px;">Pie de foto: Dispositivo de control</p>
</div>

---

## 3. SVG Animado Inline: Pulsación / Radar

Al ser vectorial, el SVG se adapta perfectamente sin perder nitidez y no pesa nada.


<div style="display: flex; justify-content: center; align-items: center; margin: 2rem auto;">
  <svg width="220" height="220" viewBox="0 0 200 200">
    <defs>
      <style>
        .radar-center { fill: #8b5cf6; }
        .radar-wave-1 {
          fill: none;
          stroke: #8b5cf6;
          stroke-width: 3;
          opacity: 0.8;
          animation: pulso 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
          transform-origin: center;
        }
        .radar-wave-2 {
          fill: none;
          stroke: #38bdf8;
          stroke-width: 2;
          opacity: 0.8;
          animation: pulso 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
          animation-delay: 0.6s;
          transform-origin: center;
        }
        @keyframes pulso {
          0% { r: 15px; opacity: 1; }
          100% { r: 85px; opacity: 0; }
        }
      </style>
    </defs>
    <!-- Ondas expansivas -->
    <circle class="radar-wave-1" cx="100" cy="100" r="15" />
    <circle class="radar-wave-2" cx="100" cy="100" r="15" />
    <!-- Núcleo central -->
    <circle class="radar-center" cx="100" cy="100" r="15" />
  </svg>
</div>

<p style="text-align: center; font-size: 0.85em; opacity: 0.7;">Onda de radar con keyframes CSS embebidos.</p>

---

## 4. SVG Animado: Rotación y Circuito (Engranaje)

Este ejemplo rota constantemente en su propio eje:

<div style="display: flex; justify-content: center; align-items: center; margin: 2rem auto;">
  <svg width="180" height="180" viewBox="0 0 100 100">
    <defs>
      <style>
        .spin-gear {
          animation: rotar 6s linear infinite;
          transform-origin: 50px 50px;
        }
        @keyframes rotar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      </style>
    </defs>
    <g class="spin-gear" stroke="#8b5cf6" stroke-width="4" fill="none">
      <circle cx="50" cy="50" r="30" stroke-dasharray="10 5" />
      <circle cx="50" cy="50" r="15" fill="#18181b" stroke="#38bdf8" stroke-width="3" />
      <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" stroke-linecap="round" />
      <path d="M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 29 L78 22" stroke-linecap="round" />
    </g>
  </svg>
</div>

<p style="text-align: center; font-size: 0.85em; opacity: 0.7;">Ideal para ilustrar procesos en ejecución o hardware.</p>

---

## 5. Resumen de Recomendaciones

1. **Para imágenes de tus apuntes locales:**
   * Guarda los archivos en: `public/assets/apuntes/imagen.png`.
   * Enlázalas simplemente con: `/assets/apuntes/imagen.png`.
2. **Para diagramas y animaciones vectoriales:**
   * Los bloques SVG pueden pegarse directamente en el cuerpo del documento.
   * La etiqueta `<style>` interna en el SVG aísla las animaciones `@keyframes` sin interferir con el CSS global del sitio.


### Ejemplo de Imagen con tamaño directo
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" width="350" style="display: block; margin: 1rem auto; border-radius: 8px;" alt="Chip" />

### Ejemplo de Reproductor de Audio
<audio controls src="https://www.w3schools.com/html/horse.mp3" style="width: 90%; max-width: 420px; display: block; margin: 1rem auto;">
</audio>


