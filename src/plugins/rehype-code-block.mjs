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

const MERMAID_REGEX = /^(?:---|%%\s*\{|graph\b|flowchart\b|sequencediagram\b|classdiagram\b|statediagram\b|erdiagram\b|gantt\b|pie\b|gitgraph\b|quadrantchart\b|mindmap\b|xychart\b|journey\b|timeline\b|packet-beta\b|architecture-beta\b)/i;

export default function rehypeCodeBlock() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // 1. Solo elementos <pre>
      if (node.tagName !== 'pre' || !parent || typeof index !== 'number') return;

      // 2. Si ya está dentro de un wrapper, omitir
      if (parent.properties?.className && Array.isArray(parent.properties.className)) {
        if (parent.properties.className.includes('code-block-wrapper')) return;
      }

      const codeChild = node.children?.find((c) => c.type === 'element' && c.tagName === 'code');
      const preProps = node.properties || {};
      const codeProps = codeChild?.properties || {};
      const preClass = (Array.isArray(preProps.className) ? preProps.className.join(' ') : String(preProps.className || '')).toLowerCase();
      const codeClass = (Array.isArray(codeProps.className) ? codeProps.className.join(' ') : String(codeProps.className || '')).toLowerCase();

      const rawLanguage = String(
        preProps['data-language'] ||
        codeProps['data-language'] ||
        preProps.dataLanguage ||
        codeProps.dataLanguage ||
        ''
      ).toLowerCase();

      const textContent = extractAllText(node).trim();

      // 3. Comprobación de si es Mermaid
      const isMermaidLanguage =
        rawLanguage === 'mermaid' ||
        preClass.includes('language-mermaid') ||
        preClass.includes('mermaid') ||
        codeClass.includes('language-mermaid') ||
        codeClass.includes('mermaid');
      const isMermaidSyntax = MERMAID_REGEX.test(textContent);

      let lang = rawLanguage;
      if (isMermaidLanguage || isMermaidSyntax) {
        lang = 'mermaid';
        node.properties = node.properties || {};
        node.properties['data-language'] = 'mermaid';
        if (Array.isArray(node.properties.className)) {
          if (!node.properties.className.includes('language-mermaid')) {
            node.properties.className.push('language-mermaid');
          }
        } else {
          node.properties.className = ['language-mermaid'];
        }
      } else {
        if (!lang) {
          const langMatch = `${preClass} ${codeClass}`.match(/(?:language|lang)-([a-z0-9_-]+)/);
          lang = langMatch ? langMatch[1] : '';
        }
        if (!lang || lang === 'plaintext') {
          lang = 'code';
        }
      }

      // 4. Cabecera estilo macOS neutra con botón copiar
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