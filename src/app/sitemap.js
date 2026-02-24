export default async function sitemap() {
  const BASE_URL = "https://www.drsalehalkhalaf.com";
  const locales = ["ar", "en"];
  const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  // Paths from your reference
  const staticPaths = [
    "",
    "/about",
    "/operations",
    "/blogs",
    "/media",
    "/gallery",
    "/patient-journey",
    "/faqs",
    "/contact",
  ];

  const routes = [];

  // 1. Generate Static Routes for each locale
  for (const locale of locales) {
    for (const path of staticPaths) {
      routes.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "monthly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }
  }

  // 2. Generate Dynamic Routes (Blogs & Operations)
  if (API_BASE_URL) {
    try {
      // Fetch Blogs
      const blogsRes = await fetch(`${API_BASE_URL}/blogs_landing`, {
        cache: "no-store",
      });
      if (blogsRes.ok) {
        const blogs = await blogsRes.json();
        for (const locale of locales) {
          for (const blog of blogs) {
            if (blog.is_published !== false) {
              routes.push({
                url: `${BASE_URL}/${locale}/blogs/${blog.slug}`,
                lastModified: new Date(
                  blog.updated_at || new Date(),
                ).toISOString(),
                changeFrequency: "weekly",
                priority: 0.8,
              });
            }
          }
        }
      }

      // Fetch Operations
      const operationsRes = await fetch(`${API_BASE_URL}/operations_landing`, {
        cache: "no-store",
      });
      if (operationsRes.ok) {
        const operations = await operationsRes.json();
        for (const locale of locales) {
          for (const op of operations) {
            if (op.is_published !== false) {
              routes.push({
                url: `${BASE_URL}/${locale}/operations/${op.slug}`,
                lastModified: new Date(
                  op.updated_at || new Date(),
                ).toISOString(),
                changeFrequency: "weekly",
                priority: 0.8,
              });
            }
          }
        }
      }
    } catch (error) {
      console.error("Sitemap dynamic fetch error:", error);
    }
  }

  return routes;
}
