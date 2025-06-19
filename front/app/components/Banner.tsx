import type { BannerProps } from "~/types/types";

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
          <div className="flex gap-4 items-center md:items-start w-full">
            <button className="relative overflow-hidden bg-white text-regular text-heavy text-dark rounded-[12px] py-4 md:w-full text-[1.2rem] font-bold cursor-pointer mb-6 w-full md:max-w-xs md:py-6 transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]">
              <span className="relative z-10">
                <a href={button.href}>{button.text}</a>
              </span>
            </button>
            {button2 && (
              <>
                <button className="relative overflow-hidden bg-transparent border-2 border-white text-regular text-heavy text-white-custom rounded-[12px] py-3 md:w-full text-[1.2rem] font-bold cursor-pointer mb-6 w-full md:max-w-xs md:py-6 transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]">
                  <span className="relative z-10">
                    <a href={button2.href}>{button2.text}</a>
                  </span>
                </button>
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
