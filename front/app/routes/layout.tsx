import MenuNavigation from "../components/MenuNavigation";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <MenuNavigation />
      <main className="flex flex-1 flex-col items-center justify-center w-full max-w-xl px-6">
        <Outlet />
      </main>
    </div>
  );
}
