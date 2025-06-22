/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nvmpratyush.vercel.app",
  generateRobotsTxt: true, // <-- auto‑generate robots.txt
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
};
