import { createClient } from "@sanity/client";
import { sanityDataset, sanityId, sanityToken } from "~/server/env";

export const sanityClient = createClient({
  projectId: sanityId,
  dataset: sanityDataset || "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: sanityToken,
});
