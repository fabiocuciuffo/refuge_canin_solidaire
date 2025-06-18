import type { MetaArgs } from "react-router";
import HeroBanner from "~/components/HeroBanner";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center w-full max-w-xl px-6">
      <HeroBanner />
    </main>
  );
}
