import Banner from "../components/Banner";

export default function Adoptions() {
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
    </main>
  );
}
