import { Metadata } from "next";
import Link from "next/link";
import { fetchArticles } from "../lib/api";
import { Article } from "@/types/article";

export const metadata: Metadata = {
  title: "E-Press Media - Breaking News & In-Depth Reporting",
  description: "Authoritative news for South Sudan and beyond. Authoritative, Legacy Newspaper style.",
};

export default async function Home() {
  let articles: Article[] = [];
  
  try {
    articles = await fetchArticles(10);
  } catch (error) {
    console.error("Failed to fetch articles from CMS:", error);
    articles = [];
  }

  const hasArticles = articles && articles.length > 0;
  const heroArticle = hasArticles ? articles[0] : null;
  const feedArticles = hasArticles ? articles.slice(1) : [];

  // Traditional Newspaper Dateline Formatting (June 2026)
  const displayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#FBFBFA] dark:bg-black text-[#1A1A1A] dark:text-white transition-colors duration-200">
      
      {/* ✦ 1. BREAKING NEWS TICKER */}
      <div className="bg-[#00AEEF] text-white text-xs font-bold px-4 py-2.5 overflow-hidden whitespace-nowrap shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="bg-white text-[#00AEEF] px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-widest mr-4 shrink-0 animate-pulse">
            ✦ Breaking
          </span>
          <span className="inline-block animate-infinite-scroll tracking-wide font-medium">
            Major policy announcement by South Sudanese government | Elections scheduled for 2025 | New oil discovery in Unity State |
          </span>
        </div>
      </div>

      {/* ✦ 2. LEGACY BROADSHEET MASTHEAD */}
      <header className="max-w-7xl mx-auto px-4 pt-8 pb-4 text-center">
        <div className="space-y-1 mb-4">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#0056B3] uppercase">
            Turning Brands Into Trends
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1A1A1A] font-serif">
            E-PRESS MEDIA
          </h1>
          <p className="text-xs italic text-gray-500 font-serif">
            The Authoritative Pulse of Regional Digital Journalism
          </p>
        </div>

        {/* Double-bordered Traditional Dateline Row */}
        <div className="border-y-2 border-double border-gray-300 dark:border-gray-800 py-2 flex flex-col sm:flex-row justify-between items-center text-xs font-medium tracking-wider text-gray-600 dark:text-gray-400 uppercase gap-2">
          <div>Vol. IV • No. CXLIV</div>
          <div className="font-bold font-serif text-gray-800 dark:text-gray-200">{displayDate}</div>
          <div>Juba, South Sudan</div>
        </div>
      </header>

      {/* ✦ 3. CORPORATE BLUE NAVIGATION BAR */}
      <nav className="bg-[#0056B3] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar py-3 text-sm font-bold tracking-widest uppercase text-white whitespace-nowrap gap-6 md:gap-8">
            <Link href="/" className="hover:text-[#00AEEF] border-b-2 border-white pb-0.5 transition-colors">Home</Link>
            <Link href="/politics" className="hover:text-[#00AEEF] transition-colors">Politics</Link>
            <Link href="/business" className="hover:text-[#00AEEF] transition-colors">Business</Link>
            <Link href="/sports" className="hover:text-[#00AEEF] transition-colors">Sports</Link>
            <Link href="/opinion" className="hover:text-[#00AEEF] transition-colors">Opinion</Link>
            <Link href="/lifestyle" className="hover:text-[#00AEEF] transition-colors">Lifestyle</Link>
            <span className="text-gray-400 font-normal hidden md:inline">|</span>
            <Link href="/admin" className="text-[#00AEEF] hover:text-white transition-colors ml-auto text-xs border border-[#00AEEF] px-2 py-0.5 rounded">Newsroom Login</Link>
          </div>
        </div>
      </nav>

      {/* ✦ 4. MAIN EDITORIAL NEWSPAPER GRID */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left/Center Column (Main Newsroom Feed) */}
          <div className="lg:col-span-2 space-y-10 border-r-0 lg:border-r lg:border-gray-200 lg:pr-8">
            {!hasArticles ? (
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                <h2 className="text-xl font-semibold text-[#1A1A1A] mb-2">Editorial Feed Offline</h2>
                <p className="text-gray-500 text-sm">No articles have been published to the newsroom database yet.</p>
              </div>
            ) : (
              <>
                {/* Main Front Page Featured Story */}
                {heroArticle && (
                  <article className="group border-b border-gray-200 pb-8">
                    <span className="inline-block bg-[#1A1A1A] text-white text-[10px] font-extrabold px-2 py-0.5 uppercase tracking-widest mb-3">
                      {heroArticle.category}
                    </span>
                    <Link href={`/articles/${heroArticle.slug}`}>
                      <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1A1A1A] group-hover:text-[#0056B3] leading-tight mb-3 transition-colors cursor-pointer">
                        {heroArticle.title}
                      </h2>
                    </Link>
                    <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                      <span className="font-bold text-gray-700">By {heroArticle.author?.name || "Staff Writer"}</span>
                      <span>•</span>
                      <span>{new Date(heroArticle.publicationDate).toLocaleDateString()}</span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed font-serif first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#1A1A1A]">
                      {heroArticle.excerpt}
                    </p>
                  </article>
                )}

                {/* Sub-Story Downstream Feed */}
                <div className="space-y-8">
                  {feedArticles.map((article: Article) => (
                    <article key={article.id} className="group border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <span className="text-[11px] font-bold text-[#0056B3] uppercase tracking-wider block mb-1">
                        {article.category}
                      </span>
                      <Link href={`/articles/${article.slug}`}>
                        <h3 className="text-xl font-bold font-serif text-[#1A1A1A] group-hover:text-[#0056B3] mb-2 transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="text-[11px] text-gray-400 mb-2">
                        <span className="font-medium text-gray-500">By {article.author?.name || "Staff Writer"}</span> • {new Date(article.publicationDate).toLocaleDateString()}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-serif line-clamp-3">
                        {article.excerpt}
                      </p>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Column (Sidebar Trending Engine) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-white bg-[#1A1A1A] px-3 py-1.5 uppercase tracking-widest mb-4 inline-block">
                Trending Wire
              </h3>
              
              {!hasArticles ? (
                <p className="text-sm text-gray-400 italic">Awaiting trending data...</p>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {articles.slice(0, 6).map((article: Article, index: number) => (
                    <li key={article.id} className="group py-3.5 first:pt-0 last:pb-0">
                      <div className="flex gap-4 items-start">
                        <span className="text-2xl font-black text-gray-200 group-hover:text-[#00AEEF] font-serif transition-colors leading-none w-6">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                            {article.category}
                          </span>
                          <Link href={`/articles/${article.slug}`}>
                            <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#0056B3] leading-snug cursor-pointer transition-colors line-clamp-2">
                              {article.title}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Print Edition Advertisement Block Placeholder */}
            <div className="bg-[#F4F4F2] border border-gray-200 p-6 text-center space-y-2 rounded-sm">
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Advertisement</p>
              <h4 className="text-sm font-bold tracking-tight text-gray-700">E-Press Digital Agency</h4>
              <p className="text-xs text-gray-500 italic font-serif">&ldquo;Turning local brands into regional trends.&rdquo;</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}