import { ContactForm } from "~/components/ContactForm";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white gap-8">
      <ContactForm />
      <section className="p-8 mb-8">
        <div className="mx-auto px-6">
          <div className="flex items-stretch gap-10 lg:gap-16 max-h-[60vh]">
            <div className="flex-1 flex items-center justify-center bg-yellow rounded-2xl">
              <img
                src="images/contact-image.png"
                alt="Chien du refuge"
                className="object-cover rounded-xl min-h-[600px]"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <h2 className="title3 font-bold text-center mb-6">
                Ou venez nous rencontrer !
              </h2>
              <span className="text-center title1 text-red"> - </span>
              <div className="flex items-center gap-8 mt-8 bg-beige p-6 rounded-2xl">
                <img src="/vector/phone-icon.png" alt="Numéro de téléphone" />
                <div>
                  <h3 className="title4">Téléphone</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    0556873668{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-8 bg-beige p-6 rounded-2xl">
                <img src="/vector/adress-icon.png" alt="Adresse" />
                <div>
                  <h3 className="title4">Adresse</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
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
