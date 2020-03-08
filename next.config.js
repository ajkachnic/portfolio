module.exports = {
  webpack: function(config) {
    config.externals = config.externals || {}
    config.externals['styletron-server'] = 'styletron-server'
    return config
  },
}
const sitemap = require('nextjs-sitemap-generator');  
sitemap({  
  baseUrl: 'andrewkachnic.now',  
  pagesDirectory: __dirname + "/pages",  
  targetDirectory : 'static/'  
});