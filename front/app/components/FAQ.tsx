import React, { useState } from "react";
import type { FAQSectionProps, FAQItemProps, FAQItem } from "../types/types";
import Button from "./Button";

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Comment puis-je aider si je ne peux pas adopter ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae ris tristique posuere.",
  },
  {
    id: 2,
    question: "À quoi servent les dons ?",
    answer:
      "Les dons servent principalement à couvrir les frais vétérinaires, l'alimentation des animaux, l'entretien des installations et les soins quotidiens nécessaires au bien-être des chiens en attente d'adoption.",
  },
  {
    id: 3,
    question: "Peut-on venir visiter le refuge ?",
    answer:
      "Oui, les visites sont possibles sur rendez-vous. Nous organisons également des journées portes ouvertes régulières pour faire découvrir notre refuge et permettre aux familles de rencontrer nos pensionnaires.",
  },
  {
    id: 4,
    question: "Comment faire une demande d'adoption ?",
    answer:
      "Pour faire une demande d'adoption, vous pouvez nous contacter via notre formulaire en ligne ou directement par téléphone. Un entretien préalable sera organisé pour s'assurer de la compatibilité entre vous et l'animal choisi.",
  },
];

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 flex justify-between items-center text-left bg-beige hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
          {faq.question}
        </h3>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full bg-red-400 flex items-center justify-center transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden bg-beige transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <div className="px-6 ">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC<FAQSectionProps> = ({
  title = (
    <span>
      <span className="svg_background">Questions</span> les plus fréquentes
    </span>
  ),
  subtitle = "Lorem ipsum dolor sit amet consectetur. Sem et egestas non euismod libero turpis fringilla. Lorem ipsum dolor sit amet consectetur. Sem et egestas non euismod libero turpis fringilla.",
  faqs,
  contactButtonText = "Contactez-nous",
  contactButtonLink = "/contact",
  className = "",
  allowMultipleOpen = false,
}) => {
  const [openItems, setOpenItems] = useState<Set<string | number>>(new Set());

  const toggleItem = (id: string | number) => {
    const newOpenItems = new Set(openItems);

    if (allowMultipleOpen) {
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        newOpenItems.add(id);
      }
    } else {
      if (newOpenItems.has(id)) {
        newOpenItems.clear();
      } else {
        newOpenItems.clear();
        newOpenItems.add(id);
      }
    }

    setOpenItems(newOpenItems);
  };

  const renderTitle = () => {
    return (
      <>
        <span className="px-3 py-1 rounded-lg mr-3">{title}</span>
      </>
    );
  };

  return (
    <section className={`bg-gray-50 py-16 px-5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {renderTitle()}
            </h2>
            <p className="text-regular text-heavy text-gray-600 leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="mb-8">
              <h3 className="title5 md:text-3xl font-bold text-gray-800 mb-4">
                Vous n'avez pas trouvé votre réponse ?
              </h3>
              <Button
                link={contactButtonLink}
                className="bg-blue whitespace-nowrap w-fit! px-6 text-white"
              >
                {contactButtonText}
              </Button>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.has(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
