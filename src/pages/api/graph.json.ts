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
  const docIds = new Set<string>();

  // 1. Crear nodos
  docs.forEach((doc: CollectionEntry<'docs'>) => {
    const normalizedId = `/docs/${doc.id.replace(/\\/g, '/')}`;
    const parts = doc.id.replace(/\\/g, '/').split('/');
    const group = parts.length > 1 ? parts[0] : 'General';

    docIds.add(normalizedId);
    nodes.push({
      id: normalizedId,
      name: doc.data.title || parts[parts.length - 1],
      group
    });
  });

  // 2. Extraer conexiones internas desde el markdown
  docs.forEach((doc: CollectionEntry<'docs'>) => {
    const sourceId = `/docs/${doc.id.replace(/\\/g, '/')}`;
    const body = doc.body || '';

    // Regex para enlaces estándar [texto](/docs/ruta) y tipo wiki [[ruta]]
    const mdLinkRegex = /\[.*?\]\((\/docs\/[^)#]+)(?:#[^)]+)?\)/g;
    const wikiLinkRegex = /\[\[([a-zA-Z0-9_\-\/]+)(?:\Vert{}.*?)?\]\]/g;

    let match: RegExpExecArray | null;
    while ((match = mdLinkRegex.exec(body)) !== null) {
      const targetUrl = match[1];
      if (docIds.has(targetUrl) && targetUrl !== sourceId) {
        links.push({ source: sourceId, target: targetUrl });
      }
    }

    while ((match = wikiLinkRegex.exec(body)) !== null) {
      const targetUrl = `/docs/${match[1].replace(/\\/g, '/')}`;
      if (docIds.has(targetUrl) && targetUrl !== sourceId) {
        links.push({ source: sourceId, target: targetUrl });
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