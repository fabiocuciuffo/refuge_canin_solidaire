import Footer from "~/components/Footer";
import MenuNavigation from "../components/MenuNavigation";
import { Outlet, type MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center md:items-stretch max-w-screen overflow-x-hidden">
      <MenuNavigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
