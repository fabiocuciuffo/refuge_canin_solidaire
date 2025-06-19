import type { ReactElement } from "react";

export type EmailAddress = string;

export interface Email {
  from: EmailAddress;
  to: EmailAddress | EmailAddress[];
  subject: string;
  body: string;
  cc?: EmailAddress | EmailAddress[];
  bcc?: EmailAddress | EmailAddress[];
  attachments?: string[];
  sentAt?: Date;
}

export interface EmailParams {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface Message {
  type: "success" | "error" | "";
  text: string;
}

export type BenevolatRequest = {
  name: string;
  firstName: string;
  role: string;
  address: string;
  email: string;
  motivation: string;
};

export type BannerProps = {
  title: {
    text: string;
    highlightedText?: string;
  };
  description: string;
  button: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  backgroundClass?: string;
};

export type TriptiqueCard = {
  title: ReactElement<HTMLSpanElement>;
  subtitle?: string;
  description: string;
};

export type TriptiqueProps = {
  title: string;
  highlight?: string;
  cards: [TriptiqueCard, TriptiqueCard, TriptiqueCard];
  backgroundColor?: string;
  cardBackgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  cardTitleSize?: string;
  cardSubtitleeSize?: string;
  cardTitleColor?: string;
  cardSubtitleColor?: string;
  cardTextColor?: string;
};

export type InfoBannerProps = {
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  title: ReactElement<HTMLSpanElement>;
  description: string;
  button: {
    text: string;
    href: string;
    className?: string;
  };
  className?: string;
};

export type ImageBannerProps = {
  title: ReactElement<HTMLSpanElement>;
  description: string;
  button: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};
