import React from "react";
import VolunteerCard from "./InfosCard";
import type { VolunteerProfilesProps } from "../types/types";

const VolunteerProfilesSection: React.FC<VolunteerProfilesProps> = ({
  title = (
    <span className="title3">
      Les<span className="svg_background">profils</span>
      que nous recherchons
    </span>
  ),
  subtitle = "Il y a mille façons d'aider, chacun peut trouver sa place et faire la différence.",
  profiles,
  className = "",
}) => {
  return (
    <section className={`bg-orange-50 py-16 px-5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-regular text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid des cartes - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {profiles.map((profile) => (
            <VolunteerCard
              key={profile.id}
              profile={profile}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerProfilesSection;
