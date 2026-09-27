// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    theme: z.enum(['minimalista', 'academico', 'moderno', 'oscuro', 'informe']).optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    orden: z.number().optional(),
    slides: z.boolean().optional(),
    draft: z.boolean().default(false),
    
    // Metadatos de apuntes
    curso: z.string().optional(),
    ciclo: z.union([z.string(), z.number()]).optional(),
    dificultad: z.string().optional(),
    tiempoLectura: z.string().optional(),
    referencia: z.string().optional(),

    // --- NUEVOS CAMPOS PARA INFORMES ACADÉMICOS Y TÉCNICOS ---
    tipo: z.enum(['apunte', 'informe']).optional(),
    institucion: z.string().optional(),
    facultad: z.string().optional(),
    escuela: z.string().optional(),
    logo: z.string().optional(),
    subtitulo: z.string().optional(),
    codigo: z.string().optional(),
    docente: z.string().optional(),
    ciudad: z.string().optional(),
    anio: z.union([z.string(), z.number()]).optional(),
    integrantes: z.array(
      z.object({
        nombre: z.string(),
        codigo: z.string().optional(),
        rol: z.string().optional()
      })
    ).optional(),
    mostrarIndice: z.boolean().default(true)
  })
});

export const collections = { docs };