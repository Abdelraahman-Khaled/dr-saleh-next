const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetch all galleries
 */
export const getGalleries = async () => {
  const res = await fetch(`${API_BASE_URL}/gallery_landing`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) throw new Error("Failed to fetch galleries");
  return res.json();
};
