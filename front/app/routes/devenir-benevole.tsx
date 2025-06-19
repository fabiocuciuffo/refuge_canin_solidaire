import Banner from "../components/Banner";
import { BenevolatForm } from "~/components/BenevolatSubmitForm";

export default function Adoptions() {
  return (
    <main className="top-0">
      <Banner
        title={{
          text: (
            <span>
              Vôtre{" "}
              <span className="svg_background rounded-[6px] px-2 font-bold inline-block">
                aide{" "}
              </span>
              peut tout changer !
            </span>
          ),
        }}
        description="Rejoignez notre équipe de bénévoles et faites une réelle différence dans la vie de nos chiens."
        button={{ text: "Contactez le refuge", href: "#form" }}
        image={{
          src: "/images/Group8.png",
          alt: "Un chien heureux au refuge",
        }}
      />
      <div className="flex flex-col items-center justify-center gap-8 p-4">
        <BenevolatForm />
      </div>
    </main>
  );
}
