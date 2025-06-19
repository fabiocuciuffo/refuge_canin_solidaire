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

export type ContactRequest = {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  message: string;
};

export type BannerProps = {
  title: {
    text: ReactElement<HTMLSpanElement>;
  };
  description: string;
  button: {
    text: string;
    href: string;
  };
  button2?: {
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
  title: ReactElement<HTMLSpanElement>;
  subtitle?: string;
  cards: TriptiqueCard[];
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
  imagePosition?: "left" | "right";
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

export type Article = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  excerpt?: string;
  body?: any;
  mainImage?: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  };
  publishedAt: string;
  author?: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
};

export type ActionItem = {
  id?: string | number;
  image: string;
  title: string;
  description: string;
  link?: string;
  alt?: string;
};

export type ActionsSectionProps = {
  title?: string;
  subtitle?: string;
  actions: ActionItem[];
  className?: string;
  highlightWordIndex?: number;
};

export type ActionCardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
  alt?: string;
  className?: string;
};

export type FAQItem = {
  id: string | number;
  question: string;
  answer: string;
  isOpen?: boolean;
};

export type FAQSectionProps = {
  title?: ReactElement<HTMLSpanElement>;
  subtitle?: string;
  faqs: FAQItem[];
  contactButtonText?: string;
  contactButtonLink?: string;
  className?: string;
  allowMultipleOpen?: boolean;
};

export type FAQItemProps = {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
};
