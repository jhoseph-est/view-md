---
title: "Pruebas de Video y Contenido Multimedia"
date: 2026-09-26
author: "Admin"
tags: ["video", "multimedia", "tutorial", "slides"]
slides: true
orden: 4
---

# Video en Documentos y Diapositivas
### Integración Nativa Responsiva

Presiona la **Flecha Derecha** o la **Barra Espaciadora** para ver los ejemplos de video.

---

## 1. Video Estándar con Controles Nativos

Puedes insertar videos en formato `.mp4` o `.webm` alojados en tu carpeta `public/` (por ejemplo `public/videos/clip.mp4`) o mediante URLs remotas:

<video controls src="/videos/demo.mp4">
  Tu navegador no soporta la reproducción de video HTML5.
</video>

* **En Lectura:** Se centra automáticamente respetando el ancho del artículo[cite: 10, 11].
* **En Slides:** Mantiene un límite de altura (`52vh`) para no tapar los títulos ni salirse de la pantalla.

--

## 2. Video con Tamaño Específico y Poster (Miniatura)

Si deseas fijar un ancho menor o mostrar una imagen de portada antes de reproducir, utiliza los atributos estándar `width` y `poster`:

<video 
  controls 
  width="520" 
  poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  src="/videos/demo.mp4">
</video>

<p style="text-align: center; font-size: 0.85em; opacity: 0.7;">Video con miniatura personalizada antes de iniciar.</p>

--

## 3. Video en Bucle Silenciado (Demostración de Interfaz)

Ideal para tutoriales o demostraciones cortas sin sonido usando `autoplay`, `loop` y `muted`:

<video 
  autoplay 
  loop 
  muted 
  playsinline 
  width="480"
  src="/videos/demo.mp4">
</video>

---

## Resumen de Uso

1. **Ubicación de tus archivos locales:**
   * Coloca tus videos en `public/videos/demo.mp4`.
   * Enlázalos con `src="/videos/demo.mp4"`.
2. **Comportamiento cromático:**
   * La barra de progreso y el resplandor se sincronizan automáticamente si cambias el tema (Moderno, Académico o Minimalista) o el modo de luz[cite: 15, 18].