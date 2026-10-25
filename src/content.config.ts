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
    
    // --- Control de Temas y Diapositivas ---
    theme: z.string().optional(),       // ID del tema web
    slides: z.boolean().default(false), // Habilitar vista Reveal.js

    // --- Metadatos de Estudio / Apuntes ---
    curso: z.string().optional(),
    ciclo: z.union([z.string(), z.number()]).optional(),
    dificultad: z.string().optional(),
    tiempoLectura: z.string().optional(),
    referencia: z.string().optional(),

    // --- Switches de Interfaz Básicos ---
    mostrarIndice: z.boolean().default(true),
    mostrarNav: z.boolean().default(true)
  }).passthrough()
});

export const collections = { docs };