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
    <form
      onSubmit={handleSubmit}
      className="contact-form max-w-lg mx-auto bg-gradient-to-br shadow-2xl rounded-3xl p-8 flex flex-col gap-4 justify-center text-center border-4 border-white"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-blue-700 drop-shadow-lg tracking-wide">
        Nous Contacter
      </h2>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">
          Nom <span className="text-red-500">*</span>
        </label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          placeholder="Votre nom"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">
          Prénom <span className="text-red-500">*</span>
        </label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
          placeholder="Votre prénom"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Votre email"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Téléphone</label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="Votre numéro de téléphone (optionnel)"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="border-2 border-blue-300 rounded-2xl px-3 py-2 min-h-[120px] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg resize-none text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Votre message..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r hover:to-blue-300 text-blue-700 font-extrabold py-4 rounded-full shadow-lg transition-all duration-300 text-lg tracking-wider hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi..." : "Envoyer le Message"}
      </button>

      {responseMessage.text && (
        <div
          className={`message mt-4 px-4 py-2 rounded-2xl font-semibold shadow ${
            responseMessage.type === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {responseMessage.text}
        </div>
      )}
    </form>
  );
}
