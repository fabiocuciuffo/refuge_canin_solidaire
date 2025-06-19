import { sendEmail } from "./emailService";
import type { ContactRequest } from "../types/types";
import { gmailUser } from "~/server/env";

export const contactService = {
  async submitContactForm(contactData: ContactRequest) {
    try {
      const emailContent = `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${contactData.nom}</p>
        <p><strong>Prénom :</strong> ${contactData.prenom}</p>
        <p><strong>Email :</strong> ${contactData.email}</p>
        ${contactData.telephone ? `<p><strong>Téléphone :</strong> ${contactData.telephone}</p>` : ""}
        <p><strong>Message :</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${contactData.message.replace(/\n/g, "<br>")}
        </div>
        <hr>
        <p style="font-size: 12px; color: #666;">
          Message envoyé depuis le formulaire de contact du site web le ${new Date().toLocaleString("fr-FR")}
        </p>
      `;

      await sendEmail({
        to: gmailUser || "",
        subject: `[Contact] ${contactData.nom} ${contactData.prenom}`,
        html: emailContent,
      });

      const confirmationEmail = `
        <h2>Merci pour votre message !</h2>
        <p>Bonjour ${contactData.prenom},</p>
        <p>Notre équipe vous répondra dans les plus brefs délais.</p>
        <p>Cordialement,<br>L'équipe du Refuge Canin Solidaire</p>
      `;

      await sendEmail({
        to: contactData.email,
        subject: "Confirmation de réception de votre message",
        html: confirmationEmail,
      });

      return {
        success: true,
        message: "Votre message a été envoyé avec succès !",
      };
    } catch (error) {
      console.error("Erreur lors de l'envoi du message de contact:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'envoi de votre message."
      );
    }
  },
};
