import React from "react";
import type { ValuesSectionProps, ValueItem } from "../types/types";

const ValueCard: React.FC<{ value: ValueItem }> = ({ value }) => {
  return (
    <div className="bg-orange-50 rounded-3xl p-4">
      <div className="title2 md:title3 font-bold text-red mb-4">
        {value.number}
      </div>
      <h3 className="title4 font-bold text-dark mb-4">{value.title}</h3>
      <p className="text-regular text-dark leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

const ValuesSection: React.FC<ValuesSectionProps> = ({
  title = (
    <span>
      Nos <span className="text-yellow">valeurs</span>
    </span>
  ),
  subtitle = "Au refuge, chaque action est guidée par des valeurs fortes",
  description = "Elles sont le cœur de notre engagement, pour les chiens comme pour les humains.",
  values,
  className = "",
}) => {
  const renderTitle = () => {
    return <span className="title3 px-3 py-1 rounded-lg">{title}</span>;
  };

  return (
    <section className={`bg-white py-4 px-5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {renderTitle()}
          </h2>
          <div className="max-w-2xl">
            <p className="text-regular text-dark leading-relaxed mb-2">
              {subtitle}
            </p>
            <p className="text-regular text-dark leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
