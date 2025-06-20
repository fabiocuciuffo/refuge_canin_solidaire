import React, { useState } from "react";

export function BenevolatForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [role, setRole] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [motivation, setMotivation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!nom || !prenom || !role || !adresse || !email || !motivation) {
      setMessage({
        type: "error",
        text: "Tous les champs sont requis.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({
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
      formData.append("adresse", adresse);
      formData.append("role", role);
      formData.append("email", email);
      formData.append("motivation", motivation);

      const response = await fetch("/api/submit-benevolat", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage({
          type: "success",
          text: result.message,
        });
        setNom("");
        setPrenom("");
        setRole("");
        setAdresse("");
        setEmail("");
        setMotivation("");
      } else {
        setMessage({
          type: "error",
          text: result.error || "Une erreur est survenue.",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      setMessage({
        type: "error",
        text: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-8 mt-8">
      <div className="mx-auto px-6">
        <div className="flex items-stretch gap-10 lg:gap-16 max-h-[80vh]">
          <div className="flex-1 flex items-center justify-center bg-yellow rounded-2xl">
            <img
              src="images/chien-benevole.png"
              alt="Bénévole avec un chien"
              className="w-full h-full object-cover rounded-xl min-h-[600px]"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h2 className="title3 font-bold text-gray-800 mb-6">
              Demande de Bénévolat
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Rejoignez notre équipe de bénévoles et aidez-nous à faire la
              différence.
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
                    Rôle <span className="text-red">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Choisir un rôle</option>
                    <option value="Bénévoles sur le terrain">
                      Bénévoles sur le terrain
                    </option>
                    <option value="Bénévoles créatifs et communicants">
                      Bénévoles créatifs et communicants
                    </option>
                    <option value="Bénévoles pour la logistique et les événements">
                      Bénévoles pour la logistique et les événements
                    </option>
                    <option value="Bénévoles « soutien humain »">
                      Bénévoles « soutien humain »
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-regular font-medium text-gray-700 mb-2">
                  Adresse <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Votre adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-regular font-medium text-gray-700 mb-2">
                  Motivations <span className="text-red">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="Dites-nous pourquoi vous voulez devenir bénévole..."
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue hover:bg-blue text-white font-semibold py-3 px-8 rounded-lg transition duration-300 self-start"
              >
                {loading ? "Envoi..." : "Devenir Bénévole"}
              </button>

              {message.text && (
                <div
                  className={`mt-4 p-4 rounded-lg font-medium ${
                    message.type === "success"
                      ? "bg-green text-green border-green"
                      : "bg-red text-red border border-red"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
