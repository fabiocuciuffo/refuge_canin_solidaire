import React from "react";
import type { ActionCardProps, ActionsSectionProps } from "../types/types";

const ActionCard: React.FC<ActionCardProps> = ({
  image,
  title,
  description,
  link = "#",
  alt,
  className = "",
}) => (
  <div
    className={` ${className} rounded-lg shadow-sm overflow-hidden transition-shadow duration-300 text-center`}
  >
    <div className="aspect-w-16 aspect-h-12 bg-gray-200">
      <img src={image} alt={alt} className="w-full h-64 object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <a
        href={link}
        className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
      >
        En savoir plus
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </a>
    </div>
  </div>
);

const ActionsSection: React.FC<ActionsSectionProps> = ({
  title = "Nos actions",
  subtitle = "En parallèle de sa création, le refuge a déjà initié plusieurs actions concrètes : organisation d'événements, sauvetages d'animaux en détresse et soutien à d'autres associations.",
  actions,
  className = "",
  titleClassName = "",
  highlightWordIndex = 1,
}) => {
  return (
    <section className={`py-16 px-5`}>
      <div className=" mx-auto">
        <div className={`mb-12 ${className}`}>
          <h2 className={`title3 md:title4 text-dark mb-6 ${titleClassName}`}>
            {title}
          </h2>
          <p
            className={`text-regular text-gray-600 leading-relaxed ${titleClassName}`}
          >
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <ActionCard
              key={action.id || index}
              image={action.image}
              title={action.title}
              description={action.description}
              link={action.link}
              alt={action.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;
