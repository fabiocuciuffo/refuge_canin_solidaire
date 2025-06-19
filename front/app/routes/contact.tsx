import { ContactForm } from "~/components/ContactForm";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <ContactForm />
      <section className="p-8 mb-8">
        <div className="mx-auto px-6">
          <div className="flex items-stretch gap-4 lg:gap-8 max-h-[60vh]">
            <div className="flex-1 flex items-center justify-center rounded-2xl">
              <img
                src="images/contact-image.png"
                alt="Chien du refuge"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h2 className="title3 font-bold text-center mb-6">
                Ou venez nous rencontrer !
              </h2>
              <span className="text-center title1 text-red"> - </span>
              <div className="flex items-center gap-4 mt-8 bg-beige p-4 rounded-2xl">
                <img src="/vector/phone-icon.png" alt="Numéro de téléphone" />
                <div>
                  <h3 className="title4">Téléphone</h3>
                  <a
                    className="text-regular text-dark leading-relaxed hover:text-blue"
                    href="tel:0556873668"
                  >
                    0556873668
                  </a>{" "}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8 bg-beige p-4 rounded-2xl">
                <img src="/vector/adress-icon.png" alt="Adresse" />
                <div>
                  <h3 className="title4">Adresse</h3>
                  <p className="text-regular text-dark leading-relaxed">
                    8 rue des toutous, 33000 Bordeaux FR{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
