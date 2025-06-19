import { Link } from "react-router";
import type { Article } from "~/types/types";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const calculateReadTime = (body: any) => {
    // Estimation simple du temps de lecture (environ 200 mots par minute)
    if (!body) return "5 min read";
    const wordCount = JSON.stringify(body).split(" ").length;
    const readTime = Math.ceil(wordCount / 200);
    return `${readTime} min read`;
  };

  return (
    <article className="group cursor-pointer">
      <Link to={`/articles/${article.slug.current}`} className="block">
        {/* Image avec aspect ratio fixe */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
          {article.mainImage?.asset?.url ? (
            <img
              src={article.mainImage.asset.url}
              alt={article.mainImage.alt || article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

          {/* Badge catégorie en overlay */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="space-y-3">
          {/* Titre */}
          <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue transition-colors duration-200">
            {article.title}
          </h3>

          {/* Description */}
          {article.excerpt && (
            <p className="text-gray-600 text-base leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
          )}

          {/* Métadonnées */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <time dateTime={article.publishedAt} className="font-medium">
              {formatDate(article.publishedAt)}
            </time>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{calculateReadTime(article.body)}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
