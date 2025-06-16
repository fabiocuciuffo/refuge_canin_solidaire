import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <main className="flex flex-1 flex-col items-center justify-center w-full max-w-xl px-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">
          Refuge Canin Solidaire
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Un lieu d’accueil et d’amour pour nos amis à quatre pattes.
        </p>
      </main>
    </div>
  );
}
