import type { BannerProps } from "~/types/types";
import Button from "./Button";

export default function Banner({
  title,
  description,
  button,
  button2,
  image,
  backgroundClass = "bg-blue",
}: BannerProps) {
  return (
    <div className="p-6">
      <section
        className={`${backgroundClass} rounded-2xl pt-8 pb-0 text-white mt-6 relative flex flex-col justify-center overflow-hidden md:m-0 md:w-full md:max-h-[85vh] md:flex-row md:justify-between md:items-stretch md:mt-0`}
      >
        <div className="px-6 md:w-1/2 md:px-12 md:py-16 md:flex md:flex-col md:justify-start md:items-start">
          <h1 className="title1 font-bold mb-3 leading-tight">{title.text}</h1>
          <p className="text-regular font-bold mb-6 text-white md:text-large md:mb-8">
            {description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-start w-full">
            <Button link={button.href} className="bg-white text-black w-fit! px-4 inline! me-3">{button.text}</Button>
            {button2 && (
              <>
                <Button link={button2.href} className="bg-white text-black w-fit! px-4 inline!">{button2.text}</Button>
              </>
            )}
          </div>
        </div>

        <div className="relative mt-4 flex justify-center md:w-1/2 md:mt-0 md:flex md:items-end md:justify-end md:self-end">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={`max-w-full h-auto z-10 relative object-contain md:max-h-full md:object-bottom md:translate-x-36 md:translate-y-48`}
          />
        </div>
      </section>
    </div>
  );
}
