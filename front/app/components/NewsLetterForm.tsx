// components/SimpleNewsletterForm.jsx
import React, { useState } from "react";
import type { ApiResponse } from "~/types/types";

export function SimpleNewsletterForm({ className = "" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setMessage({ type: "", text: "" });

    if (!email.trim()) {
      setMessage({
        type: "error",
        text: "Veuillez saisir votre adresse email",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({
        type: "error",
        text: "Veuillez saisir une adresse email valide",
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email.trim().toLowerCase());

      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        body: formData,
      });

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setMessage({
          type: "success",
          text: result.message!,
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: result.error || "Une erreur est survenue",
        });
      }
    } catch (error) {
      console.error("Erreur inscription newsletter:", error);
      setMessage({
        type: "error",
        text: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`newsletter-form ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Titre */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Inscrivez-vous à notre newsletter
          </h3>
          <p className="text-gray-600 text-sm">
            Recevez nos dernières actualités et événements directement par email
          </p>
        </div>

        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Adresse email
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              disabled={loading}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-black"
            />
            <button
              type="submit"
              disabled={loading || !email.trim()}
              className="px-6 py-3 bg-blue text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Inscription...
                </span>
              ) : (
                "S'inscrire"
              )}
            </button>
          </div>
        </div>

        {message.text && (
          <div
            className={`p-4 rounded-lg border ${
              message.type === "success"
                ? "bg-green-50 text-green border-green-200"
                : "bg-red-50 text-red border-red-200"
            }`}
          >
            <div className="flex items-center gap-2">
              {message.type === "success" ? (
                <svg
                  className="w-5 h-5 text-green"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-red"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <p className="text-sm font-medium">{message.text}</p>
            </div>
          </div>
        )}

        <p className="text-xs text-white-custom text-center">
          En vous inscrivant, vous acceptez de recevoir nos emails. Vous pouvez
          vous désabonner à tout moment.
        </p>
      </form>
    </div>
  );
}

export function CompactNewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email.trim().toLowerCase());

      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        body: formData,
      });
      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert(result.error || "Erreur lors de l'inscription");
      }
    } catch (error) {
      alert("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-green-600 text-sm font-medium py-2">
        ✓ Inscription réussie !
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-xs">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        disabled={loading}
        className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-s focus:outline-none focus:ring-blue-500 disabled:opacity-50 text-black"
        required
      />
      <button
        type="submit"
        disabled={loading || !email.trim()}
        className="px-3 py-1 text-sm bg-blue text-white rounded-e hover:bg-blue disabled:opacity-50"
      >
        {loading ? "..." : "OK"}
      </button>
    </form>
  );
}
