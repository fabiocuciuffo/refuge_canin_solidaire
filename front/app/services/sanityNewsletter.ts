import { sanityClient } from "~/utils/sanityClient";
import type { EmailAddress } from "~/types/types";

export const newsletterService = {
  async checkEmailExists(email: EmailAddress) {
    const query = `*[_type == "newsletter" && email == $email][0]`;
    return await sanityClient.fetch(query, { email });
  },

  async subscribe(email: EmailAddress) {
    try {
      const existing = await this.checkEmailExists(email.toLowerCase());
      if (existing) {
        if (existing.status === "active") {
          throw new Error(
            "Cette adresse email est déjà inscrite à la newsletter"
          );
        } else {
          return await sanityClient
            .patch(existing._id)
            .set({
              status: "active",
              subscribedAt: new Date().toISOString(),
            })
            .commit();
        }
      }

      const doc = {
        _type: "newsletter",
        email: email.toLowerCase(),
        subscribedAt: new Date().toISOString(),
        status: "active",
      };

      return await sanityClient.create(doc);
    } catch (error) {
      throw error;
    }
  },
};
