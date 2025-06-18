import type { MetaArgs } from "react-router";
import headerDog from "~/../public/assets/graphic-assets/header-dog.png";
import Banner from "../components/Banner";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
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
    </main>
  );
}
