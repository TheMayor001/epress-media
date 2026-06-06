import { Article } from "@/types/article";

/**
 * API Service for E-Press Media CMS
 * Handles all data fetching from the backend CMS (e.g., Payload or Strapi).
 * Automatically injects high-quality regional fallback data if backend is offline.
 */

const API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || "http://localhost:1337";

// HIGH-QUALITY DEVELOPMENT FALLBACK DATASET (South Sudan Regional Focus)
const MOCK_ARTICLES: Article[] = [
  {
    id: "epm-2026-001",
    title:
      "Juba Economic Forum Outlines Strategic Infrastructure Frameworks for Regional Trade",
    slug: "juba-economic-forum-infrastructure-frameworks",
    excerpt:
      "The Ministry of Finance and regional economic analysts concluded a three-day summit in Juba, outlining major investments aimed at scaling up digital logistics and cross-border trade pipelines.",
    body: "In a definitive step toward regional integration, economic planners and state representatives concluded the Juba Economic Forum yesterday. The primary resolution focuses on allocating critical budget modules toward stabilizing transport and digital telecommunications corridors linking South Sudan with its East African neighbors. The framework outlines standard infrastructure benchmarks, localized custom processing points, and high-performance server grids designed to keep trade data flowing cleanly across borders without connection drops.",
    category: "Business",
    publicationDate: "2026-06-05T08:00:00.000Z",
    author: { id: "auth-1", name: "Deng Athian" },
    coverImage: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      alt: "Modern corporate trade building blueprint",
    },
  },
  {
    id: "epm-2026-002",
    title:
      "National Assembly Initiates Strategic Legislative Review of Digital Media Access Policies",
    slug: "national-assembly-digital-media-access-review",
    excerpt:
      "Parliamentary representatives are convening this week to debate a modernized regulatory bill aimed at expanding public connectivity guarantees and institutional cybersecurity standards.",
    body: "A new legislative cycle has opened up intense dialogue inside the National Assembly regarding the digital ecosystem. The proposed bill aims to offer regulatory protections for independent digital publishers while incentivizing local telecommunication actors to reduce data pricing tariffs for educational and information networks. Security leads emphasize that robust data safeguards are essential to shield local news platforms from malicious traffic surges.",
    category: "Politics",
    publicationDate: "2026-06-04T14:30:00.000Z",
    author: { id: "auth-2", name: "Achol Malwal" },
    coverImage: {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9",
      alt: "Legislative chambers broadsheet view",
    },
  },
  {
    id: "epm-2026-003",
    title:
      "South Sudan National Basketball Team Commences Intensive Training Camp for Regional Qualifiers",
    slug: "south-sudan-basketball-regional-qualifiers-training",
    excerpt:
      "The national team has assembled their initial squad roster in Juba, starting tactical conditioning drills ahead of the upcoming continental basketball championships.",
    body: "The national stadium courts in Juba are buzzing with high intensity as our elite athletic delegation officially opens camp. Following spectacular international showings over recent seasons, coaching leads are focusing on integrating young localized talents with veteran international professionals. Public enthusiasm remains exceptionally high, with local screening venues preparing major community setups across the country.",
    category: "Sports",
    publicationDate: "2026-06-04T10:15:00.000Z",
    author: { id: "auth-3", name: "Emmanuel John" },
    coverImage: {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      alt: "Basketball court broad view",
    },
  },
  {
    id: "epm-2026-004",
    title:
      "Central Bank Implements Upgraded Financial Compliance Directives for Mobile Money Platforms",
    slug: "central-bank-mobile-money-compliance-directives",
    excerpt:
      "New fiscal compliance frameworks require operators to implement heightened consumer identity checks and localized cloud-transaction ledger systems.",
    body: "To shield micro-merchants and daily consumers from expanding threat matrices, the Central Bank has modified regulatory frameworks governing mobile wallet integrations. FinTech enterprises must maintain highly verifiable transactional history nodes. The directive is predicted to foster long-term investment trust across regional markets.",
    category: "Business",
    publicationDate: "2026-06-03T09:00:00.000Z",
    author: { id: "auth-1", name: "Deng Athian" },
    coverImage: {
      url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
      alt: "Mobile technology data stream",
    },
  },
  {
    id: "epm-2026-005",
    title:
      "Juba Cultural Preservation Society Announces Open-Air Multimedia History Exhibition",
    slug: "juba-cultural-multimedia-history-exhibition",
    excerpt:
      "An upcoming collaborative documentary showcase intends to track evolving lifestyle trends, musical traditions, and traditional architecture styles.",
    body: "Curators at the Juba Cultural Center have finalized a community deployment map for an interactive historical display. Incorporating photographic galleries, rare sound bytes, and archival field records, the exhibition details how shifting generational styles have altered fashion and community architecture from early periods to modern East African trends.",
    category: "Lifestyle",
    publicationDate: "2026-06-02T16:45:00.000Z",
    author: { id: "auth-4", name: "Grace Kiden" },
    coverImage: {
      url: "https://images.unsplash.com/photo-1513829092359-0a67b0991419",
      alt: "Cultural celebration photography",
    },
  },
  {
    id: "epm-2026-006",
    title:
      "E-Press Media Blueprint Targets Growth Vectors Across Modern News Broadcast Sectors",
    slug: "epress-media-blueprint-digital-newsroom-expansion",
    excerpt:
      "Guided by the institutional standard of regional legacy platforms, the network accelerates content engineering to turn local stories into major trends.",
    body: "Expanding its operational parameters beyond agency media consulting, E-Press Media is rolling out dedicated news desks. By focusing execution vectors on mobile delivery channels, the platform seeks to serve as an objective repository of local updates, utilizing high information density matrix layouts to keep audiences deeply informed.",
    category: "Politics",
    publicationDate: "2026-06-01T11:00:00.000Z",
    author: { id: "auth-2", name: "Achol Malwal" },
    coverImage: {
      url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      alt: "Newspaper publishing array",
    },
  },
];

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
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    const fetchedData = (data.docs || data.data) as Article[];

    if (fetchedData && fetchedData.length > 0) return fetchedData;
    return MOCK_ARTICLES.slice(0, limit);
  } catch (error) {
    console.warn(
      "Backend CMS unreachable. Injecting high-density newsroom fallback data.",
      error,
    );
    return MOCK_ARTICLES.slice(0, limit);
  }
}

/**
 * Fetches a single article by its slug.
 * @param slug The URL-friendly string of the article.
 * @returns A promise that resolves to a single article object or null.
 */
export async function fetchArticleBySlug(
  slug: string,
): Promise<Article | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    const article = data.docs?.[0] || data.data?.[0];

    if (article) return article as Article;

    const mockMatch = MOCK_ARTICLES.find((item) => item.slug === slug);
    return mockMatch || null;
  } catch (error) {
    console.warn(
      `Backend unreachable for slug '${slug}'. Searching mock data pool.`,
      error,
    );
    const mockMatch = MOCK_ARTICLES.find((item) => item.slug === slug);
    return mockMatch || null;
  }
}

/**
 * Fetches a list of authors from the CMS.
 * @returns A promise that resolves to an array of authors.
 */
export async function fetchAuthors() {
  try {
    const res = await fetch(`${API_URL}/api/authors`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.docs || data.data;
  } catch (error) {
    console.error(
      "Error fetching authors, returning default empty state:",
      error,
    );
    return [];
  }
}
