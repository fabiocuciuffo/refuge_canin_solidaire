import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { articlesService } from "~/services/articlesService";
import { ArticleCard } from "~/components/Card";
import { PortableText } from "~/components/ArticleContent";
import type { Article } from "~/types/types";

export const meta = ({ data }: { data: any }) => {
  const article = data?.article;
  return [
    {
      title: article
        ? `${article.title} - Refuge Canin Solidaire`
        : "Article non trouvé",
    },
    {
      name: "description",
      content: article?.excerpt || "Article du Refuge Canin Solidaire",
    },
    { property: "og:title", content: article?.title },
    { property: "og:description", content: article?.excerpt },
    { property: "og:image", content: article?.mainImage?.asset?.url },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  if (!slug) {
    throw new Response("Article non trouvé", { status: 404 });
  }

  try {
    const article = await articlesService.getArticleBySlug(slug);

    if (!article) {
      throw new Response("Article non trouvé", { status: 404 });
    }

    // Récupérer les articles similaires
    const relatedArticles = await articlesService.getRelatedArticles(
      article._id,
      article.category,
      3
    );

    return { article, relatedArticles };
  } catch (error) {
    console.error("Erreur lors du chargement de l'article:", error);
    throw new Response("Erreur lors du chargement de l'article", {
      status: 500,
    });
  }
}

export default function ArticleDetail() {
  const { article, relatedArticles } = useLoaderData<{
    article: Article;
    relatedArticles: Article[];
  }>();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadTime = (body: any) => {
    if (!body) return "5 min";
    const wordCount = JSON.stringify(body).split(" ").length;
    const readTime = Math.ceil(wordCount / 200);
    return `${readTime} min`;
  };

  return (
    <main className="bg-white">
      {/* Navigation de retour */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a
            href="/articles"
            className="inline-flex items-center text-gray-600 hover:text-blue transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux articles
          </a>
        </div>
      </div>

      {/* Article principal */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* En-tête de l'article */}
        <header className="mb-12">
          {/* Catégorie */}
          <div className="mb-6">
            <span className="inline-block bg-blue text-white text-sm font-medium px-4 py-2 rounded-full">
              {article.category}
            </span>
          </div>

          {/* Titre */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Extrait */}
          {article.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>
          )}

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-8">
            {/* Auteur */}
            {article.author && (
              <div className="flex items-center gap-3">
                {article.author.image?.asset?.url && (
                  <img
                    src={article.author.image.asset.url}
                    alt={article.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {article.author.name}
                  </p>
                  <p className="text-sm text-gray-500">Auteur</p>
                </div>
              </div>
            )}

            {/* Date et temps de lecture */}
            <div className="flex items-center gap-6 text-sm">
              <time
                dateTime={article.publishedAt}
                className="flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {formatDate(article.publishedAt)}
              </time>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {calculateReadTime(article.body)} de lecture
              </div>
            </div>
          </div>
        </header>

        {/* Image principale */}
        {article.mainImage?.asset?.url && (
          <div className="mb-12">
            <img
              src={article.mainImage.asset.url}
              alt={article.mainImage.alt || article.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Contenu de l'article */}
        <div className="prose prose-lg max-w-none">
          {article.body && <PortableText value={article.body} />}
        </div>

        {/* Partage social */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Partager cet article
          </h3>
          <div className="flex gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : ""
              )}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </article>

      {/* Articles similaires */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Articles similaires
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Découvrez d'autres articles qui pourraient vous intéresser
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard
                  key={relatedArticle._id}
                  article={relatedArticle}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/articles"
                className="inline-flex items-center bg-blue text-white px-6 py-3 rounded-lg hover:bg-blue-dark transition-colors duration-200 font-medium"
              >
                Voir tous les articles
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
