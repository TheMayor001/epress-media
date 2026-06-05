import { Article } from "@/types/article";

/**
 * API Service for E-Press Media CMS
 * Handles all data fetching from the backend CMS (e.g., Payload or Strapi).
 */

const API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || "http://localhost:1337";

/**
 * Fetches a list of articles from the CMS.
 * @param limit The maximum number of articles to fetch.
 * @returns A promise that resolves to an array of articles.
 */
export async function fetchArticles(limit = 10): Promise<Article[]> {
  try {
    const res = await fetch(
      `${API_URL}/api/articles?sort=publicationDate:desc&limit=${limit}`,
      {
        next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
      },
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return (data.docs || data.data) as Article[]; // Handle different CMS response formats
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

/**
 * Fetches a single article by its slug.
 * @param slug The URL-friendly string of the article.
 * @returns A promise that resolves to a single article object or null.
 */
export async function fetchArticleBySlug(slug: string) {
  try {
    const res = await fetch(
      `${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
      },
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    const article = data.docs?.[0] || data.data?.[0];
    return article || null;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

/**
 * Fetches a list of authors from the CMS.
 * @returns A promise that resolves to an array of authors.
 */
export async function fetchAuthors() {
  try {
    const res = await fetch(`${API_URL}/api/authors`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.docs || data.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
    return [];
  }
}
