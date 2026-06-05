export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImage: {
    url: string;
    alt: string;
  };
  category: "Politics" | "Business" | "Sports" | "Lifestyle";
  publicationDate: string; // ISO string
  author: {
    id: string;
    name: string;
  };
}