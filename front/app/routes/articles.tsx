import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import Banner from "~/components/Banner";
import { ArticleCard } from "~/components/Card";
import { articlesService } from "~/services/articlesService";
import type { Article } from "~/types/types";

export const meta = () => {
  return [
    { title: "Refuge Canin Solidaire - Articles" },
    { name: "description", content: "Articles du Refuge Canin Solidaire" },
  ];
};

const category = [
  {title: 'Adoption', value: 'Adoption'},
  {title: 'Education', value: 'Education'},
  {title: 'Le Refuge', value: 'Le Refuge'},
  {title: 'Sensibilisation', value: 'Sensibilisation'},
  {title: 'Événements', value: 'Événements'},
  {title: 'Vie sociale', value: 'Vie sociale'},
]

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const categoryFilter = url.searchParams.get("category");

  try {
    const articles = categoryFilter
      ? await articlesService.getArticlesByCategory(categoryFilter)
      : await articlesService.getAllArticles();

    return { articles, selectedCategory: categoryFilter, categories: category };
  } catch (error) {
    console.error("Erreur lors du chargement des articles:", error);
    return { articles: [], selectedCategory: null, categories: category };
  }
}

export default function Articles() {
  const { articles, selectedCategory, categories } = useLoaderData<{
    articles: Article[];
    selectedCategory: string | null;
    categories: typeof category;
  }>();

  return (
    <main>
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="/articles"
                className={`px-6 py-2.5 rounded-2xl text-regular transition-all duration-200 ${
                  !selectedCategory
                    ? "bg-blue text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Tous les articles
              </a>
              {categories.map((cat) => (
                <a
                  key={cat.value}
                  href={`/articles?category=${cat.value}`}
                  className={`px-6 py-2.5 rounded-2xl text-regular transition-all duration-200 ${
                    selectedCategory === cat.value
                      ? "bg-blue text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>

          {/* Liste des articles */}
          {articles.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="title3 md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedCategory
                    ? `Articles - ${
                        categories.find((c) => c.value === selectedCategory)
                          ?.title
                      }`
                    : "Nos derniers articles"}
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Découvrez nos histoires, conseils et actualités du refuge
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {articles.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Aucun article trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedCategory
                    ? `Aucun article dans la catégorie "${
                        categories.find((c) => c.value === selectedCategory)
                          ?.title
                      }"`
                    : "Aucun article disponible pour le moment."}
                </p>
                {selectedCategory && (
                  <a
                    href="/articles"
                    className="inline-flex items-center bg-blue text-white px-6 py-3 rounded-lg hover:bg-blue-dark transition-colors duration-200 font-medium"
                  >
                    Voir tous les articles
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <Banner
        title={{
          text: (
            <span>
              Nous avons{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                besoin{" "}
              </span>
              de vous !
            </span>
          ),
        }}
        description="Refuge Canin Solidaire ouvre bientôt ses portes! Nous avons encore besoin de votre aide. Nous réinventons les refuges en adoptant une approche solidaire, éducative et éco-responsable. Soins bienveillants, sensibilisation communautaire et pratiques durables sont au cœur de cette initiative, redéfinissant ainsi le rôle d'un refuge pour chiens."
        button={{ text: "Contactez-nous", href: "/contact" }}
        image={{
          src: "/images/Group57.png",
          alt: "Chiens heureux du refuge",
        }}
      />
    </main>
  );
}
