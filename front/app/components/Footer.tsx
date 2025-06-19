import { CompactNewsletterForm } from "./NewsLetterForm";
import Button from "./Button";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    resources: {
      links: [
        { label: "Blog", href: "" },
        { label: "Événements", href: "" },
        { label: "FAQ", href: "" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      hoverColor: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="bg-white-custom border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <img
                  src="/images/logo_RCS.svg"
                  className="max-w-32 sm:max-w-48 h-auto"
                  alt="Logo RCS"
                />
              </div>
            </div>

            <p className="text-tiny text-dark mb-6 leading-relaxed max-w-sm">
              Rejoignez notre newsletter pour rester informés des actualités du
              refuge et de nos protégés.
            </p>

            <div className="mb-4">
              <CompactNewsletterForm />
            </div>

            <p className="text-tiny text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              En cliquant sur s'inscrire, vous acceptez nos{" "}
              <a
                href="#terms"
                className="text-blue underline hover:no-underline transition-all duration-200"
              >
                conditions d'utilisation
              </a>
              .
            </p>

            <div className="flex items-center gap-3 text-dark mb-6 sm:mb-0">
              <Phone className="w-5 h-5 text-blue" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-small text-gray-600">
                  Contactez-nous :
                </span>
                <a
                  href="tel:0556873668"
                  className="text-regular font-medium hover:text-blue transition-colors duration-200"
                >
                  05 56 87 36 68
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 lg:mb-10">
              {/* Liens J'adopte */}
              <div className="col-span-1">
                <a href="">
                  <h3 className="title6 text-dark mb-4 sm:mb-5">J'adopte</h3>
                </a>
              </div>

              {/* Liens Le refuge */}
              <div className="col-span-1">
                <a href="">
                  <h3 className="title6 text-dark mb-4 sm:mb-5">Le refuge</h3>
                </a>
              </div>

              <div className="col-span-1">
                <h3 className="title6 text-dark mb-4 sm:mb-5">Ressources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-small text-gray-600 hover:text-blue transition-colors duration-200 block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1">
                <h3 className="title6 text-dark mb-4 sm:mb-5">Suivez-nous</h3>
                <ul className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <li key={index}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 text-small text-gray-600 ${social.hoverColor} transition-colors duration-200`}
                          aria-label={`Suivez-nous sur ${social.name}`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{social.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <Button className="w-full sm:w-auto border border-black">
                <span className="title6">Devenir Bénévole</span>
              </Button>

              <Button className="sm:w-auto bg-blue text-white cursor-pointer">
                <span className="title6">Faire un don</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-small text-gray-600 text-center sm:text-left">
              © 2025 Refuge Canin Solidaire. Tous droits réservés.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8">
              <a
                href="#privacy"
                className="text-small text-gray-600 hover:text-blue transition-colors duration-200"
              >
                Politique de confidentialité
              </a>
              <a
                href="#terms"
                className="text-small text-gray-600 hover:text-blue transition-colors duration-200"
              >
                Conditions d'utilisation
              </a>
              <a
                href="#cookies"
                className="text-small text-gray-600 hover:text-blue transition-colors duration-200"
              >
                Cookies
              </a>
              <a
                href="#mentions"
                className="text-small text-gray-600 hover:text-blue transition-colors duration-200"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
