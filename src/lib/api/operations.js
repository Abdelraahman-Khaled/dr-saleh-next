const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetch all operations for landing page
 */
export const getOperations = async () => {
  const res = await fetch(`${API_BASE_URL}/operations_landing`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch operations");
  return res.json();
};

/**
 * Fetch single operation by slug
 * @param {string} slug - Operation slug (can be Arabic or English)
 */
export const getOperationDetails = async (slug) => {
  const res = await fetch(`${API_BASE_URL}/operation_show?slug=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch operation");
  return res.json();
};
