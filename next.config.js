const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'andrewkachnic.now',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: 'public/',
});
module.exports = {
  pageExtensions: [ 'jsx', 'js',],  
  devIndicators: {
    autoPrerender: false,
  },
  poweredByHeader: false,
  target: 'serverless'
}