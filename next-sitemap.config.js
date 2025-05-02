/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://nvmpratyush.vercel.app',
    generateRobotsTxt: true,          // <-- auto‑generate robots.txt
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }
      ],
      additionalSitemaps: [
        'https://nvmpratyush.vercel.app/sitemap.xml'
      ],
    },
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
  }
  