import React from "react";
import type {
  TimelineSectionProps,
  TimelineCardProps,
  TimelineItem,
} from "../types/types";

const TimelineCard: React.FC<TimelineCardProps> = ({ item, position }) => {
  const cardClasses = `
    ${position === "left" ? "md:mr-8 md:text-right" : "md:ml-8 md:text-left"}
    ${
      item.isSpecial
        ? "border-2 border-dashed border-red-300 bg-white"
        : "bg-blue text-white"
    }
    rounded-2xl p-6 mb-8 md:mb-0 relative max-w-md
    ${position === "left" ? "md:ml-auto" : "md:mr-auto"}
  `;

  return (
    <div className={cardClasses}>
      <div
        className={`
        title4 inline-block px-3 py-1 rounded-lg text-sm font-bold mb-4
        ${item.isSpecial ? "svg_background text-dark" : "svg_background text-gray-800"}
      `}
      >
        {item.year}
      </div>

      <h3
        className={`
        title5 md:title6 font-bold mb-4 leading-tight
        ${item.isSpecial ? "text-gray-800" : "text-white"}
      `}
      >
        {item.title}
      </h3>

      <p
        className={`
        leading-relaxed mb-4
        ${item.isSpecial ? "text-gray-600" : "text-white-custom"}
      `}
      >
        {item.description}
      </p>

      {item.buttonText && (
        <a
          href={item.buttonLink || "#"}
          className="inline-block bg-blue text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
        >
          {item.buttonText}
        </a>
      )}
    </div>
  );
};

const TimelineSection: React.FC<TimelineSectionProps> = ({
  title = (
    <span>
      Où en est le <span className="svg_background">refuge</span> ?
    </span>
  ),
  description = "Le refuge se construit petit à petit, avec l'aide de tous. Voici les grandes étapes de notre aventure.",
  supportButtonText = "Soutenir le refuge",
  supportButtonLink = "/don",
  items,
  className = "",
}) => {
  return (
    <section className={`bg-orange-50 py-16 px-5 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <a
            href={supportButtonLink}
            className="inline-block border-2 border-gray-400 text-gray-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            {supportButtonText}
          </a>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full">
            {items.map((_, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-red rounded-full -translate-x-1/2"
                style={{
                  top: `${(index * 100) / (items.length - 1)}%`,
                  transform: "translateX(-50%) translateY(-50%)",
                }}
              ></div>
            ))}
          </div>

          <div className="space-y-16 md:space-y-24">
            {items.map((item, index) => (
              <div key={item.id} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:flex md:justify-end">
                        <TimelineCard item={item} position="left" />
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div className="md:flex md:justify-start">
                        <TimelineCard item={item} position="right" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
