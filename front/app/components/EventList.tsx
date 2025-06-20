import React from "react";
import Button from "./Button";

export function EventsList() {
  const evenements = [
    {
      jour: "Samedi",
      date: "11",
      mois: "Juillet 2025",
      titre: "Balade au cœur de Bordeaux",
      description:
        "Une promenade collective pour sensibiliser à l'adoption responsable et recueillir des dons pour nos chiens en attente de famille.",
      badge: "Bordeaux",
      badgeColor: "bg-orange-400",
    },
    {
      jour: "Vendredi",
      date: "22",
      mois: "Juin 2025",
      titre: "Collecte de Noël pour nos compagnons",
      description:
        "Participez à notre grande collecte de fin d'année : nourriture, jouets, couvertures... chaque don fait la différence pour nos protégés !",
      badge: "Mérignac",
      badgeColor: "bg-red-400",
    },
    {
      jour: "Vendredi",
      date: "04",
      mois: "Juin 2025",
      titre: "Journée portes ouvertes du refuge",
      description:
        "Venez visiter le refuge, rencontrer nos animaux et en apprendre plus sur nos actions. L'adoption commence souvent par un regard !",
      badge: "Mérignac",
      badgeColor: "bg-red-400",
    },
    {
      jour: "Mardi",
      date: "02",
      mois: "Juin 2025",
      titre: "Rencontre bénévoles & adoptants",
      description:
        "Un moment de partage entre ceux qui donnent de leur temps et ceux qui souhaitent accueillir un chien dans leur vie.",
      badge: "Bordeaux",
      badgeColor: "bg-orange-400",
    },
    {
      jour: "Mercredi",
      date: "23",
      mois: "Mai 2025",
      titre: "Marché solidaire de printemps",
      description:
        "Stands beauté, ateliers, tombola et présence de nos chiens à l'adoption. Un événement festif pour soutenir nos actions.",
      badge: "Lormont",
      badgeColor: "bg-gray-400",
    },
    {
      jour: "Dimanche",
      date: "14",
      mois: "Mai 2025",
      titre: "Shooting photo avec votre chien",
      description:
        "Venez vous faire tirer le portrait avec votre compagnon ! Les bénéfices serviront à financer les soins vétérinaires du refuge.",
      badge: "Bordeaux",
      badgeColor: "bg-orange-400",
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Titre principal */}
        <div className="text-center mb-12">
          <h2 className="title3 lg:text-4xl font-bold text-gray-800 mb-4">
            Nos prochains{" "}
            <span className="svg_background px-2 py-1 rounded">événements</span>
          </h2>
          <p className="text-dark text-regular">
            Des moments pour se mobiliser, rencontrer, agir ensemble.
          </p>
        </div>

        {/* Liste des événements */}
        <div className="space-y-4">
          {evenements.map((event, index) => (
            <div
              key={index}
              className="bg-beige rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Date */}
              <div className="text-center min-w-[80px]">
                <div className="text-sm text-gray-500 font-medium">
                  {event.jour}
                </div>
                <div className="text-3xl font-bold text-gray-800">
                  {event.date}
                </div>
                <div className="text-sm text-gray-500">{event.mois}</div>
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="title6 font-bold text-dark mb-2">
                      {event.titre}
                    </h3>
                    <p className="text-dark text-small leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Badge et bouton */}
                  <div className="flex flex-col items-end gap-3">
                    <span
                      className={`${event.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {event.badge}
                    </span>
                    <Button className="bg-blue hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-small font-medium transition duration-300">
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
