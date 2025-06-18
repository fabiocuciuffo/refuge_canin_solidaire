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
    <form
      onSubmit={handleSubmit}
      className="benevolat-form max-w-lg mx-auto bg-gradient-to-br shadow-2xl rounded-3xl p-8 flex flex-col gap-4 justify-center text-center border-4 border-white"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-blue-700 drop-shadow-lg tracking-wide">
        Demande de Bénévolat
      </h2>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Nom</label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          placeholder="Ton nom"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Prénom</label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
          placeholder="Ton prénom"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Rôle</label>
        <select
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
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

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Adresse</label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
          required
          placeholder="Ton adresse"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Email</label>
        <input
          className="border-2 border-blue-300 rounded-full px-3 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg text-black"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Ton email"
        />
      </div>

      <div className="form-group flex flex-col gap-1 text-left">
        <label className="mb-1 font-semibold text-blue-700">Motivations</label>
        <textarea
          className="border-2 border-blue-300 rounded-2xl px-3 py-2 min-h-[80px] focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 bg-white/80 text-lg resize-none text-black"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          required
          placeholder="Dis-nous pourquoi tu veux aider !"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r hover:to-blue-300 text-blue-700 font-extrabold py-4 rounded-full shadow-lg transition-all duration-300 text-lg tracking-wider hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed "
      >
        {loading ? "Envoi..." : "Devenir Bénévole"}
      </button>

      {message.text && (
        <div
          className={`message mt-4 px-4 py-2 rounded-2xl font-semibold shadow ${
            message.type === "success"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
