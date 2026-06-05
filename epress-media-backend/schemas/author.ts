/**
 * Author Collection Schema
 * Defines the structure for authors in the E-Press Media CMS.
 */
interface Author {
  /**
   * The full name of the author.
   */
  name: string;

  /**
   * A short biography for the author.
   */
  bio: string;

  /**
   * The author's profile picture.
   */
  avatar: {
    url: string;
    alt: string;
  };

  /**
   * The author's contact email address.
   */
  email: string;
}

export default Author;