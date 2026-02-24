export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cdn-cgi/",
    },
    sitemap: `https://www.drsalehalkhalaf.com/sitemap.xml`,
  };
}
