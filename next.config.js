const sitemap = require('nextjs-sitemap-generator');
const withCSS = require('@zeit/next-css');
sitemap({
  baseUrl: 'andrewkachnic.now',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: 'public/',
});
module.exports = withCSS({
  pageExtensions: [ 'jsx', 'js', "md",],  
  devIndicators: {
    autoPrerender: false,
  },
  poweredByHeader: false,
  target: 'serverless',
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
})