import headerDog from "~/../public/assets/graphic-assets/header-dog.png";

export default function HeroBanner() {
  return (
    <section className="bg-blue rounded-[20px] m-4 pt-8 pb-0 text-white mt-6 relative flex flex-col justify-center">
      <div className="px-6">
        <h1 className="title1 font-bold mb-3 leading-tight">
          Le refuge canin
          <br />
          qui{" "}
          <span className="svg_background text-black rounded-[6px] px-2 font-bold inline-block">
            sauve des vies
          </span>
        </h1>
        <p className="text-regular font-bold mb-6 text-white">
          Refuge Canin Solidaire réinvente les refuges en adoptant une approche
          solidaire, éducative et éco-responsable, redéfinissant ainsi le rôle
          d'un refuge pour chiens.
        </p>
        <button className="bg-white text-[#222] rounded-[12px] py-4 md:w-full text-[1.2rem] font-bold cursor-pointer mb-6 w-full">
          <a href="">Faire un don</a>
        </button>
      </div>
      <div className="relative mt-4 flex justify-center">
        <img
          src={headerDog}
          alt="Chien adorable"
          loading="lazy"
          className="w-2xl mx-auto z-10 relative"
        />
      </div>
    </section>
  );
}
