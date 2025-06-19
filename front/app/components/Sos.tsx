import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import type { SOSProps, EmergencyContact } from "../types/types";

const defaultEmergencyContacts: EmergencyContact[] = [
  {
    id: 1,
    name: "SPA - Société Protectrice des Animaux",
    phone: "01 43 80 40 66",
    description: "Signalement de maltraitance animale",
    available: "Lun-Ven 9h-18h",
  },
  {
    id: 2,
    name: "Pompiers (animaux en détresse)",
    phone: "18",
    description: "Urgences vitales d'animaux",
    available: "24h/24 - 7j/7",
  },
  {
    id: 3,
    name: "Police / Gendarmerie",
    phone: "17",
    description: "Maltraitance, abandon, urgences",
    available: "24h/24 - 7j/7",
  },
  {
    id: 4,
    name: "Vétérinaire de garde",
    phone: "3115",
    description: "Urgences vétérinaires",
    available: "Weekends et jours fériés",
  },
  {
    id: 5,
    name: "Refuge Canin Solidaire",
    phone: "0556873668",
    description: "Signalement et conseils",
    available: "9h-19h tous les jours",
  },
];

const SOS: React.FC<SOSProps> = ({
  emergencyContacts = defaultEmergencyContacts,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bubbleRef.current &&
        buttonRef.current &&
        !bubbleRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {isOpen && (
        <div
          ref={bubbleRef}
          className="absolute bottom-20 right-0 w-96 md:w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform transition-all duration-300 animate-in slide-in-from-bottom-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="title4 font-bold text-red flex items-center">
              Numéros d'urgence
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-dark hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-red-800 font-medium">
              🚨 En cas d'urgence vitale, contactez immédiatement les services
              d'urgence
            </p>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.id}
                className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm flex-1 min-w-0">
                    {contact.name}
                  </h4>
                  <button
                    onClick={() => handleCall(contact.phone)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center whitespace-nowrap flex-shrink-0"
                  >
                    {contact.phone}
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  {contact.description}
                </p>
                <p className="text-xs text-blue-600 font-medium">
                  {contact.available}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Gardez ces numéros précieusement • Sauvez des vies
            </p>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg
          flex items-center justify-center transition-all duration-300 transform hover:scale-110
        `}
        aria-label="Numéros d'urgence animaux"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <img src="/vector/sos.svg" alt="Numéro d'urgence" />
        )}
      </button>
    </div>
  );
};

export default SOS;
