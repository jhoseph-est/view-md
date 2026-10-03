// src/plugins/rehype-code-block.mjs
import { visit } from 'unist-util-visit';

export default function rehypeCodeBlock() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || !parent || typeof index !== 'number') return;

      const codeChild = node.children.find((c) => c.type === 'element' && c.tagName === 'code');
      
      const preClasses = Array.isArray(node.properties?.className)
        ? node.properties.className.join(' ')
        : (node.properties?.className || '');
      
      const codeClasses = Array.isArray(codeChild?.properties?.className)
        ? codeChild.properties.className.join(' ')
        : (codeChild?.properties?.className || '');

      const allClasses = `${preClasses} ${codeClasses}`;

      // Ignorar Mermaid
      if (
        allClasses.includes('mermaid') ||
        node.properties?.['data-language'] === 'mermaid'
      ) {
        return;
      }

      // Buscar lenguaje en data-language, clases language-*, lang-* o shiki
      let lang = node.properties?.['data-language'] || codeChild?.properties?.['data-language'];

      if (!lang) {
        const langMatch = allClasses.match(/(?:language|lang)-([a-zA-Z0-9_-]+)/);
        lang = langMatch ? langMatch[1] : '';
      }

      if (!lang || lang === 'plaintext') {
        lang = 'code';
      }

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