import PartnersSection from "~/components/partenaires";
import Banner from "../components/Banner";
import ValuesSection from "../components/Values";
import type {
  GalleryImage,
  PartnerItem,
  TimelineItem,
  ValueItem,
} from "../types/types";
import TimelineSection from "./Timeline";
import ActionsSection from "~/components/actionsSections";
import Marquee from "~/components/Marquee";
import GallerySection from "~/components/Gallery";

export default function Adoptions() {
  const valuesData: ValueItem[] = [
    {
      id: 1,
      number: "01",
      title: "Solidarité",
      description:
        "Parce que seul on va plus vite, mais ensemble on va plus loin : chaque action collective compte pour offrir une seconde chance aux chiens du refuge.",
    },
    {
      id: 2,
      number: "02",
      title: "Transparence",
      description:
        "Nous agissons avec honnêteté et clarté, pour bâtir une relation de confiance avec nos adoptants, bénévoles et partenaires.",
    },
    {
      id: 3,
      number: "03",
      title: "Bienveillance",
      description:
        "Nous plaçons l'écoute, la douceur et le respect au cœur de chaque relation, humaine comme animale.",
    },
    {
      id: 4,
      number: "04",
      title: "Respect",
      description:
        "Nous respectons l'animal, l'humain et la nature, et agissons chaque jour dans un esprit d'équilibre et de considération",
    },
  ];

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      year: "2024",
      title: "Partenaire initiaux engagés",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      year: "2024",
      title: "Statut associatif mis en place",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      year: "2025",
      title: "Lancement des premières actions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      year: "2025",
      title: "Recherche du terrain de financement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      year: "2025",
      title: "Plans en cours avec un architecte",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      year: "2026",
      title: "L'adoption de nos premiers chiens",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 7,
      year: "2026",
      title: "Objectif : agrandir le refuge",
      description:
        "Avec votre aide, nous pourrons agrandir le refuge et avoir davantage d'espace pour que nos toutous puissent s'amuser sans traces.",
      isSpecial: true,
      buttonText: "Faire un don",
      buttonLink: "/don",
    },
  ];

  const actionsData = [
    {
      id: 1,
      image: "/images/action-don1.png",
      title: "Ils nous aident à financer le refuge et les soins essentiels",
      description:
        "Chaque don permet de couvrir les frais vétérinaires, l’alimentation des chiens, et les travaux nécessaires à la construction du refuge. C’est grâce à vous que ce projet prend forme, jour après jour. (Ex. : 20€ = 2 jours de croquettes pour un chien)",
      link: "/",
    },
    {
      id: 2,
      image: "/images/action-don2.png",
      title: "Ils permettent d'offrir du materiel utile et adapté",
      description:
        "Couvertures, harnais, produits de soin, jouets solides ou encore matériel de bricolage. Vos dons matériels sont essentiels. En attendant l’ouverture du refuge, nous les redistribuons à d’autres associations qui en ont besoin.",
      link: "/",
    },
    {
      id: 3,
      image: "/images/action-don3.png",
      title: "Ils donnent du sens à vos talents et savoirs-faire",
      description:
        "Vous êtes photographe, vétérinaire, éducateur, bricoleur, ou tout simplement motivé ? Votre temps et vos compétences peuvent avoir un impact concret : aujourd’hui pour préparer le projet, demain sur le terrain avec nous.",
      link: "/adoption",
    },
  ];

  const partnersData: PartnerItem[] = [
    {
      id: 1,
      name: "My Pet Corner",
      logo: "/images/logos-partenaires/my-pet-corner-logo.png",
      website: "",
      alt: "My Pet Corner logo",
    },
    {
      id: 2,
      name: "Crea Paws",
      logo: "/images/logos-partenaires/crea-paws-logo.png",
      website: "",
      alt: "Crea Paws logo",
    },
    {
      id: 3,
      name: "Healthy Paws",
      logo: "/images/logos-partenaires/healthy-paws-logo.png",
      website: "",
      alt: "Healthy Paws logo",
    },
    {
      id: 4,
      name: "Wisdog",
      logo: "/images/logos-partenaires/wisdog-logo.png",
      website: "",
      alt: "Wisdog logo",
    },
    {
      id: 5,
      name: "La Caborun",
      logo: "/images/logos-partenaires/la-caborun-logo.png",
      website: "",
      alt: "La Caborun logo",
    },
    {
      id: 6,
      name: "Celine Accolas",
      logo: "/images/logos-partenaires/celine-accolas-logo.png",
      website: "",
      alt: "Celine Accolas logo",
    },
    {
      id: 7,
      name: "Gironde Département",
      logo: "/images/logos-partenaires/gironde-logo.png",
      website: "https://gironde.fr",
      alt: "Gironde Département logo",
    },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery/1.png",
      alt: "Équipe de bénévoles lors d'un événement caritatif",
      caption: "Nos bénévoles mobilisés",
    },
    {
      id: 2,
      src: "/images/gallery/2.png",
      alt: "Stand d'information du refuge",
      caption: "Stand d'information",
    },
    {
      id: 3,
      src: "/images/gallery/3.png",
      alt: "Chien adorable avec une casquette",
      caption: "Nos pensionnaires",
    },
    {
      id: 4,
      src: "/images/gallery/4.png",
      alt: "Bénévole prenant soin d'un chien",
      caption: "Soins et attention",
    },
    {
      id: 5,
      src: "/images/gallery/5.png",
      alt: "Chien avec panneau du refuge",
      caption: "Sensibilisation",
    },
    {
      id: 6,
      src: "/images/gallery/6.png",
      alt: "Grande équipe lors d'un événement",
      caption: "Événements solidaires",
    },
    {
      id: 7,
      src: "/images/gallery/7.png",
      alt: "Camionnette du refuge pour les sauvetages",
      caption: "Véhicule de sauvetage",
    },
  ];

  return (
    <main className="top-0">
      <Banner
        title={{
          text: (
            <span>
              Pour un{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                refuge{" "}
              </span>
              qui fait sens
            </span>
          ),
        }}
        description="Le refuge se prépare doucement à accueillir ses premiers pensionnaires. En attendant, chaque don nous aide à créer ce lieu de rencontre entre humains et chiens en quête d’une nouvelle vie."
        button={{ text: "Voir les animaux", href: "/adoption" }}
        image={{
          src: "/images/Group8.png",
          alt: "Un chien heureux au refuge",
        }}
      />

      <ValuesSection values={valuesData} />

      <TimelineSection items={timelineData} />

      <ActionsSection
        actions={actionsData}
        title={
          <span>
            Pourquoi vos <span className="svg_background">dons</span> sont
            importants ?{" "}
          </span>
        }
      />
      <Marquee
        titles={["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"]}
        speed={30}
        className="bg-blue text-white-custom"
      />

      <PartnersSection partners={partnersData} />

      <GallerySection images={galleryImages} />

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
