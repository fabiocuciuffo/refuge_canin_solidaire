import { sanityClient } from "../utils/sanityClient";
import type { BenevolatRequest } from "../types/types";

export const benevolatService = {
  async submitRequest(requestData: BenevolatRequest) {
    try {
      const doc = {
        _type: "benevolatRequest",
        name: requestData.name,
        firstName: requestData.firstName,
        role: requestData.role,
        address: requestData.address,
        email: requestData.email,
        motivation: requestData.motivation,
        submittedAt: new Date().toISOString(),
      };

      return await sanityClient.create(doc);
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'enregistrement de la demande."
      );
    }
  },
};
