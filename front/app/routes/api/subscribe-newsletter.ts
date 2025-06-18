import type { ActionFunctionArgs } from "react-router";
import { newsletterService } from "../../services/sanityNewsletter";
import { sendWelcomeEmail } from "../../services/emailService";
import { headerContentTypeJson } from "~/utils/constants";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Méthode non autorisée" }), {
      status: 405,
      headers: headerContentTypeJson,
    });
  }

  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;

    if (!email || !email.trim()) {
      return new Response(
        JSON.stringify({ error: "L'adresse email est requise" }),
        { status: 400, headers: headerContentTypeJson }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Format d'email invalide" }),
        { status: 400, headers: headerContentTypeJson }
      );
    }

    await newsletterService.subscribe(email);
    await sendWelcomeEmail(email);

    return new Response(
      JSON.stringify({
        success: true,
        message:
          "Inscription réussie ! Vous allez recevoir un email de confirmation.",
      }),
      { status: 200, headers: headerContentTypeJson }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue. Veuillez réessayer.",
      }),
      { status: 500, headers: headerContentTypeJson }
    );
  }
}
