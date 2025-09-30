/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tribegroup.in",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/*"] },
    ],
  },
};
