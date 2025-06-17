import type { MetaArgs } from "react-router";
import {
  CompactNewsletterForm,
  SimpleNewsletterForm,
} from "~/components/NewsLettrForm";

export function meta({}: MetaArgs) {
  return [
    { title: "Refuge Canin Solidaire" },
    { name: "description", content: "Accueil du Refuge Canin Solidaire" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex flex-1 flex-col items-center justify-center w-full max-w-xl px-6">
        <h1 className="text-4xl font-bold mb-4 text-blue-700 text-center">
          Refuge Canin Solidaire
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Un lieu d’accueil et d’amour pour nos amis à quatre pattes.
        </p>

        <div className="w-full max-w-md mb-8">
          <SimpleNewsletterForm />
        </div>

        <div className="w-full max-w-md mb-8">
          <CompactNewsletterForm />
        </div>
      </main>
    </div>
  );
}
