// src/pages/api/graph.json.ts
import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async () => {
  const allDocs = await getCollection('docs');
  const docs = allDocs.filter((d: CollectionEntry<'docs'>) => d.data.draft !== true);

  interface Node {
    id: string;
    name: string;
    group: string;
  }

  interface Link {
    source: string;
    target: string;
  }

  const nodes: Node[] = [];
  const links: Link[] = [];
  const docPathMap = new Map<string, string>();

  // 1. Crear nodos y mapa de rutas canónicas
  docs.forEach((doc: CollectionEntry<'docs'>) => {
    const cleanId = doc.id.replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
    const canonicalPath = `/docs/${cleanId}`;
    const parts = cleanId.split('/');
    const group = parts.length > 1 ? parts[0] : 'General';

    docPathMap.set(canonicalPath.toLowerCase(), canonicalPath);
    docPathMap.set(cleanId.toLowerCase(), canonicalPath);
    if (doc.data.title) {
      docPathMap.set(doc.data.title.toLowerCase(), canonicalPath);
    }

    nodes.push({
      id: canonicalPath,
      name: doc.data.title || parts[parts.length - 1],
      group
    });
  });

  // Regex para limpiar código y fórmulas antes de buscar enlaces
  const codeBlockRegex = /```[\s\S]*?```/g;
  const inlineCodeRegex = /`[^`]*?`/g;
  const mathBlockRegex = /\$\$[\s\S]*?\$\$/g;
  const inlineMathRegex = /\$[^$]*?\$/g;

  const mdLinkRegex = /\[(?:[^\]]+)\]\(([^)#\s]+)(?:#[^)]*)?\)/g;
  const wikiLinkRegex = /\[\[([a-zA-Z0-9_\-\/]+)(?:\Vert{}.*?)?\]\]/g;

  // 2. Extraer conexiones internas válidas
  docs.forEach((doc: CollectionEntry<'docs'>) => {
    const cleanSourceId = doc.id.replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
    const sourceId = `/docs/${cleanSourceId}`;
    let rawBody = doc.body || '';

    // Limpieza de código y matemáticas
    const cleanBody = rawBody
      .replace(codeBlockRegex, '')
      .replace(inlineCodeRegex, '')
      .replace(mathBlockRegex, '')
      .replace(inlineMathRegex, '');

    const addedTargets = new Set<string>();

    let match: RegExpExecArray | null;

    // Enlaces Markdown [texto](/docs/ruta)
    while ((match = mdLinkRegex.exec(cleanBody)) !== null) {
      let raw = match[1].trim().toLowerCase();
      raw = raw.startsWith('/docs/') ? raw : `/docs/${raw}`;
      raw = raw.replace(/\/$/, '');

      const targetPath = docPathMap.get(raw);
      if (targetPath && targetPath !== sourceId && !addedTargets.has(targetPath)) {
        links.push({ source: sourceId, target: targetPath });
        addedTargets.add(targetPath);
      }
    }

    // WikiLinks [[ruta]] o [[Título]]
    while ((match = wikiLinkRegex.exec(cleanBody)) !== null) {
      const slug = match[1].trim().toLowerCase().replace(/^\/docs\//, '').replace(/\/$/, '');
      const targetPath = docPathMap.get(slug) || docPathMap.get(`/docs/${slug}`);
      if (targetPath && targetPath !== sourceId && !addedTargets.has(targetPath)) {
        links.push({ source: sourceId, target: targetPath });
        addedTargets.add(targetPath);
      }
    }
  });

  return new Response(JSON.stringify({ nodes, links }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};