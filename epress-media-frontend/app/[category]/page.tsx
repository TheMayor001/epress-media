import { Metadata } from "next";
import Link from "next/link";
import { fetchArticles } from "../../lib/api";
import { Article } from "@/types/article";

type Params = Promise<{ category: string }>;

// Dynamic SEO Metadata for Section Fronts
export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { category } = await props.params;
  const normalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${normalizedCategory} News - E-Press Media`,
    description: `Authoritative reporting and in-depth analysis on ${normalizedCategory} from South Sudan and across the region.`,
  };
}

export default async function CategoryPage(props: { params: Params }) {
  const { category } = await props.params;

  // Normalize string for database/fallback matching (e.g., "politics" -> "Politics")
  const targetCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // Fetch the main batch of articles
  let allArticles: Article[] = [];
  try {
    allArticles = await fetchArticles(20);
  } catch (error) {
    console.error("Failed to fetch section articles:", error);
  }

  // Filter out articles belonging exclusively to this category
  const filteredArticles = allArticles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase(),
  );

  const hasArticles = filteredArticles.length > 0;

  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] dark:bg-black dark:text-white transition-colors duration-200">
      {/* 🏛️ PRINT-STYLE SECTION SUB-HEADER */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#0056B3] transition-colors"
          >
            &larr; Main Front Page
          </Link>
          <Link href="/">
            <h1 className="text-2xl font-black tracking-tighter font-serif text-[#1A1A1A] dark:text-white">
              E-PRESS MEDIA
            </h1>
          </Link>
          <div className="text-xs font-bold text-[#0056B3] tracking-widest uppercase bg-blue-50 dark:bg-gray-900 px-3 py-1 rounded-sm">
            {targetCategory} Section
          </div>
        </div>
      </header>

      {/* 📰 SECTION INDEX GRID */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Section Heading Banner */}
        <div className="border-b-4 border-black dark:border-white pb-2 mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight font-serif uppercase">
            Latest in {targetCategory}
          </h2>
        </div>

        {!hasArticles ? (
          /* Empty Section View */
          <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-16 text-center max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-1">
              Edition Ledger Empty
            </h3>
            <p className="text-sm text-gray-400 font-serif italic">
              No current dispatches files under the &ldquo;{targetCategory}
              &rdquo; wire matrix for this cycle.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block bg-[#0056B3] text-white text-xs font-bold px-4 py-2 uppercase tracking-wider hover:bg-[#00AEEF] transition-colors"
            >
              Return to Main Stream
            </Link>
          </div>
        ) : (
          /* Standard Editorial Stream Layout */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left/Center Stream: The main narrative list */}
            <div className="md:col-span-2 space-y-8 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredArticles.map((article, idx) => (
                <article
                  key={article.id}
                  className={`group ${idx > 0 ? "pt-8" : ""}`}
                >
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-2xl font-bold font-serif text-[#1A1A1A] dark:text-white group-hover:text-[#0056B3] mb-2.5 transition-colors cursor-pointer leading-tight">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="text-xs text-gray-400 mb-3 font-medium">
                    By{" "}
                    <span className="text-gray-600 dark:text-gray-300 font-bold">
                      {article.author?.name || "Staff Writer"}
                    </span>{" "}
                    • {new Date(article.publicationDate).toLocaleDateString()}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-serif line-clamp-4">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>

            {/* Right Stream: Segment Highlight Info Box */}
            <div className="md:col-span-1">
              <div className="bg-[#F4F4F2] dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 sticky top-6 space-y-4">
                <h4 className="text-xs font-bold text-white bg-[#1A1A1A] dark:bg-gray-700 px-2.5 py-1 uppercase tracking-widest inline-block">
                  Section Guide
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-serif leading-relaxed">
                  You are viewing the verified digital index sheets for the{" "}
                  <strong>{targetCategory}</strong> ledger. All entries undergo
                  rigorous peer review and compliance checks before data entry
                  synchronization.
                </p>
                <div className="border-t border-gray-300 dark:border-gray-700 pt-3 text-[10px] text-gray-400 font-mono">
                  FEED STATUS: ONLINE
                  <br />
                  LATENCY NODE: STABLE
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
