const API = process.env.NEXT_PUBLIC_BASE_URL;

export async function getFaqs() {
  const res = await fetch(`${API}/faq_about_us`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch FAQs");
  }

  return res.json();
}
