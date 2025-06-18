import MenuNavigation from "../components/MenuNavigation";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center md:items-stretch">
      {/* <MenuNavigation /> */}
      <main className="flex flex-col items-center justify-center w-full md:items-stretch">
        <Outlet />
      </main>
    </div>
  );
}
