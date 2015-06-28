var config = {
  production: {
    baseUrl: process.env.BASE_URL || 'http://eddywashere.github.io/docs', // '' for relative links
    site: {
      url: process.env.SITE_URL || 'http://eddywashere.github.io/docs', // full site url
      title: 'Docs Site',
      comments: true,
      disqus: process.env.DISQUS || 'example',
      googleAnalytics: process.env.GOOGLE_ANALYTICS || '123457'
    }
  },
  development: {
    baseUrl: process.env.DEV_BASE_URL || '', // '' for relative links
    site: {
      url: process.env.DEV_SITE_URL || 'http://localhost:8000', // full site url
      title: 'Docs Site',
      comments: true,
      disqus: process.env.DEV_DISQUS || 'staging-example',
      googleAnalytics: process.env.DEV_GOOGLE_ANALYTICS || '123456'
    }
  }
};

module.exports = config;