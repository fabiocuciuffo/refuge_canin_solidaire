import Banner from "../components/Banner";
import InfoBanner from "~/components/InfoBanner";
import Triptique from "~/components/Triptique";
import Button from "~/components/Button";
import ActionsSection from "~/components/actionsSections";
import Marquee from "~/components/Marquee";
import type { ReactElement } from "react";
import type { ActionItem } from "~/types/types";
import FAQSection from "~/components/FAQ";
import { faqData } from "~/components/FAQ";

export default function Adoptions() {
  const cinqCartesData: [
    {
      title: ReactElement<HTMLSpanElement>;
      subtitle?: string;
      description: string;
    },
    {
      title: ReactElement<HTMLSpanElement>;
      subtitle?: string;
      description: string;
    },
    {
      title: ReactElement<HTMLSpanElement>;
      subtitle?: string;
      description: string;
    },
    {
      title: ReactElement<HTMLSpanElement>;
      subtitle?: string;
      description: string;
    },
    {
      title: ReactElement<HTMLSpanElement>;
      subtitle?: string;
      description: string;
    },
  ] = [
    {
      title: <span>01</span>,
      subtitle: "Faites le test en ligne",
      description:
        "En quelques clics, complétez notre formulaire sécurisé : habitudes de vie, composition du foyer, attentes envers votre futur compagnon. Ces informations demeurent confidentielles ; elles nous aident simplement à proposer un match harmonieux entre votre quotidien et celui d’un chien qui a besoin d’une seconde chance.",
    },
    {
      title: <span>02</span>,
      subtitle: "Découvrez nos pensionnaires",
      description:
        "Accédez ensuite à la galerie des pensionnaires : fiches détaillées, photos, anecdotes et niveaux d’énergie. Vous pourrez filtrer par taille, tempérament ou besoins et même enregistrer vos favoris.",
    },
    {
      title: <span>03</span>,
      subtitle: "Prennez rendez-vous au refuge",
      description:
        "Un chien vous fait vibrer ? Planifiez en ligne la date de votre visite. Notre équipe confirme rapidement et répond d’ores et déjà à vos premières questions. Nous préparons les espaces détente pour que la rencontre se déroule au calme, dans le respect du bien-être de nos protégés.",
    },
    {
      title: <span>04</span>,
      subtitle: "Rencontrez votre futur compagnon",
      description:
        "En quelques clics, complétez notre formulaire sécurisé : habitudes de vie, composition du foyer, attentes envers votre futur compagnon. Ces informations demeurent confidentielles ; elles nous aident simplement à proposer un match harmonieux entre votre quotidien et celui d’un chien qui a besoin d’une seconde chance.",
    },
    {
      title: <span>05</span>,
      subtitle: "Démarrer une nouvelle aventure",
      description:
        "Lorsque tout le monde est conquis, place à l’adoption définitive : signature du contrat, remise du carnet de santé, kit éco-responsable et numéro d’assistance. Vous repartez avec un compagnon… et l’assurance de pouvoir compter sur notre soutien à vie, pour chaque étape de votre nouvelle histoire.",
    },
  ];

  const actionsData: ActionItem[] = [
    {
      id: 1,
      image: "/images/event-action.png",
      title: "Événements solidaires",
      description:
        "Nous organisons ponctuellement des événements caritatifs pour mêler différentes passions et œuvrer pour la cause animale.",
      link: "/evenements",
      alt: "Affiche événement Holi Carrosse",
    },
    {
      id: 2,
      image: "/images/layko-action.png",
      title: "Sauvetage de Layko",
      description:
        "Condamné à l'euthanasie, Layko a été sauvé in extremis grâce à notre mobilisation.",
      link: "/sauvetages/layko",
      alt: "Photo de Layko, chien sauvé",
    },
    {
      id: 3,
      image: "/images/benevoles-action.png",
      title: "Soutien aux associations",
      description:
        "Nous intervenons en cas d'urgence : signalements de maltraitance, sauvetages et dons (notamment de croquettes) à ceux qui en ont besoin.",
      link: "/partenaires",
      alt: "Équipe de bénévoles lors d'un événement",
    },
  ];

  return (
    <main className="top-0">
      <Banner
        title={{
          text: (
            <span>
              C'est bientôt l'heure de se{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                rencontrer
              </span>{" "}
            </span>
          ),
        }}
        description="Le refuge se prépare doucement à accueillir ses premiers pensionnaires. En attendant, chaque don nous aide à créer ce lieu de rencontre entre humains et chiens en quête d’une nouvelle vie."
        button={{ text: "Voir les animaux", href: "/adoption" }}
        image={{
          src: "/images/Group30.png",
          alt: "Un chien heureux au refuge",
        }}
      />

      <InfoBanner
        image={{
          src: "/images/refuge-infoBanner.png",
          alt: "Un chien heureux au refuge",
        }}
        title={
          <span>
            Pourquoi <span className="svg_background">adopter</span> chez nous
            ?{" "}
          </span>
        }
        description="Adopter au Refuge Canin Solidaire, c’est donner (et recevoir) bien plus qu’une simple compagnie : c’est rejoindre une communauté qui place respect, entraide et écologie au cœur de chaque histoire. Ensemble, nous offrons à ces chiens une nouvelle chance… et à vous, un lien sincère qui grandit jour après jour."
        button={{ text: "Nos chiens à adopter", href: "/adoption" }}
        imagePosition="right"
      />

      <div className="flex flex-col items-center justify-center gap-8 p-4">
        <Triptique
          title={
            <span>
              Adoptez un chien,{" "}
              <span className="svg_background">sans tracas</span>
            </span>
          }
          subtitle="Au Refuge Canin Solidaire, chaque adoption s’appuie sur trois piliers : éco-responsabilité, solidarité et pédagogie. Ensemble, nous réinventons le refuge pour préserver la planète, cultiver l’entraide et accompagner chaque famille pas à pas, du premier clic au suivi post-adoption, afin de bâtir un duo durable et heureux."
          cards={cinqCartesData}
          backgroundColor=""
          cardBackgroundColor="bg-beige"
          titleColor="text-dark"
          cardTitleSize="title2"
          cardSubtitleeSize="title5"
          cardTitleColor="text-red"
          cardSubtitleColor="text-dark"
          cardTextColor="text-dark"
        />
        <Button
          className="bg-blue whitespace-nowrap w-fit! px-6 text-white"
          link=""
        >
          Votre texte de bouton
        </Button>
      </div>
      <Banner
        title={{
          text: (
            <span>
              Quel{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                chien{" "}
              </span>
              me correspond ?
            </span>
          ),
        }}
        description="Faites le test dès maintenant et trouvez le chien qui correspond réellement à vos habitudes et vos besoins."
        button={{ text: "Faire le test", href: "/adoption//test" }}
        button2={{ text: "Voir les animaux", href: "/adoption" }}
        image={{
          src: "/images/Group8.png",
          alt: "Un chien heureux au refuge",
        }}
      />

      <section className="bg-amber-50 py-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Vous n'êtes pas encore prêt à adopter?
            </h2>
            <div className="inline-block bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg text-3xl md:text-4xl font-bold">
              Parrainez !
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            Parrainer un chien, c'est devenir son soutien privilégié, en
            contribuant à ses besoins jusqu'à son adoption.
            <br />
            C'est un geste concret, plein de sens, même si vous ne pouvez pas
            l'accueillir chez vous.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mb-12 text-left">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Grâce à votre parrainage, vous contribuez à :
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Son alimentation, ses friandises et son confort
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Ses accessoires du quotidien (panier, jouets, harnais...)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Ses soins vétérinaires (vaccins, stérilisation, traitements)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Son bien-être global (éducation, socialisation,
                    enrichissement)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                En retour, vous recevrez :
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Des nouvelles régulières (photos, anecdotes...)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Un diplôme ou carte de parrain/marraine
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    La possibilité de le rencontrer ou de le promener (si vous
                    êtes local)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Une priorité d'information lors de son adoption
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Un petit cadeau de bienvenue (magnet, photo, sticker...)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Votre nom affiché sur sa fiche ou sur notre site
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Une lettre symbolique... écrite par le chien lui-même 🐕
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 font-bold text-xl mr-3">
                    •
                  </span>
                  <span className="text-gray-600 leading-relaxed">
                    Une réduction fiscale sur vos dons
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-medium px-10 py-4 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Parrainer à partir de 15€/mois
            </button>
          </div>
        </div>
      </section>

      <div>
        <ActionsSection
          actions={actionsData}
          title="Nos actions"
          subtitle="En parallèle de sa création, le refuge a déjà initié plusieurs actions concrètes."
        />
      </div>
      <Marquee
        titles={["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"]}
        speed={30}
        className="bg-blue text-white-custom"
      />
      <FAQSection faqs={faqData} allowMultipleOpen={false} />

      <Banner
        title={{
          text: (
            <span>
              Nous. avons{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                besoin{" "}
              </span>
              de votre aide{" "}
            </span>
          ),
        }}
        description="Refuge Canin Solidaire ouvre bientôt ses portes! Nous avons encore besoin de votre aide. Nous réinventons les refuges en adoptant une approche solidaire, éducative et éco-responsable. Soins bienveillants, sensibilisation communautaire et pratiques durables sont au cœur de cette initiative, redéfinissant ainsi le rôle d’un refuge pour chiens."
        button={{ text: "Soutenir le refuge", href: "/adoption" }}
        image={{
          src: "/images/Group57.png",
          alt: "Un chien heureux au refuge",
        }}
      />
    </main>
  );
}
