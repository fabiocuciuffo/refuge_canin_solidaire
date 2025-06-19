import InfoBanner from "~/components/InfoBanner";
import Banner from "../components/Banner";
import Triptique from "~/components/Triptique";
import Button from "~/components/Button";
import type { ReactElement } from "react";

export default function Adoptions() {
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
    </main>
  );
}
