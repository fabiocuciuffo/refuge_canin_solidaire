import React from "react";
import Button from "./Button";

export function BenevolatFAQ() {
  const faqs = [
    {
      number: "01",
      title: "Aider concrètement, là où ça compte vraiment",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam purus sit scelerisque posuere",
    },
    {
      number: "02",
      title: "Rejoindre une aventure collective et solidaire",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam purus sit scelerisque posuere",
    },
    {
      number: "03",
      title: "Offrir du temps et recevoir bien plus",
      description:
        "Lorem ipsum dolor sit amet consectetur. Quam purus sit scelerisque posuere",
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="mx-auto px-6">
        <div className="flex items-center gap-16 lg:gap-20">
          {/* Image à gauche */}
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="images/refuge-infoBanner.png"
                alt="Bénévole avec un chien du refuge"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-yellow rounded-2xl p-2 inline-block mb-8">
              <h2 className="title3 lg:text-3xl font-bold text-black px-4 py-2">
                <span className="svg_background">Pourquoi</span> devenir
                bénévole?
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 bg-beige rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="svg_background_red text-white w-18 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {faq.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold title5 text-gray-800 mb-2">
                      {faq.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-blue hover:bg-blu text-white max-w-52 font-semibold py-3 px-8 rounded-2xl transition duration-300">
                Devenir bénévole
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
