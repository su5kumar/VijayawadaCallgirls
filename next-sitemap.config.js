module.exports = {
  siteUrl: 'https://www.vijayawadacallgirls.online',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    additionalSitemaps: [
      'https://www.vijayawadacallgirls.online/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    const highPriority = ['/', '/vijayawada-escorts', '/vijayawada-call-girls', '/vip-escorts-vijayawada'];
    const mediumPriority = ['/luxury-companionship', '/premium-models', '/independent-escorts-vijayawada', '/whatsapp-booking'];

    let priority = 0.6;
    let changefreq = 'weekly';

    if (highPriority.includes(path)) {
      priority = 1.0;
      changefreq = 'daily';
    } else if (mediumPriority.includes(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
