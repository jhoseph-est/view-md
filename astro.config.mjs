// astro.config.mjs
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';
import remarkObsidianCallout from 'remark-obsidian-callout';
import remarkWikiLink from 'remark-wiki-link';

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
      theme: 'material-theme-palenight',
      wrap: true,
    },
    remarkPlugins: [
      remarkMath,
      remarkObsidianCallout,
      [
        remarkWikiLink,
        {
          pathFormat: 'absolute',
          hrefTemplate: (permalink) => `/docs/${permalink}`,
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          strict: false,
        },
      ],
    ],
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      remarkPlugins: [
        remarkMath,
        remarkObsidianCallout,
        [
          remarkWikiLink,
          {
            pathFormat: 'absolute',
            hrefTemplate: (permalink) => `/docs/${permalink}`,
          },
        ],
      ],
      rehypePlugins: [
        [
          rehypeKatex,
          {
            strict: false,
          },
        ],
      ],
    }),
  ],
});