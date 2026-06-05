import { Metadata } from "next";
import { fetchArticles } from "../lib/api";

export const metadata: Metadata = {
  title: "E-Press Media - Breaking News & In-Depth Reporting",
  description: "Authoritative news for South Sudan and beyond. Authoritative, Legacy Newspaper style.",
};

import { Article } from "@/types/article";

export default async function Home() {
  const articles: Article[] = await fetchArticles(10);

  if (articles.length === 0) {
    return (
      <main className="min-h-screen bg-white dark:bg-black p-8 text-center">
        <p className="text-[#1A1A1A]">No articles available at the moment.</p>
      </main>
    );
  }

  // Use the first article as the hero story
  const [heroArticle, ...feedArticles] = articles;

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Breaking News Ticker */}
      <div className="bg-[#00AEEF] text-white text-sm font-bold px-4 py-2 overflow-hidden whitespace-nowrap">
        <span className="animate-pulse mr-4">✦ BREAKING</span>
        <span className="inline-block animate-infinite-scroll">
          Major policy announcement by South Sudanese government | Elections scheduled for 2025 | New oil discovery in Unity State |
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (Hero + Article Feed) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Story */}
            {heroArticle && (
              <article className="border-b border-gray-200 pb-6">
                <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2 leading-tight">
                  {heroArticle.title}
                </h1>
                <p className="text-[#1A1A1A] opacity-80 mb-4">
                  By {heroArticle.author?.name} • {new Date(heroArticle.publicationDate).toLocaleDateString()}
                </p>
                <p className="text-lg text-[#1A1A1A] leading-relaxed">
                  {heroArticle.excerpt}
                </p>
              </article>
            )}

            {/* Article Feed */}
            <div className="space-y-6">
              {feedArticles.map((article: Article) => (
                <article key={article.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                    {article.title}
                  </h2>
                  <p className="text-[#1A1A1A] opacity-80 mb-2">
                    By {article.author?.name} • {new Date(article.publicationDate).toLocaleDateString()}
                  </p>
                  <p className="text-[#1A1A1A] leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar (Trending Now) - Appears on Desktop, Moves Below on Mobile */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 border-b-2 border-[#0056B3] pb-1 inline-block">
              Trending Now
            </h3>
            <ul className="space-y-3">
              {feedArticles.slice(0, 6).map((article: Article, i: number) => (
                <li key={article.id} className="text-[#1A1A1A] hover:text-[#0056B3] transition-colors duration-200">
                  <span className="inline-block w-2 h-2 bg-[#0056B3] rounded-full mr-2"></span>
                  {article.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      
    </main>
  );
}
