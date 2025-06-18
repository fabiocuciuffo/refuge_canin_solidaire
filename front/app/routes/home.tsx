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
    <main>
      <HeroBanner />
    </main>
  );
}
