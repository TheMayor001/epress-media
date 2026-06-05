import { notFound } from "next/navigation";
import { fetchArticleBySlug } from "@/lib/api";
import { Article } from "@/types/article";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await fetchArticleBySlug(params.slug);
  if (!article) return notFound();

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await fetchArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <article className="min-h-screen bg-white dark:bg-black text-[#1A1A1A] max-w-4xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <div className="flex items-center text-sm opacity-80 mb-4">
          <span>By {article.author?.name}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.publicationDate).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span className="bg-[#0056B3] text-white text-xs font-semibold px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {/* For a real implementation, use a rich text renderer here */}
        <div className="font-serif text-[#1A1A1A] leading-relaxed text-lg">
          {article.body}
        </div>
      </div>
    </article>
  );
}
