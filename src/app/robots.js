export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cdn-cgi/",
    },
    sitemap: `https://drsalehalkhalaf.com/sitemap.xml`,
  };
}
