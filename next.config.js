const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'andrewkachnic.now',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: 'public/',
});
