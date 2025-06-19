import type { ActionFunctionArgs } from "react-router";
import { contactService } from "~/services/contactService";
import type { ContactRequest } from "~/types/types";

const headerContentTypeJson = {
  "Content-Type": "application/json",
};

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Méthode non autorisée" }), {
      status: 405,
      headers: headerContentTypeJson,
    });
  }

  try {
    const formData = await request.formData();

    const nom = formData.get("nom") as string;
    const prenom = formData.get("prenom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const message = formData.get("message") as string;

    if (!nom || !prenom || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Les champs marqués d'un * sont requis.",
        }),
        { status: 400, headers: headerContentTypeJson }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Veuillez saisir une adresse email valide.",
        }),
        { status: 400, headers: headerContentTypeJson }
      );
    }

    if (message.length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Le message doit contenir au moins 10 caractères.",
        }),
        { status: 400, headers: headerContentTypeJson }
      );
    }

    if (message.length > 2000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Le message ne peut pas dépasser 2000 caractères.",
        }),
        { status: 400, headers: headerContentTypeJson }
      );
    }

    const contactData: ContactRequest = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim().toLowerCase(),
      telephone: telephone?.trim() || undefined,
      message: message.trim(),
    };

    const result = await contactService.submitContactForm(contactData);

    return new Response(
      JSON.stringify({
        success: true,
        message:
          result.message ||
          "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
      }),
      { status: 200, headers: headerContentTypeJson }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la demande de contact:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Une erreur interne est survenue. Veuillez réessayer plus tard.",
      }),
      { status: 500, headers: headerContentTypeJson }
    );
  }
}

export default action;
