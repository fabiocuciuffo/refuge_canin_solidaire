import { useRef } from "react";
import Button from "./Button";

const MenuNavigation = () => {
  const menu_mobile = useRef<HTMLDivElement | null>(null);
  const menu_mobile_inside = useRef<HTMLDivElement | null>(null);
  const menu_mobile_img = useRef<HTMLImageElement | null>(null);

  function openMenu(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (
      menu_mobile.current &&
      !menu_mobile.current.classList.contains("visible")
    ) {
      menu_mobile.current.classList.add("visible");
      menu_mobile.current.classList.remove("-translate-y-full");
      if (menu_mobile_img.current) {
        menu_mobile_img.current.classList.add("opacity-0");
        setTimeout(() => {
          if (menu_mobile_img.current) {
            menu_mobile_img.current.src = "/vector/cross.svg";
            menu_mobile_img.current.classList.remove("opacity-0");
          }
        }, 100);
      }
      setTimeout(() => {
        if (menu_mobile_inside.current) {
          menu_mobile_inside.current.classList.remove("opacity-0");
        }
      }, 300);
      document.body.style.overflow = "hidden";
    } else if (
      menu_mobile.current &&
      menu_mobile.current.classList.contains("visible")
    ) {
      if (
        menu_mobile.current &&
        menu_mobile.current.classList.contains("visible")
      ) {
        document.body.style.overflow = "";
        if (menu_mobile_img.current) {
          menu_mobile_img.current.classList.add("opacity-0");
          setTimeout(() => {
            if (menu_mobile_img.current) {
              menu_mobile_img.current.src = "/vector/burger_menu.svg";
              menu_mobile_img.current.classList.remove("opacity-0");
            }
          }, 100);
        }
        if (menu_mobile_inside.current) {
          menu_mobile_inside.current.classList.add("opacity-0");
        }
        setTimeout(() => {
          if (menu_mobile.current) {
            menu_mobile.current.classList.remove("visible");
            menu_mobile.current.classList.add("-translate-y-full");
          }
        }, 300);
      }
    }
  }

  function toggleMobileCollapseLink(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const content = e.currentTarget.nextElementSibling;
    const chevron = e.currentTarget.querySelector("img");
    if (content && chevron) {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        chevron.classList.add("rotate-90");
      } else {
        setTimeout(() => {
          content.classList.add("hidden");
          chevron.classList.remove("rotate-90");
        }, 100);
      }
    }
  }

  function toggleDesktopCollapseLink(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const content = e.currentTarget.nextElementSibling;
    const chevron = e.currentTarget.querySelector("img");
    if (content && chevron) {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        chevron.classList.add("rotate-90");
      } else {
        setTimeout(() => {
          content.classList.add("hidden");
          chevron.classList.remove("rotate-90");
        }, 100);
      }
    }
  }

  return (
    <nav className="sticky top-0 left-0 justify-between md:items-center w-full h-fit flex py-5 px-4 bg-white z-50">
      <div className="relative flex justify-between md:hidden w-full z-50">
        <img src="/images/logo_RCS.svg" alt="" className="max-w-48" />
        <div className="inline-flex">
          <button
            onClick={openMenu}
            className="bg-blue p-4 rounded-lg w-12 flex justify-center items-center"
          >
            <img
              src="/vector/burger_menu.svg"
              alt=""
              className="transition-all duration-100 ease-in-out"
              ref={menu_mobile_img}
            />
          </button>
        </div>
      </div>
      <div
        className="invisible h-screen w-full bg-white absolute z-40 top-0 left-0 transition-all duration-300 ease-in-out  -translate-y-full flex flex-col justify-center md:hidden px-4"
        id="menu_mobile"
        ref={menu_mobile}
      >
        <div className="w-full h-fit py-2">
          <img
            src="/images/logo_RCS.svg"
            alt=""
            className="max-w-48 invisible"
            ref={menu_mobile_img}
          />
        </div>
        <div
          className="bg-beige flex flex-col w-full h-full rounded-2xl opacity-0 transition-all duration-300 ease-in-out justify-start p-4 my-4"
          ref={menu_mobile_inside}
        >
          <div className="my-auto">
            <Button link="/adoption">J'adopte</Button>
            <Button link="/refuge">Le refuge</Button>
            <Button link="/devenir-benevole">Devenir bénévole</Button>
            <Button link="/">Boutique</Button>
            <div className="relative flex flex-col justify-center items-center">
              <Button
                onClickCallback={toggleMobileCollapseLink}
                className="flex! items-center justify-center w-full"
              >
                Ressources
                <img
                  src="/vector/chevron.svg"
                  alt="Chevron"
                  className="transition-transform duration-300 ease-in-out"
                />
              </Button>
              <div className="hidden absolute top-full left-1/2 -translate-x-1/2 flex-col transition-all duration-100 ease-in-out">
                <Button link="/" className="p-0.5! text-regular-weight">
                  Blog
                </Button>
                <Button link="/" className="p-0.5! text-regular-weight">
                  Événements
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button link="/" className="border">
              Contactez-nous
            </Button>
            <span className="invisible min-w-3"></span>
            <Button link="/" className="bg-blue text-white">
              Faire un don
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between w-full z-10">
        <img src="/images/logo_RCS.svg" alt="" className="max-w-48 me-2" />
        <div className="flex me-2">
          <Button link="/adoption" className="whitespace-nowrap me-6">
            J'adopte
          </Button>
          <Button link="/refuge" className="whitespace-nowrap me-6">
            Le refuge
          </Button>
          <Button link="/devenir-benevole" className="whitespace-nowrap me-6">
            Devenir bénévole
          </Button>
          <Button link="/" className="whitespace-nowrap me-8">
            Boutique
          </Button>
          <div className="relative group">
            <Button
              className="flex! items-center justify-center"
              onClickCallback={toggleDesktopCollapseLink}
            >
              Ressources
              <img
                src="/vector/chevron.svg"
                alt="Chevron"
                className="transition-transform duration-100 ease-in-out group-hover:rotate-90"
              />
            </Button>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-lg p-2 min-w-32 z-20">
              <Button link="/" className="text-regular-weight my-1">
                Blog
              </Button>
              <Button link="/" className="text-regular-weight my-1">
                Événements
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-fit ">
          <Button
            link="/"
            className="border whitespace-nowrap w-fit! px-6 me-2"
          >
            Contactez-nous
          </Button>
          <Button
            link="/"
            className="bg-blue whitespace-nowrap w-fit! px-6 text-white"
          >
            Faire un don
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;
