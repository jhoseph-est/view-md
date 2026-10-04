// src/plugins/rehype-code-block.mjs
import { visit } from 'unist-util-visit';

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

      // Extraer el lenguaje exacto declarado en el Markdown
      const classLangMatch = `${preClass}${codeClass}`.match(/(?:language|lang)-([a-z0-9_-]+)/);
      const rawLanguage = String(
        preProps['data-language'] ||
        codeProps['data-language'] ||
        preProps.dataLanguage ||
        codeProps.dataLanguage ||
        (classLangMatch ? classLangMatch[1] : '')
      ).toLowerCase();

      // Es Mermaid ÚNICAMENTE si se declaró explícitamente como mermaid
      const isMermaid = rawLanguage === 'mermaid' || preClass.includes('mermaid') || codeClass.includes('mermaid');

      let lang = isMermaid ? 'mermaid' : (rawLanguage || 'code');
      if (lang === 'plaintext') lang = 'code';

      if (isMermaid) {
        node.properties = node.properties || {};
        node.properties['data-language'] = 'mermaid';
        if (Array.isArray(node.properties.className)) {
          if (!node.properties.className.includes('language-mermaid')) {
            node.properties.className.push('language-mermaid');
          }
        } else {
          node.properties.className = ['language-mermaid'];
        }
      }

      // 3. Cabecera estilo macOS con botón copiar y etiqueta de lenguaje real
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