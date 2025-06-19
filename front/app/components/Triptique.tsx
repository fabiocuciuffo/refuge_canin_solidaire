import type { TriptiqueProps } from "../types/types";

export default function Triptique({
  title,
  subtitle,
  cards,
  backgroundColor = "bg-white-custom",
  cardBackgroundColor = "bg-beige",
  titleColor = "text-dark",
  cardTitleSize,
  cardSubtitleeSize = "title4",
  cardTitleColor = "text-dark",
  cardSubtitleColor = "text-dark",
  cardTextColor = "text-dark",
}: TriptiqueProps) {
  const getGridClasses = (cardCount: number) => {
    if (cardCount <= 2) return "grid-cols-1 md:grid-cols-2";
    if (cardCount === 3) return "grid-cols-1 md:grid-cols-3";
    // Pour 4+ cartes, on utilise une grille flexible qui permet le wrapping
    return "grid-cols-1 md:grid-cols-3";
  };

  const getCardClasses = (cardCount: number) => {
    if (cardCount >= 4) {
      return "p-6 h-auto min-h-[250px] flex flex-col justify-start items-start text-left rounded-lg";
    }
    return "p-4 h-80 flex flex-col justify-between items-left text-left rounded-lg";
  };

  const getCardLayout = (cardCount: number, index: number) => {
    if (cardCount >= 4) {
      return (
        <div className="flex flex-col space-y-4">
          <h2
            className={`${cardTitleSize || "text-xl"} ${cardTitleColor} font-bold leading-tight`}
          >
            {cards[index].title}
          </h2>

          {cards[index].subtitle && (
            <h3 className={`${cardSubtitleeSize} ${cardSubtitleColor} mb-2`}>
              {cards[index].subtitle}
            </h3>
          )}

          <p className={`${cardTextColor} text-sm leading-relaxed`}>
            {cards[index].description}
          </p>
        </div>
      );
    }

    // Layout original pour 3 cartes ou moins
    return (
      <>
        <h2 className={`${cardTitleSize} ${cardTitleColor} mb-2`}>
          {cards[index].title}
        </h2>

        {cards[index].subtitle && (
          <h3 className={`${cardSubtitleeSize} ${cardSubtitleColor} mb-6`}>
            {cards[index].subtitle}
          </h3>
        )}

        <p className={`text-small ${cardTextColor} leading-relaxed`}>
          {cards[index].description}
        </p>
      </>
    );
  };

  // Pour 5 cartes, on veut une disposition spéciale : 3 puis 2
  const renderCards = () => {
    if (cards.length === 5) {
      return (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className={`${cardBackgroundColor} ${getCardClasses(cards.length)}`}
              >
                {getCardLayout(cards.length, index)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {cards.slice(3, 5).map((card, index) => (
              <div
                key={index + 3}
                className={`${cardBackgroundColor} ${getCardClasses(cards.length)}`}
              >
                {getCardLayout(cards.length, index + 3)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Pour tous les autres cas (1, 2, 3, 4+ cartes)
    return (
      <div className={`grid ${getGridClasses(cards.length)} gap-8`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${cardBackgroundColor} ${getCardClasses(cards.length)}`}
          >
            {getCardLayout(cards.length, index)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="p-4">
      <div className={`w-full py-16 px-4 rounded-2xl ${backgroundColor}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`title2 ${titleColor}`}>{title}</h1>
            <p className={`text-small text-center mt-6`}>{subtitle}</p>
          </div>

          {renderCards()}
        </div>
      </div>
    </section>
  );
}
