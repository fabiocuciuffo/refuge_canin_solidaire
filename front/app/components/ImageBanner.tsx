import Button from "./Button";
import type { ImageBannerProps } from "~/types/types";

export default function ImageBanner({
  title,
  description,
  button,
  image,
  className = "",
}: ImageBannerProps) {
  return (
    <section className={`w-full py-8 mt-8 ${className}`}>
      <div className="max-w-[90vw] mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-8">
          <div className="flex-1 max-w-2xl">
            <h2 className="title2 text-dark mb-4">{title}</h2>
            <p className="text-regular text-dark mb-6 md:mb-0">{description}</p>
          </div>
          <div className="flex-shrink-0">
            <Button
              className="bg-blue text-white-custom px-6 py-3 whitespace-nowrap"
              link={button.href}
            >
              {button.text}
            </Button>
          </div>
        </div>

        <div className="w-full">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full md:h-[50vh] h-[30vh] object-cover rounded-[20px] "
          />
        </div>
      </div>
    </section>
  );
}
