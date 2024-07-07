import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import markdoc from '@astrojs/markdoc';
import remarkCodeTitles from 'remark-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './remark-reading-time.mjs';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import icon from 'astro-icon';
import rehypePrettyCode from 'rehype-pretty-code';
import sectionize from '@hbsnow/rehype-sectionize';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://suevalov.com',
  markdown: {
    syntaxHighlight: false,
    shikiConfig: {
      theme: 'css-variables',
    },
    remarkPlugins: [remarkCodeTitles, remarkReadingTime],
    rehypePlugins: [
      sectionize,
      [
        rehypeExternalLinks,
        {
          rel: ['noreferrer noopener'],
          target: '_blank',
        },
      ],
      [
        /**
         * Enhances code blocks with syntax highlighting, line numbers,
         * titles, and allows highlighting specific lines and words
         */
        rehypePrettyCode,
        {
          theme: 'github-dark',
          transformers: [
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 3_500,
            }),
          ],
        },
      ],
    ],
  },
  integrations: [
    mdx(),
    markdoc(),
    icon(),
    svelte(),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  redirects: {
    '/presentations': '/talks',
    '/resume': '/',
    '/cv': '/',
  },
});
