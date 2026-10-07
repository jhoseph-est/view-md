// src/plugins/remark-callouts.mjs
import { visit } from 'unist-util-visit';

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      // 1. Verificar si el primer nodo hijo es un párrafo
      const firstChild = node.children?.[0];
      if (!firstChild || firstChild.type !== 'paragraph') return;

      // 2. Verificar si el párrafo arranca con texto
      const firstTextNode = firstChild.children?.[0];
      if (!firstTextNode || firstTextNode.type !== 'text') return;

      // 3. Detectar la sintaxis [!tipo] opcionalmente seguida de título
      const match = firstTextNode.value.match(/^\[!([a-zA-Z0-9_-]+)\][+-]?\s*(.*)$/m);
      if (!match) return;

      const [, rawType, customTitle] = match;
      const type = rawType.toLowerCase();
      const titleText = customTitle.trim() || type.toUpperCase();

      // 4. Limpiar únicamente la cabecera [!tipo] del primer nodo de texto
      //    (Esto preserva intactos los nodos posteriores: inlineMath, strong, etc.)
      const textAfterDirective = firstTextNode.value.replace(/^\[!([a-zA-Z0-9_-]+)\][+-]?\s*.*(\n|$)/, '');
      if (textAfterDirective.length > 0) {
        firstTextNode.value = textAfterDirective;
      } else {
        // Si no quedó texto restante en ese nodo, retirarlo del párrafo
        firstChild.children.shift();
      }

      // Si el párrafo inicial quedó sin hijos, retirarlo por completo
      if (firstChild.children.length === 0) {
        node.children.shift();
      }

      // 5. Configurar los atributos HTML del blockquote contenedor
      node.data = node.data || {};
      node.data.hName = 'blockquote';
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        class: `callout callout-${type}`,
        'data-callout': type,
      };

      // 6. Construir la cabecera gráfica con su clase para callouts.css
      const headerNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { class: 'callout-title' },
        },
        children: [
          {
            type: 'text',
            data: {
              hName: 'span',
              hProperties: { class: 'callout-title-text' },
            },
            value: titleText,
          },
        ],
      };

      // 7. Envolver el contenido restante en su contenedor callout-content
      const contentWrapper = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { class: 'callout-content' },
        },
        children: [...node.children],
      };

      // Reemplazar los hijos directos por la cabecera y el cuerpo
      node.children = [headerNode, contentWrapper];
    });
  };
}