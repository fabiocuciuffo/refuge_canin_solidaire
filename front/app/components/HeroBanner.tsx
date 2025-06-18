import headerDog from "~/../public/assets/graphic-assets/header-dog.png";

export default function HeroBanner() {
  return (
    <section className="bg-blue rounded-[20px] px-6 pt-8 pb-0 text-white max-w-[400px] mx-auto mt-6 relative overflow-hidden">
      <div>
        <h1 className="text-[2.2rem] font-bold mb-3 leading-tight">
          Le refuge canin
          <br />
          qui{" "}
          <span className="svg_background text-white rounded-[6px] px-2 font-bold inline-block">
            sauve des vies
          </span>
        </h1>
        <p className="text-[1.1rem] mb-6 text-white">
          Refuge Canin Solidaire réinvente les refuges en adoptant une approche
          solidaire, éducative et éco-responsable, redéfinissant ainsi le rôle
          d’un refuge pour chiens.
        </p>
        <button className="bg-white text-[#222] rounded-[12px] py-4 w-full text-[1.2rem] font-bold cursor-pointer mb-6">
          <a href="">Faire un don</a>
        </button>
      </div>
      <div className="relative mt-4 text-center">
        <img
          src={headerDog}
          alt="Chien adorable"
          className="mt-12 w-[100%] max-w-[340px] rounded-b-[32px] z-10 relative mx-auto"
        />
      </div>
    </section>
  );
}
