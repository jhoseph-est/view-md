// src/utils/fileTree.ts
import type { CollectionEntry } from 'astro:content';

export type DocEntry = CollectionEntry<'docs'>;

export interface FileProp {
  type: 'file';
  doc: DocEntry;
  prev: DocEntry | null;
  next: DocEntry | null;
}

export interface FolderProp {
  type: 'folder';
  folderName: string;
  folderPath: string;
  directFiles: DocEntry[];
  subfolders: string[];
}

export type DocPathResult = 
  | { params: { id: string }; props: FileProp }
  | { params: { id: string }; props: FolderProp };

/** Limpia prefijos numéricos y guiones para mostrar nombres legibles */
export function formatName(str?: string): string {
  if (!str) return '';
  try {
    str = decodeURIComponent(str);
  } catch (e) {
    // Si falla o ya está decodificado, continúa
  }
  const clean = str
    .replace(/^\d+-/, '')
    .split('--')
    .map((word) => word.replace(/-/g, ' '))
    .join('-');
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

/** 
 * Compara y ordena documentos:
 * 1. Prioriza 'orden' si está definido en el frontmatter.
 * 2. Si no tienen orden (o es igual), ordena alfabéticamente por Título (o id de archivo).
 */
export function sortDocs(a: DocEntry, b: DocEntry): number {
  const hasOrdenA = typeof a.data.orden === 'number';
  const hasOrdenB = typeof b.data.orden === 'number';

  // Si ambos tienen orden definido manualmente, respetamos el número
  if (hasOrdenA && hasOrdenB) {
    if (a.data.orden !== b.data.orden) {
      return (a.data.orden as number) - (b.data.orden as number);
    }
  } else if (hasOrdenA) {
    return -1; // 'a' tiene orden explícito, va primero
  } else if (hasOrdenB) {
    return 1;  // 'b' tiene orden explícito, va primero
  }

  // Si ninguno tiene orden, ordenamos alfabéticamente por Título (o nombre de archivo)
  const titleA = (a.data.title || a.id.split('/').pop() || '').trim();
  const titleB = (b.data.title || b.id.split('/').pop() || '').trim();

  return titleA.localeCompare(titleB, 'es', { numeric: true, sensitivity: 'base' });
}

/** Genera los paths estáticos para Astro agrupando documentos y carpetas */
export function generateDocPaths(allDocs: DocEntry[]): DocPathResult[] {
  const paths: DocPathResult[] = [];
  const folders = new Set<string>();

  // 1. Filtrar borradores y normalizar IDs
  const publishedDocs = allDocs
    .filter((doc) => doc.data.draft !== true)
    .map((doc) => ({
      ...doc,
      normalizedId: doc.id.replace(/\\/g, '/')
    }));

  // 2. Agrupar documentos por carpeta
  const docsByFolder = new Map<string, typeof publishedDocs>();
  publishedDocs.forEach((doc) => {
    const partes = doc.normalizedId.split('/');
    const carpeta = partes.length > 1 ? partes.slice(0, -1).join('/') : '';
    let accumulatedPath = '';
    for (let i = 0; i < partes.length - 1; i++) {
      accumulatedPath = accumulatedPath ? `${accumulatedPath}/${partes[i]}` : partes[i];
      folders.add(accumulatedPath);
    }
    if (!docsByFolder.has(carpeta)) {
      docsByFolder.set(carpeta, []);
    }
    docsByFolder.get(carpeta)!.push(doc);
  });

  // 3. Ordenar cada carpeta usando el criterio unificado
  docsByFolder.forEach((docsList) => {
    docsList.sort(sortDocs);
  });

  // 4. Generar props para archivos individuales con anterior/siguiente calculado
  publishedDocs.forEach((doc) => {
    const partes = doc.normalizedId.split('/');
    const carpeta = partes.length > 1 ? partes.slice(0, -1).join('/') : '';
    const docsEnCarpeta = docsByFolder.get(carpeta) || [];
    const index = docsEnCarpeta.findIndex((d) => d.id === doc.id);
    const prev = index > 0 ? docsEnCarpeta[index - 1] : null;
    const next = index < docsEnCarpeta.length - 1 ? docsEnCarpeta[index + 1] : null;
    paths.push({
      params: { id: doc.normalizedId },
      props: { type: 'file', doc, prev, next }
    });
  });

  // 5. Generar paths para las vistas de carpetas (ordenadas también)
  folders.forEach((folder) => {
    const folderDepth = folder.split('/').length;
    const directFiles = publishedDocs
      .filter((d) => d.normalizedId.startsWith(folder + '/') && d.normalizedId.split('/').length === folderDepth + 1)
      .sort(sortDocs);

    const subfolders = Array.from(folders)
      .filter((f) => f.startsWith(folder + '/') && f.split('/').length === folderDepth + 1)
      .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));

    paths.push({
      params: { id: folder },
      props: {
        type: 'folder',
        folderName: folder.split('/').pop() || '',
        folderPath: folder,
        directFiles,
        subfolders
      }
    });
  });

  // 6. Vista del Directorio Principal (/docs/explorar)
  const rootFiles = publishedDocs.filter((d) => !d.normalizedId.includes('/')).sort(sortDocs);
  const rootFolders = Array.from(folders)
    .filter((f) => !f.includes('/'))
    .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));

  paths.push({
    params: { id: 'explorar' },
    props: {
      type: 'folder',
      folderName: 'Directorio Principal',
      folderPath: 'explorar',
      directFiles: rootFiles,
      subfolders: rootFolders
    }
  });

  return paths;
}