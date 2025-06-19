import { PortableText as BasePortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

interface PortableTextProps {
  value: PortableTextBlock[];
}

const components = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue hover:text-blue-dark underline transition-colors duration-200"
        target={value.blank ? "_blank" : "_self"}
        rel={value.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={value.asset.url}
          alt={value.alt || "Image de l'article"}
          className="w-full rounded-lg shadow-md"
        />
        {value.caption && (
          <p className="text-sm text-gray-500 text-center mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
};

export function PortableText({ value }: PortableTextProps) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  return <BasePortableText value={value} components={components} />;
}
