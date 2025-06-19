import React from "react";
import type { PartnersSectionProps, PartnerItem } from "../types/types";

const PartnerLogo: React.FC<{ partner: PartnerItem }> = ({ partner }) => {
  const logoContent = (
    <div className="flex items-center justify-center h-20 px-6 hover:scale-105 transition-transform duration-200">
      <img
        src={partner.logo}
        alt={partner.alt || partner.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {logoContent}
      </a>
    );
  }

  return logoContent;
};

const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Nos soutiens et partenaires de confiance",
  partners,
  className = "",
}) => {
  const highlightText = "soutiens et partenaires";
  return (
    <section className={`bg-white py-16 px-5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            {title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div key={partner.id} className="flex-shrink-0">
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
