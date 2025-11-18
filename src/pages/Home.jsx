// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const sampleArticles = [
  {
    id: 1,
    title: "Kenyan Tech Startups Poised for Record Growth in 2025",
    category: "Business",
    excerpt:
      "Analysts project a 30% surge in funding as Kenya continues to attract global tech investors...",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    author: "Epress Staff",
    date: "Jan 14, 2025",
  },
  {
    id: 2,
    title: "Creative Industry in Mombasa Gains Momentum",
    category: "Culture",
    excerpt:
      "From art to digital media, young creatives in Mombasa are shaping Kenya’s next cultural wave...",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    author: "Epress Staff",
    date: "Jan 11, 2025",
  },
  {
    id: 3,
    title: "The Rise of Independent Digital Journalists",
    category: "Opinion",
    excerpt:
      "A new era of independent reporting is changing how stories are told and trusted online...",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    author: "Epress Staff",
    date: "Jan 9, 2025",
  },
  {
    id: 4,
    title: "AI and Newsrooms: The Next Frontier",
    category: "Technology",
    excerpt:
      "Artificial Intelligence is revolutionizing how news is researched, written, and distributed...",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    author: "Epress Staff",
    date: "Jan 7, 2025",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-b from-white to-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#2563EB] mb-4">
            Epress Media
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering voices through digital media — fast, reliable, and
            community-driven news.
          </p>

          {/* Hero Image */}
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
            alt="Office workspace"
            className="hero-image mt-8 shadow"
          />
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex-grow">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Latest Highlights
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArticles.map((article) => (
            <div
              key={article.id}
              className="article-card bg-white rounded-xl shadow cursor-pointer overflow-hidden flex flex-col"
              onClick={() => navigate(`/article/${article.id}`)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
                loading="lazy"
              />

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-sm font-semibold text-[#2563EB] uppercase tracking-wide">
                  {article.category}
                </span>

                <h2 className="text-xl font-bold mt-2 mb-2 leading-snug">
                  {article.title}
                </h2>

                <p className="text-gray-600 flex-grow leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Author + date */}
                <div className="text-xs text-gray-500 mt-4">
                  {article.author} • {article.date}
                </div>

                <button className="mt-3 text-[#2563EB] font-medium hover:text-blue-700 transition self-start">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
