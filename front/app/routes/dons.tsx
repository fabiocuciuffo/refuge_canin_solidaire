import { EventsList } from "~/components/EventList";
import Banner from "../components/Banner";
import type {} from "~/types/types";
import ActionsSection from "~/components/ActionsSections";
import Marquee from "~/components/Marquee";
import DonBanner from "~/components/DonBanner";
import FAQSection, { faqData } from "~/components/FAQ";

export default function Dons() {
  const donDatas = [
    {
      id: 1,
      image: "/images/dondata1.png",
      title: "D'investissement financiers",
      description:
        "Frais vétérinaires, L’alimentation, Entretiens du refuge, Projet d’aménagement",
      link: "/",
    },
    {
      id: 2,
      image: "/images/dondata2.png",
      title: "De materiel",
      description:
        "Croquettes de qualité (non périmées, non ouvertes), Gamelles, colliers, laisses, harnais, Couvertures, paniers, tapis lavables, Produits de soin (antiparasitaires, shampoings adaptés…)",
      link: "/",
    },
    {
      id: 3,
      image: "/images/dondata3.png",
      title: "De services et savoir-faire",
      description:
        "Croquettes de qualité (non périmées, non ouvertes), Gamelles, colliers, laisses, harnais, Couvertures, paniers, tapis lavables, Produits de soin (antiparasitaires, shampoings adaptés…)",
      link: "/",
    },
  ];

  const importantDatas = [
    {
      id: 1,
      image: "/images/action-don1.png",
      title: "Ils nous aident à financer le refuge et les soins essentiels",
      description:
        "Chaque don permet de couvrir les frais vétérinaires, l’alimentation des chiens, et les travaux nécessaires à la construction du refuge. C’est grâce à vous que ce projet prend forme, jour après jour. (Ex. : 20 € = 2 jours de croquettes pour un chien)",
      link: "/",
    },
    {
      id: 2,
      image: "/images/action-don2.png",
      title: "Il permet d'offrir du matériel utile et adapté",
      description:
        "Couvertures, harnais, produits de soin, jouets solides ou encore matériel de bricolage. Vos dons matériels sont essentiels. En attendant l’ouverture du refuge, nous les redistribuons à d’autres associations qui en ont besoin.",
      link: "/",
    },
    {
      id: 3,
      image: "/images/action-don3.png",
      title: "Ils donnent du sens à vos savoirs-faire",
      description:
        "Vous êtes photographe, vétérinaire, éducateur, bricoleur, ou tout simplement motivé ? Votre temps et vos compétences peuvent avoir un impact concret : aujourd’hui pour préparer le projet, demain sur le terrain avec nous.",
      link: "/",
    },
  ];

  return (
    <main>
      <Banner
        title={{
          text: (
            <span className="text-left">
              Tous nos{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                événements{" "}
              </span>
              solidaires
            </span>
          ),
        }}
        description="Participez à nos événements: collectes, balades, rencontres, journées d’information… Chaque présence compte, chaque geste fait avancer notre projet de refuge. Venez en famille, entre amis ou en solo, vous serez toujours les bienvenus !"
        button={{ text: "Contactez le refuge", href: "#form" }}
        image={{
          src: "/images/Group53.png",
          alt: "Un chien heureux au refuge",
        }}
      />
      <ActionsSection
        actions={donDatas}
        title={
          <span>
            De quoi avons nous <span className="svg_background">besoin</span> ?
          </span>
        }
        containerClassName="bg-beige p-8 rounded-2xl overflow-hidden"
        className="flex flex-col justify-center"
        titleClassName="text-left"
        subtitle="Le refuge accepte toute forme de dons ! Actuellement les dons financiers nous aident principalement pour la construction du refuge, les dons matériels sont dispatcher auprès d’autres associations, plus tard on lancera un chantier solidaire pour construction du refuge. "
      />
      <Marquee
        titles={["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"]}
        speed={30}
        className="bg-blue text-white-custom"
      />
      <ActionsSection
        actions={importantDatas}
        title={
          <span>
            Pourquoi votre <span className="svg_background">don</span> est-il
            important
          </span>
        }
        containerClassName="p-8 rounded-2xl overflow-hidden"
        className="flex flex-col justify-center"
        titleClassName="text-left"
        subtitle="Le refuge accepte toute forme de dons ! Actuellement les dons financiers nous aident principalement pour la construction du refuge, les dons matériels sont dispatcher auprès d’autres associations, plus tard on lancera un chantier solidaire pour construction du refuge. "
      />
      <DonBanner />
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
