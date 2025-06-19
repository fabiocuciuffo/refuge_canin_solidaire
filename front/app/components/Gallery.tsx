import React from "react";
import type { GallerySectionProps, GalleryImage } from "../types/types";

const GalleryImageComponent: React.FC<{
  image: GalleryImage;
  className?: string;
}> = ({ image, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {image.caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-sm font-medium">{image.caption}</p>
        </div>
      )}
    </div>
  );
};

const GallerySection: React.FC<GallerySectionProps> = ({
  title = (
    <span>
      Notre <span className="svg_background">galerie</span>
    </span>
  ),
  description = "Découvrez les moments forts de notre refuge à travers ces images.",
  images,
  className = "",
}) => {
  return (
    <section className={`bg-white py-16 px-5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Gallery Grid - 3 colonnes avec disposition spécifique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
          {/* Colonne 1 - 2 images verticalement */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[0] || {
                    id: 1,
                    src: "/images/gallery/team-pink.jpg",
                    alt: "Équipe bénévoles en rose",
                  }
                }
                className="h-full"
              />
            </div>
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[1] || {
                    id: 2,
                    src: "/images/gallery/volunteer-dog.jpg",
                    alt: "Bénévole avec chien",
                  }
                }
                className="h-full"
              />
            </div>
          </div>

          {/* Colonne 2 - 3 images verticalement */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[2] || {
                    id: 3,
                    src: "/images/gallery/stand-refuge.jpg",
                    alt: "Stand du refuge",
                  }
                }
                className="h-full"
              />
            </div>
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[3] || {
                    id: 4,
                    src: "/images/gallery/black-dog-sign.jpg",
                    alt: "Chien noir avec panneau refuge",
                  }
                }
                className="h-full"
              />
            </div>
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[4] || {
                    id: 5,
                    src: "/images/gallery/van-refuge.jpg",
                    alt: "Camionnette du refuge",
                  }
                }
                className="h-full"
              />
            </div>
          </div>

          {/* Colonne 3 - 2 images verticalement */}
          <div className="flex flex-col gap-4 h-full">
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[5] || {
                    id: 6,
                    src: "/images/gallery/dog-cap.jpg",
                    alt: "Chien avec casquette",
                  }
                }
                className="h-full"
              />
            </div>
            <div className="flex-1">
              <GalleryImageComponent
                image={
                  images[6] || {
                    id: 7,
                    src: "/images/gallery/big-team.jpg",
                    alt: "Grande équipe de bénévoles",
                  }
                }
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
