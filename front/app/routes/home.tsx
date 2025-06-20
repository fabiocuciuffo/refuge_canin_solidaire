import type { MetaArgs } from "react-router";
import headerDog from "/images/header-dog.png";
import Banner from "../components/Banner";
import Triptique from "../components/Triptique";
import Button from "~/components/Button";
import Marquee from "../components/Marquee";
import InfoBanner from "~/components/InfoBanner";
import ImageBanner from "~/components/ImageBanner";
import DonBanner from "~/components/DonBanner";
import type { ReactElement } from "react";
import FAQSection, { faqData } from "~/components/FAQ";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
  const statistiquesData: [
    { title: ReactElement<HTMLSpanElement>; description: string },
    { title: ReactElement<HTMLSpanElement>; description: string },
    { title: ReactElement<HTMLSpanElement>; description: string },
  ] = [
    {
      title: (
        <span>
          <span className="text-yellow">-</span> 5,8%
        </span>
      ),
      description:
        "Les adoptions sont en baisse constante, avec une diminution de 5,8 % en 2024 par rapport à 2023.",
    },
    {
      title: (
        <span>
          <span className="text-yellow">+</span> 1,5%
        </span>
      ),
      description: "Nombre d’animaux abandonnés par rapport à 2022.",
    },
    {
      title: (
        <span>
          <span className="text-yellow">=</span> 1465
        </span>
      ),
      description:
        "En Gironde, la SPA de Bordeaux et du Sud-Ouest a accueilli 1 465 animaux abandonnés en 2022, un chiffre en constante augmentation.",
    },
  ];

  const faireUnDonData: [
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
      subtitle: "Choisissez le type de don",
      description:
        "Ponctuel ou mensuel, petit ou grand, chaque don a un impact. Vous pouvez nous soutenir une fois, ou rejoindre notre cercle de donateurs réguliers pour accompagner le refuge dans la durée. Quel que soit votre choix, vous contribuez directement à offrir une seconde chance à nos chiens.",
    },
    {
      title: <span>02</span>,
      subtitle: "Remplissez le formulaire",
      description:
        "En quelques clics, vous indiquez le montant, vos coordonnées et votre préférence de paiement. sNotre formulaire est entièrement sécurisé, et vous avez même la possibilité de dédier votre don à un chien en particulier ou à une action précise (sauvetage, soins, alimentation). C’est simple, rapide, et totalement transparent.",
    },
    {
      title: <span>03</span>,
      subtitle: "Valider et recevez votre reçu",
      description:
        "Une fois le paiement validé, vous recevez automatiquement un e-mail de confirmation avec votre reçu fiscal (si applicable). Mais surtout, vous faites désormais partie de celles et ceux qui rendent ce projet possible.",
    },
  ];

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

  return (
    <main>
      <Banner
        title={{
          text: (
            <span>
              Un refuge canin qui{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                sauve des vies
              </span>
            </span>
          ),
        }}
        description="Refuge Canin Solidaire réinvente les refuges en adoptant une approche solidaire, éducative et éco-responsable, redéfinissant ainsi le rôle d'un refuge pour chiens."
        button={{
          text: "Faire un don",
          href: "",
        }}
        image={{
          src: headerDog,
          alt: "Chien adorable",
        }}
      />
      <Triptique
        title={
          <span>
            Quelques <span className="svg_background">statistiques clés</span>
          </span>
        }
        cards={statistiquesData}
        backgroundColor="bg-beige"
        cardBackgroundColor="bg-blue"
        titleColor="text-dark"
        cardTitleSize="title1"
        cardTitleColor="text-white-custom"
        cardTextColor="text-beige"
      />
      <DonBanner />
      <div className="flex flex-col items-center justify-center gap-8 p-4">
        <Triptique
          title={
            <span>
              Faire un don pour{" "}
              <span className="svg_background">sauver une vie</span>
            </span>
          }
          cards={faireUnDonData}
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
          Faire un don
        </Button>
      </div>
      <InfoBanner
        image={{
          src: "/images/layko.png",
          alt: "Layko",
          className: " h-34 md:h-full",
        }}
        title={
          <span>
            <span className="svg_background">Layko a été sauvé</span> grâce à
            vous
          </span>
        }
        description="Récupéré par la SPA, il attendait… mais personne ne s’intéressait à lui.
Placé dans le couloir de la mort, son sort était presque scellé. On est intervenus juste à temps. L’asso l’a pris sous son aile, et on lui a promis une autre vie. Aujourd’hui, Layko coule des jours heureux à Grenoble, entouré d’amour depuis plus de 2 ans."
        button={{
          text: "En savoir plus",
          href: "",
          className: "bg-blue text-white-custom",
        }}
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
      <Marquee
        titles={["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"]}
        speed={30}
        className="bg-blue text-white-custom"
      />
      <ImageBanner
        title={
          <span>
            Découvrez le{" "}
            <span className="svg_background">refuge</span>
          </span>
        }
        description="Le Refuge Canin Solidaire est né d’une conviction forte : offrir une seconde chance aux chiens blessés par la vie, en les accompagnant avec respect, douceur et engagement."
        button={{
          text: "En savoir plus",
          href: "",
        }}
        image={{
          src: "/images/black-dogo.png",
          alt: "Chien noir adorable",
        }}
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
