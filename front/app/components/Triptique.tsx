import type { TriptiqueProps } from "../types/types";

export default function Triptique({
  title,
  highlight,
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
  return (
    <section className="p-4">
      <div className={`w-full py-16 px-4 rounded-2xl ${backgroundColor}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className={`title2 ${titleColor}`}>
              {title} <span className="svg_background">{highlight}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${cardBackgroundColor} p-4 h-80 flex flex-col justify-center items-center text-left rounded-lg`}
              >
                <h2 className={`${cardTitleSize} ${cardTitleColor} mb-2`}>
                  {card.title}
                </h2>

                {card.subtitle && (
                  <h3
                    className={`${cardSubtitleeSize} ${cardSubtitleColor} mb-6`}
                  >
                    {card.subtitle}
                  </h3>
                )}

                <div className="flex-1 flex items-center justify-center">
                  <p className={`text-small ${cardTextColor} leading-relaxed`}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
