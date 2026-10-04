// src/plugins/rehype-code-block.mjs
import { visit } from 'unist-util-visit';

function extractAllText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (Array.isArray(node.children)) {
    return node.children.map(extractAllText).join('');
  }
  return '';
}

const MERMAID_KEYWORDS = [
  'graph ', 'graph\n', 'flowchart ', 'flowchart\n',
  'sequencediagram', 'classdiagram', 'statediagram',
  'erdiagram', 'gantt', 'pie', 'gitgraph', 'quadrantchart',
  'mindmap', 'xychart', 'journey', 'timeline'
];

export default function rehypeCodeBlock() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Solo actuar sobre elementos <pre> válidos
      if (node.tagName !== 'pre' || !parent || typeof index !== 'number') return;

      const codeChild = node.children?.find((c) => c.type === 'element' && c.tagName === 'code');

      // 1. Extraer clases y atributos de lenguaje de ambos elementos
      const preProps = node.properties || {};
      const codeProps = codeChild?.properties || {};

      const preClass = (Array.isArray(preProps.className) ? preProps.className.join(' ') : String(preProps.className || '')).toLowerCase();
      const codeClass = (Array.isArray(codeProps.className) ? codeProps.className.join(' ') : String(codeProps.className || '')).toLowerCase();
      const rawLanguage = String(preProps['data-language'] || codeProps['data-language'] || '').toLowerCase();

      // 2. Extraer el texto interior para verificar el contenido
      const textContent = extractAllText(node).trim();
      const lowerContent = textContent.toLowerCase();

      // 3. IDENTIFICACIÓN ESTRICTA DE MERMAID:
      // Si el bloque fue declarado con ```mermaid o contiene sintaxis de diagrama, IGNORAR POR COMPLETO
      const isMermaidLanguage = 
        rawLanguage === 'mermaid' ||
        preClass.includes('language-mermaid') ||
        preClass.includes('mermaid') ||
        codeClass.includes('language-mermaid') ||
        codeClass.includes('mermaid');

      const isMermaidSyntax = 
        lowerContent.startsWith('---') ||
        lowerContent.startsWith('%%') ||
        MERMAID_KEYWORDS.some((kw) => lowerContent.startsWith(kw));

      if (isMermaidLanguage || isMermaidSyntax) {
        // No creamos ningún wrapper ni cabecera; dejamos el nodo intacto
        return;
      }

      // 4. Si es un bloque de código estándar (bash, js, json, python, etc.), detectar el nombre del lenguaje
      let lang = rawLanguage;
      if (!lang) {
        const langMatch = `${preClass}${codeClass}`.match(/(?:language|lang)-([a-z0-9_-]+)/);
        lang = langMatch ? langMatch[1] : '';
      }

      if (!lang || lang === 'plaintext') {
        lang = 'code';
      }

      // 5. Construir la cabecera estilo macOS y envolver el código
      const headerNode = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-header'] },
        children: [
          {
            type: 'element',
            tagName: 'div',
            properties: { className: ['code-dots'] },
            children: [
              { type: 'element', tagName: 'span', properties: { className: ['code-dot', 'red'] }, children: [] },
              { type: 'element', tagName: 'span', properties: { className: ['code-dot', 'yellow'] }, children: [] },
              { type: 'element', tagName: 'span', properties: { className: ['code-dot', 'green'] }, children: [] }
            ]
          },
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['code-lang-tag'] },
            children: [{ type: 'text', value: String(lang).toUpperCase() }]
          },
          {
            type: 'element',
            tagName: 'button',
            properties: {
              className: ['copy-code-btn'],
              type: 'button',
              'data-copy-button': 'true'
            },
            children: [{ type: 'text', value: 'Copiar' }]
          }
        ]
      };

      const wrapperNode = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-wrapper'] },
        children: [headerNode, node]
      };

      parent.children[index] = wrapperNode;
    });
  };
}