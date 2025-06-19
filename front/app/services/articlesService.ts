import { sanityClient } from "~/utils/sanityClient";
import type { Article } from "~/types/types";

export const articlesService = {
  async getAllArticles(): Promise<Article[]> {
    const query = `*[_type == "posts"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      excerpt,
      body,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      author->{
        name,
        image {
          asset->{
            url
          }
        }
      }
    }`;

    try {
      const articles = await sanityClient.fetch(query);
      console.log("Articles récupérés:", articles);
      console.log("Nombre d'articles:", articles.length);
      return articles;
    } catch (error) {
      console.error("Erreur dans getAllArticles:", error);
      return [];
    }
  },

  async getArticlesByCategory(category: string): Promise<Article[]> {
    const query = `*[_type == "posts" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      category,
      excerpt,
      body,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      author->{
        name,
        image {
          asset->{
            url
          }
        }
      }
    }`;

    try {
      const articles = await sanityClient.fetch(query, { category });
      console.log(`Articles pour la catégorie ${category}:`, articles);
      return articles;
    } catch (error) {
      console.error("Erreur dans getArticlesByCategory:", error);
      return [];
    }
  },

  async getArticleBySlug(slug: string): Promise<Article | null> {
    const query = `*[_type == "posts" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      excerpt,
      body,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      author->{
        name,
        image {
          asset->{
            url
          }
        }
      }
    }`;

    try {
      const article = await sanityClient.fetch(query, { slug });
      console.log(`Article pour le slug ${slug}:`, article);
      return article;
    } catch (error) {
      console.error("Erreur dans getArticleBySlug:", error);
      return null;
    }
  },

  async getRelatedArticles(
    currentArticleId: string,
    category: string,
    limit: number = 3
  ): Promise<Article[]> {
    const query = `*[_type == "posts" && _id != $currentArticleId && category == $category] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      category,
      excerpt,
      mainImage {
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      author->{
        name
      }
    }`;

    try {
      const articles = await sanityClient.fetch(query, {
        currentArticleId,
        category,
        limit,
      });
      console.log("Articles similaires:", articles);
      return articles;
    } catch (error) {
      console.error("Erreur dans getRelatedArticles:", error);
      return [];
    }
  },
};
