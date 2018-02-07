const repoUrl = 'https://github.com/mbasso/asm-dom';

const siteConfig = {
  title: 'asm-dom',
  tagline: 'A minimal WebAssembly virtual DOM to build C++ SPA',
  url: 'https://mbasso.github.io',
  baseUrl: '/asm-dom/',
  organizationName: 'mbasso',
  projectName: 'asm-dom',
  headerLinks: [
    { doc: 'motivation', label: 'Docs' },
    { doc: 'init', label: 'API' },
    { href: repoUrl, label: 'GitHub' },
  ],
  users: [],
  colors: {
    primaryColor: '#607D8B',
    secondaryColor: '#78909C',
  },
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Matteo Basso',
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl,
};

module.exports = siteConfig;
