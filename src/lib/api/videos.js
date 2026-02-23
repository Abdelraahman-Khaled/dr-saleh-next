const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetch all videos for landing page
 */
export const getVideos = async () => {
  const res = await fetch(`${API_BASE_URL}/video_landing`, {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) throw new Error("Failed to fetch videos");
  return res.json();
};
