import type { ActionFunctionArgs } from "react-router";
import { sendEmail } from "../../services/emailService";
import { benevolatService } from "../../services/submit-benevolat";
import { gmailUser } from "~/server/env";
import { headerContentTypeJson } from "../../utils/constants";

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
    const adresse = formData.get("adresse") as string;
    const email = formData.get("email") as string;
    const motivation = formData.get("motivation") as string;

    if (!nom || !prenom || !adresse || !email || !motivation) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis" }),
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

    await benevolatService.submitRequest({
      name: nom,
      firstName: prenom,
      address: adresse,
      email,
      motivation,
    });

    // Mail de confirmation à l'utilisateur
    const confirmationEmailHtml = `
      <p>Bonjour ${prenom},</p>
      <p>Merci pour votre demande de bénévolat. Nous avons bien reçu vos informations.</p>
      <p>À bientôt,</p>
      <p>L'équipe de l'association</p>
    `;

    await sendEmail({
      to: email,
      subject: "Confirmation de votre demande de bénévolat",
      html: confirmationEmailHtml,
    });

    // Mail à l'association
    const adminEmailHtml = `
      <h2>Nouvelle demande de bénévolat reçue</h2>
      <ul>
        <li><strong>Nom :</strong> ${nom}</li>
        <li><strong>Prénom :</strong> ${prenom}</li>
        <li><strong>Adresse :</strong> ${adresse}</li>
        <li><strong>Email :</strong> ${email}</li>
        <li><strong>Motivation :</strong> ${motivation}</li>
      </ul>
    `;

    await sendEmail({
      to: gmailUser!,
      subject: "Nouvelle demande de bénévolat",
      html: adminEmailHtml,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Votre demande a été soumise avec succès.",
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
