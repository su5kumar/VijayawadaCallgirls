module.exports = {
  siteUrl: 'https://www.vijayawadacallgirls.online',
  generateRobotsTxt: false, // We manage robots.txt manually
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/test', '/studio/**', '/not-found'],
  autoLastmod: true,
  transform: async (config, path) => {
    const highPriority = ['/', '/vijayawada-escorts', '/vijayawada-call-girls', '/vip-escorts-vijayawada', '/independent-escorts-vijayawada', '/hotel-escort-service-vijayawada', '/24-7-escorts-vijayawada', '/about'];
    const mediumPriority = ['/luxury-companionship', '/premium-models', '/whatsapp-booking', '/benz-circle-escorts', '/mg-road-vijayawada', '/governorpet-escorts', '/railway-station-escorts-vijayawada', '/gannavaram-escorts', '/patamata-companionship', '/faq', '/contact'];

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
