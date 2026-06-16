import tailwind from '@astrojs/tailwind';

export default {
  site: 'https://voorbeeld.nl',
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: 'shiki',
  },
};
