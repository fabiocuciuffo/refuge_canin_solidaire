import React, { useState } from "react";

export function ContactForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    type: "",
    text: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseMessage({ type: "", text: "" });

    if (!nom || !prenom || !email || !message) {
      setResponseMessage({
        type: "error",
        text: "Les champs marqués d'un * sont requis.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setResponseMessage({
        type: "error",
        text: "Veuillez saisir une adresse email valide.",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("prenom", prenom);
      formData.append("email", email);
      formData.append("telephone", telephone);
      formData.append("message", message);

      const response = await fetch("/api/submit-contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setResponseMessage({
          type: "success",
          text: result.message,
        });
        setNom("");
        setPrenom("");
        setEmail("");
        setTelephone("");
        setMessage("");
      } else {
        setResponseMessage({
          type: "error",
          text: result.error || "Une erreur est survenue.",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      setResponseMessage({
        type: "error",
        text: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-8">
      <div className="mx-auto px-6">
        <div className="flex items-stretch gap-10 lg:gap-16 max-h-[80vh]">
          <div className="flex-1 flex flex-col">
            <h2 className="title3 font-bold text-gray-800 mb-6">
              Laissez-nous un message
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Envoyez nous un message si vous avez des requêtes supplémentaires.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-regular font-medium text-gray-700 mb-2">
                    Prénom <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-regular font-medium text-gray-700 mb-2">
                    Nom <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="Votre nom"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-regular font-medium text-gray-700 mb-2">
                    Email <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-regular font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg "
                    placeholder="06 12 34 56 78"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-regular font-medium text-gray-700 mb-2">
                  Message <span className="text-red">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="Votre message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue text-white font-semibold py-3 px-8 rounded-lg transition duration-300 self-start"
              >
                {loading ? "Envoi..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          <div className="flex-1 flex items-center justify-center bg-yellow rounded-2xl">
            <img
              src="images/dog-contact.png"
              alt="Chien du refuge"
              className="w-full h-full object-cover rounded-xl min-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
