import type { MetaArgs } from "react-router";
import headerDog from "~/../public/assets/graphic-assets/header-dog.png";
import Banner from "../components/Banner";
import Triptique from "../components/Triptique";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
  const triptiqueData: [
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
        cards={triptiqueData}
        backgroundColor="bg-beige"
        cardBackgroundColor="bg-blue"
        titleColor="text-dark"
        cardTitleSize="title1"
        cardTitleColor="text-white-custom"
        cardTextColor="text-beige"
      />
    </main>
  );
}
