import React, { useState } from "react";

export function BenevolatForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [email, setEmail] = useState("");
  const [motivation, setMotivation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!nom || !prenom || !adresse || !email || !motivation) {
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
      className="benevolat-form text-black flex flex-col gap-4"
    >
      <h2>Demande de Bénévolat</h2>
      <div className="form-group flex gap-4">
        <label>Nom</label>
        <input
          className="border border-gray-300 rounded"
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="form-group flex gap-4">
        <label>Prénom</label>
        <input
          className="border border-gray-300 rounded"
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />
      </div>
      <div className="form-group flex gap-4">
        <label>Adresse</label>
        <input
          className="border border-gray-300 rounded"
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
          required
        />
      </div>
      <div className="form-group flex gap-4">
        <label>Email</label>
        <input
          className="border border-gray-300 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group flex gap-4">
        <label>Motivations</label>
        <textarea
          className="border border-gray-300 rounded"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Envoi..." : "Envoyer"}
      </button>
      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
    </form>
  );
}
