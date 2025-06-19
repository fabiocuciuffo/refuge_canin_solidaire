import type { MetaArgs } from "react-router";
import headerDog from "/assets/graphic-assets/header-dog.png";
import Banner from "../components/Banner";
import Triptique from "../components/Triptique";
import Button from "~/components/Button";
import Marquee from "../components/Marquee";
import InfoBanner from "~/components/InfoBanner";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
  const statistiquesData: [
    { title: string; description: string },
    { title: string; description: string },
    { title: string; description: string },
  ] = [
    {
      title: "- 5,8%",
      description:
        "Les adoptions sont en baisse constante, avec une diminution de 5,8 % en 2024 par rapport à 2023.",
    },
    {
      title: "+ 1,5%",
      description: "Nombre d’animaux abandonnés par rapport à 2022.",
    },
    {
      title: "= 1465",
      description:
        "En Gironde, la SPA de Bordeaux et du Sud-Ouest a accueilli 1 465 animaux abandonnés en 2022, un chiffre en constante augmentation.",
    },
  ];

  const faireUnDonData: [
    { title: string; subtitle?: string; description: string },
    { title: string; subtitle?: string; description: string },
    { title: string; subtitle?: string; description: string },
  ] = [
    {
      title: "01",
      subtitle: "Choisissez le type de don",
      description:
        "Ponctuel ou mensuel, petit ou grand, chaque don a un impact. Vous pouvez nous soutenir une fois, ou rejoindre notre cercle de donateurs réguliers pour accompagner le refuge dans la durée. Quel que soit votre choix, vous contribuez directement à offrir une seconde chance à nos chiens.",
    },
    {
      title: "02",
      subtitle: "Remplissez le formulaire",
      description:
        "En quelques clics, vous indiquez le montant, vos coordonnées et votre préférence de paiement. sNotre formulaire est entièrement sécurisé, et vous avez même la possibilité de dédier votre don à un chien en particulier ou à une action précise (sauvetage, soins, alimentation). sC’est simple, rapide, et totalement transparent.",
    },
    {
      title: "03",
      subtitle: "Valider et recevez votre reçu",
      description:
        "Une fois le paiement validé, vous recevez automatiquement un e-mail de confirmation avec votre reçu fiscal (si applicable). Mais surtout, vous faites désormais partie de celles et ceux qui rendent ce projet possible.",
    },
  ];

  return (
    <main>
      <Banner
        title={{
          text: "Le refuge canin qui",
          highlightedText: "sauve des vies",
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
        title="Quelques"
        highlight="statistiques clés"
        cards={statistiquesData}
        backgroundColor="bg-beige"
        cardBackgroundColor="bg-blue"
        titleColor="text-dark"
        cardTitleSize="title1"
        cardTitleColor="text-white-custom"
        cardTextColor="text-beige"
      />
      <div className="flex flex-col items-center justify-center gap-8 p-4">
        <Triptique
          title="Faire un don pour"
          highlight="sauver une vie"
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
      <Marquee
        titles={["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"]}
        speed={30}
        className="bg-blue text-white-custom"
      />
    </main>
  );
}
