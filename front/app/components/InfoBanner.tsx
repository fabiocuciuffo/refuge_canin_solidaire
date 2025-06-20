import type { InfoBannerProps } from "~/types/types";
import Button from "./Button";

const InfoBanner: React.FC<InfoBannerProps> = ({
  image,
  title,
  description,
  button,
  className = "",
  imagePosition = "left",
}) => {
  return (
    <div
      className={`w-full max-h-[80vh] mt-4 p-4 flex justify-center ${className}`}
    >
      <div
        className={`flex flex-col md:flex-row h-full max-h-[65vh] overflow-hidden md:gap-8 lg:gap-32 ${imagePosition === "right" ? "md:flex-row-reverse" : ""}`}
      >
        <div className="w-full md:w-5/12 lg:w-2/5 h-52 md:h-auto relative overflow-hidden flex justify-centers">
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full max-h-[80vh] object-contain ${image.className || ""}`}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8 lg:p-12">
          <div className="flex flex-col gap-2 md:gap-4 h-full justify-center max-w-lg">
            {/* Titre */}
            <div className="title3 md:title2 text-dark">{title}</div>

            <p className="text-regular md:text-medium text-dark text-regular-weight leading-relaxed">
              {description}
            </p>

            <div className="mt-2 md:mt-4">
              {button && (
                <Button
                  className={`${button.className + " " + "bg-blue text-white-custom"}`}
                  link={button.href}
                >
                  {button.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
