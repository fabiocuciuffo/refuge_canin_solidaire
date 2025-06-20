import ActionsSection from "~/components/actionsSections";
import Banner from "../components/Banner";
import { BenevolatForm } from "~/components/BenevolatSubmitForm";
import type { VolunteerProfile } from "../types/types";
import VolunteerProfilesSection from "~/components/VolontaireProfileSection";
import InfoBanner from "~/components/InfoBanner";
import Marquee from "~/components/Marquee";
import FAQSection, { faqData } from "~/components/FAQ";
import { BenevolatFAQ } from "~/components/BenevoleFAQ";

export default function Adoptions() {
  const actionsData = [
    {
      id: 1,
      image: "/images/action-don1.png",
      title: "Aider",
      description:
        "Chaque don permet de couvrir les frais vétérinaires, l’alimentation des chiens, et les travaux nécessaires à la construction du refuge. C’est grâce à vous que ce projet prend forme, jour après jour. (Ex. : 20€ = 2 jours de croquettes pour un chien)",
      link: "/",
    },
    {
      id: 2,
      image: "/images/action-don2.png",
      title: "Soigner",
      description:
        "Couvertures, harnais, produits de soin, jouets solides ou encore matériel de bricolage. Vos dons matériels sont essentiels. En attendant l’ouverture du refuge, nous les redistribuons à d’autres associations qui en ont besoin.",
      link: "/",
    },
    {
      id: 3,
      image: "/images/action-don3.png",
      title: "Éduquer",
      description:
        "Vous êtes photographe, vétérinaire, éducateur, bricoleur, ou tout simplement motivé ? Votre temps et vos compétences peuvent avoir un impact concret : aujourd’hui pour préparer le projet, demain sur le terrain avec nous.",
      link: "/adoption",
    },
  ];

  const volunteerProfiles: VolunteerProfile[] = [
    {
      id: 1,
      title: "Bénévoles au refuge (auprès des chiens)",
      tasks: [
        "Promeneurs : pour offrir des balades régulières et enrichissantes",
        "Personnes patientes : Pour sociabiliser les chiens les plus réservés",
        "Aide aux soins de base : nourrissage, surveillance, nettoyage",
        "Bricoleurs : pour l'entretien des lieux et l'aménagement du futur refuge",
      ],
    },
    {
      id: 2,
      title: "Bénévoles créatifs & communicants",
      tasks: [
        "Photographes / vidéastes : pour mettre en valeur nos chiens à l'adoption",
        "Community managers / graphistes : pour nos réseaux sociaux",
        "Rédacteurs : pour les fiches d'adoption ou les articles de blog",
      ],
    },
    {
      id: 3,
      title: "Bénévoles logistique & évènements",
      tasks: [
        "Aide à l'organisation de collectes de dons (croquettes, matériel...)",
        "Présence sur les stands lors de marchés, brocantes, journées solidaires",
        "Aide au transport de matériel ou d'animaux (permis adapté si nécessaire)",
      ],
    },
    {
      id: 4,
      title: "Bénévoles « soutien humain »",
      tasks: [
        "Accueil du public, des adoptants et des visiteurs",
        "Aide administrative : mails, gestion, relations partenaires",
        "Soutien moral : pour les chiens, mais aussi pour les humains",
      ],
    },
  ];

  return (
    <main>
      <Banner
        title={{
          text: (
            <span>
              Vôtre{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                aide{" "}
              </span>
              peut tout changer pour eux !
            </span>
          ),
        }}
        description="Rejoignez notre équipe de bénévoles et faites une réelle différence dans la vie de nos chiens."
        button={{ text: "Contactez le refuge", href: "#form" }}
        image={{
          src: "/images/refuge-infoBanner.png",
          alt: "Un chien heureux au refuge",
        }}
      />
      <BenevolatFAQ />
      <div className="bg-beige">
        <ActionsSection
          actions={actionsData}
          title={
            <span>
              Les principales<span className="svg_background">missions</span>
            </span>
          }
          className="flex flex-col justify-center"
          titleClassName="text-center"
          subtitle="Au Refuge Canin Solidaire, chaque adoption s’appuie sur trois piliers : éco-responsabilité, solidarité et pédagogie."
        />
        <VolunteerProfilesSection profiles={volunteerProfiles} />
      </div>

      <InfoBanner
        image={{
          src: "/images/refuge-infoBanner.png",
          alt: "Un chien heureux au refuge",
        }}
        title={
          <span>
            <span className="svg_background">Qualités</span> recherchées
          </span>
        }
        description="Ce qui compte vraiment pour aider au refuge. Des personnes fiables, bienveillantes, prêtes à s’impliquer dans un projet solidaire, même ponctuellement. Peu importe votre parcours : chacun peut apporter quelque chose de précieux. "
        imagePosition="right"
      />
      <Marquee
        titles={["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"]}
        speed={30}
        className="bg-blue text-white-custom"
      />
      <BenevolatForm />
      <div className="p-8">
        <FAQSection faqs={faqData} allowMultipleOpen={false} />
      </div>
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
