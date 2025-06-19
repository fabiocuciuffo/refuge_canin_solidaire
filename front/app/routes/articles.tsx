import Banner from "~/components/Banner";

export const meta = () => {
  return [
    { title: "Refuge Canin Solidaire - Articles" },
    { name: "description", content: "Articles du Refuge Canin Solidaire" },
  ];
};

export default function Articles() {
  return (
    <main>
      <Banner
        title={{
          text: (
            <span>
              Nous avons{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                besoin{" "}
              </span>
              de vôtre aide !
            </span>
          ),
        }}
        description="Refuge Canin Solidaire ouvre bientôt ses portes! Nous avons encore besoin de votre aide. Nous réinventons les refuges en adoptant une approche solidaire, éducative et éco-responsable. Soins bienveillants, sensibilisation communautaire et pratiques durables sont au cœur de cette initiative, redéfinissant ainsi le rôle d’un refuge pour chiens."
        button={{ text: "Soutenir le refuge", href: "#form" }}
        image={{
          src: "/images/Group57.png",
          alt: "Un chien heureux au refuge",
        }}
      />
    </main>
  );
}
