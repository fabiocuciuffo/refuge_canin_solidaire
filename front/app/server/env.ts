import "dotenv";

const sanityId = process.env.SANITY_PROJECT_ID;
const sanityDataset = process.env.SANITY_DATASET;
const sanityToken = process.env.SANITY_TOKEN;
const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;
const emailFrom = process.env.EMAIL_FROM;
const viewerToken = process.env.REACT_APP_SANITY_VIEWER_TOKEN

export {
  sanityId,
  sanityDataset,
  sanityToken,
  gmailUser,
  gmailPassword,
  emailFrom,
  viewerToken,
};
