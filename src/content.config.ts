// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    // --- Metadatos Principales ---
    title: z.string(),
    subtitulo: z.string().optional(),
    icon: z.string().optional(),
    orden: z.number().optional(),
    draft: z.boolean().default(false),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.union([z.coerce.date(), z.string()]).optional(),
    updated: z.union([z.coerce.date(), z.string()]).optional(),

    // --- Control de Temas y Plantillas (Conectados a los JSON) ---
    theme: z.string().optional(),       // ID del tema web (estilos-base.json)
    plantilla: z.string().optional(),   // ID de la plantilla de impresión (plantillas-impresion.json)
    caratula: z.string().optional(),    // ID del modelo de carátula (caratulas.json)
    slides: z.boolean().default(false), // Habilitar vista Reveal.js

    // --- Datos Académicos / Técnicos para Carátulas e Informes ---
    institucion: z.string().optional(),
    facultad: z.string().optional(),
    escuela: z.string().optional(),
    docente: z.string().optional(),
    ciudad: z.string().optional(),
    anio: z.union([z.string(), z.number()]).optional(),
    logo: z.string().optional(),
    codigo: z.string().optional(),

    // --- Equipo / Integrantes ---
    integrantes: z.array(
      z.object({
        nombre: z.string(),
        codigo: z.string().optional(),
        rol: z.string().optional()
      })
    ).optional(),

    // --- Metadatos de Estudio / Apuntes ---
    curso: z.string().optional(),
    ciclo: z.union([z.string(), z.number()]).optional(),
    dificultad: z.string().optional(),
    tiempoLectura: z.string().optional(),
    referencia: z.string().optional(),

    // --- Switches de Interfaz ---
    // 'target' define si se muestra la tarjeta técnica en la web (DocReportHeader)
    target: z.boolean().optional(),
    // Fallback retrocompatible por si algún apunte viejo aún usa mostrarCabecera
    mostrarCabecera: z.boolean().optional(),
    mostrarIndice: z.boolean().default(true),
    mostrarNav: z.boolean().default(true)
  }).passthrough() // Permite campos extras libres en el frontmatter sin romper el build
});

export const collections = { docs };