import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchArticleBySlug, fetchArticles } from "../../../lib/api";

type Params = Promise<{ slug: string }>;

// Dynamic SEO Metadata Generation
export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found - E-Press Media",
    };
  }

  return {
    title: `${article.title} - E-Press Media`,
    description: article.excerpt,
  };
}

export default async function ArticlePage(props: { params: Params }) {
  const { slug } = await props.params;
  const article = await fetchArticleBySlug(slug);

  // Safeguard: If the article doesn't exist in backend or fallback data, trigger Next.js 404
  if (!article) {
    notFound();
  }

  // Fetch side-panel recommendations from the same category
  const allArticles = await fetchArticles(5);
  const recommendations = allArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  const displayDate = new Date(article.publicationDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] dark:bg-black dark:text-white transition-colors duration-200">
      {/* 🏛️ MINIMAL PRINT-STYLE SUB-HEADER */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-widest text-[#0056B3] hover:text-[#00AEEF] flex items-center gap-1 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <Link href="/">
            <h1 className="text-xl font-extrabold tracking-tighter font-serif text-[#1A1A1A] dark:text-white">
              E-PRESS MEDIA
            </h1>
          </Link>
          <div className="text-[10px] font-bold text-gray-400 tracking-wider uppercase hidden sm:block">
            Newsroom Desk
          </div>
        </div>
      </header>

      {/* 📰 CONTENT MATRIX */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <article className="space-y-6">
          {/* Category Badge */}
          <span className="inline-block bg-[#0056B3] text-white text-[10px] font-extrabold px-2.5 py-1 uppercase tracking-widest">
            {article.category}
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight text-[#1A1A1A] dark:text-white leading-tight">
            {article.title}
          </h1>

          {/* Standfirst / Excerpt */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-serif italic leading-relaxed border-l-4 border-gray-300 pl-4 py-1">
            {article.excerpt}
          </p>

          {/* Author Meta Row */}
          <div className="border-y border-gray-200 dark:border-gray-800 py-3 flex justify-between items-center text-xs text-gray-500 font-medium">
            <div>
              By{" "}
              <span className="font-bold text-gray-800 dark:text-gray-200">
                {article.author?.name || "Staff Writer"}
              </span>
            </div>
            <div>
              Published: <time className="font-serif">{displayDate}</time>
            </div>
          </div>

          {/* Editorial Body Content */}
          <div className="font-serif text-lg leading-relaxed space-y-6 text-[#1A1A1A] dark:text-gray-100 pt-4 tracking-wide selection:bg-yellow-100">
            {/* Split body text into mock paragraphs to mimic rich layout parsing */}
            {article.body.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#1A1A1A] dark:first-letter:text-white"
                    : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* 📚 DOWNSTREAM RECOMMENDATIONS ELEMENT */}
        <section className="mt-16 pt-10 border-t-2 border-double border-gray-200 dark:border-gray-800">
          <h3 className="text-xs font-bold text-white bg-[#1A1A1A] dark:bg-gray-800 px-3 py-1.5 uppercase tracking-widest mb-6 inline-block">
            Read Next In Regional Coverage
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((item) => (
              <div key={item.id} className="group space-y-2">
                <span className="text-[10px] font-bold text-[#0056B3] uppercase tracking-wider block">
                  {item.category}
                </span>
                <Link href={`/articles/${item.slug}`}>
                  <h4 className="text-sm font-bold font-serif text-[#1A1A1A] dark:text-white group-hover:text-[#0056B3] transition-colors cursor-pointer leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                </Link>
                <p className="text-xs text-gray-500 line-clamp-2 font-serif">
                  {item.excerpt}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
