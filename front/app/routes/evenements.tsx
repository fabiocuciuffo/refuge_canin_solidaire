import Banner from "../components/Banner";

export default function Adoptions() {
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
    </main>
  );
}
