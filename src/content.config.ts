// En src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    theme: z.string().optional(), // Ahora acepta cualquier ID de tema de tus JSONs
    plantilla: z.string().optional(), // ID de plantilla de impresión (ej: informe-uni, paper-ieee)
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    orden: z.number().optional(),
    slides: z.boolean().optional(),
    draft: z.boolean().default(false),

    // Metadatos de lectura / apuntes
    curso: z.string().optional(),
    ciclo: z.union([z.string(), z.number()]).optional(),
    dificultad: z.string().optional(),
    tiempoLectura: z.string().optional(),
    referencia: z.string().optional(),

    // Campos académicos / técnicos
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

    // Switches de interfaz
    mostrarCabecera: z.boolean().optional(), // Switch para activar la tarjeta superior
    mostrarIndice: z.boolean().default(true),
    mostrarNav: z.boolean().default(true) // Switch para ocultar doc-nav si lo deseas en web
  }).passthrough() // .passthrough() permite que agregues cualquier propiedad extra en el YAML sin error
});

export const collections = { docs };