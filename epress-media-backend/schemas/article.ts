/**
 * Article Collection Schema
 * Defines the structure for news articles in the E-Press Media CMS.
 */
interface Article {
  /**
   * The main headline of the article.
   */
  title: string;

  /**
   * A URL-friendly string derived from the title.
   */
  slug: string;

  /**
   * A short summary of the article content.
   */
  excerpt: string;

  /**
   * The main body content of the article, which can be in Markdown or Rich Text format.
   */
  body: string; // Can be Markdown or Rich Text

  /**
   * The primary image representing the article.
   */
  coverImage: {
    url: string;
    alt: string;
  };

  /**
   * The category this article belongs to.
   */
  category: "Politics" | "Business" | "Sports" | "Lifestyle";

  /**
   * The date the article was published.
   */
  publicationDate: Date;

  /**
   * The author of the article.
   */
  author: {
    id: string; // Reference to the Authors collection
    name: string;
  };
}

export default Article;