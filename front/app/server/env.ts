import "dotenv";

const sanityId = process.env.REACT_APP_SANITY_PROJECT_ID;
const sanityDataset = process.env.REACT_APP_SANITY_DATASET;
const sanityToken = process.env.REACT_APP_SANITY_TOKEN;
const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;
const emailFrom = process.env.EMAIL_FROM;

export {
  sanityId,
  sanityDataset,
  sanityToken,
  gmailUser,
  gmailPassword,
  emailFrom,
};
