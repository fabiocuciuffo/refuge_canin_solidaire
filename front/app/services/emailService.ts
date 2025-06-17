// utils/emailService.js
import nodemailer from "nodemailer";
import type { EmailParams, EmailAddress } from "../types/types";
import { emailFrom, gmailPassword, gmailUser } from "~/server/env";

// Configuration du transporteur email
const createTransporter = () => {
  if (gmailUser && gmailPassword) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });
  }

  // if (smtpHost) {
  //   return nodemailer.createTransport({
  //     host: smtpHost,
  //     port: parseInt(smtpPort || "587"),
  //     secure: smtpSecure === "true",
  //     auth: {
  //       user: smtpUser,
  //       pass: smtpPassword,
  //     },
  //   });
  // }

  throw new Error(
    "Configuration email manquante dans les variables d'environnement"
  );
};

export async function sendEmail({ to, subject, html, text }: EmailParams) {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: emailFrom,
      to,
      subject,
      html,
      text: text || (html ? html.replace(/<[^>]*>/g, "") : ""),
    };

    const result = await transporter.sendMail(mailOptions);

    console.log("Email envoyé avec succès:", {
      to,
      subject,
      messageId: result.messageId,
    });

    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("Erreur envoi email:", error);
    if (error instanceof Error) {
      throw new Error(`Erreur envoi email: ${error.message}`);
    } else {
      throw new Error(
        "Erreur envoi email: Une erreur inconnue s'est produite."
      );
    }
  }
}

export function createWelcomeEmailHTML(email: EmailAddress) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bienvenue dans notre newsletter !</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        <!-- Header -->
        <header style="background-color: #2563eb; color: white; padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Bienvenue !</h1>
        </header>

        <!-- Main Content -->
        <main style="padding: 30px 20px;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Merci de votre inscription !</h2>

          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Bonjour,
          </p>

          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Nous sommes ravis de vous compter parmi nos abonnés ! Vous allez maintenant recevoir
            nos dernières actualités, événements et informations importantes directement dans votre boîte mail.
          </p>

          <div style="background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              💡 Astuce : Ajoutez notre adresse email à vos contacts pour ne jamais manquer nos messages !
            </p>
          </div>

          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.
          </p>

          <p style="color: #4b5563; line-height: 1.6;">
            À très bientôt,<br>
            <strong>L'équipe Mon Association</strong>
          </p>
        </main>

        <!-- Footer -->
        <footer style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-size: 12px; color: #6b7280;">
            Vous recevez cet email car vous vous êtes inscrit(e) à notre newsletter.
          </p>
          <p style="margin: 10px 0 0 0; font-size: 12px; color: #6b7280;">
            Mon Association - Tous droits réservés
          </p>
        </footer>
      </div>
    </body>
    </html>
  `;
}

export async function sendWelcomeEmail(email: EmailAddress) {
  return await sendEmail({
    to: email,
    subject: "Bienvenue dans notre newsletter ! 🎉",
    html: createWelcomeEmailHTML(email),
  });
}
