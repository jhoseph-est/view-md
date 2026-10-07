// astro.config.mjs
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';
import rehypeCodeBlock from './src/plugins/rehype-code-block.mjs';
import remarkCallouts from './src/plugins/remark-callouts.mjs'; // <-- Plugin local

export default defineConfig({
  output: 'static',
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('mermaid')) return 'vendor-mermaid';
              if (id.includes('force-graph') || id.includes('d3-force-3d') || id.includes('d3')) return 'vendor-graph';
              if (id.includes('reveal.js')) return 'vendor-reveal';
              if (id.includes('katex')) return 'vendor-katex';
            }
          },
        },
      },
    },
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'red',
        dark: 'solarized-dark',
      },
      defaultColor: false,
      wrap: true,
    },
    remarkPlugins: [
      remarkMath,       // 1. Procesa primero las ecuaciones a nodos inlineMath
      remarkCallouts,   // 2. Envuelve los callouts sin tocar la matemática
      [
        remarkWikiLink,
        {
          pathFormat: 'absolute',
          hrefTemplate: (permalink) => `/docs/${permalink}`,
        },
      ],
    ],
    rehypePlugins: [
      rehypeCodeBlock,
      [
        rehypeKatex,
        {
          strict: false,
          output: 'html',
        },
      ],
    ],
  },
  integrations: [mdx()],
});