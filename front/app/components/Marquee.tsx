interface MarqueeProps {
  titles?: string[];
  speed?: number;
  className?: string;
}

export default function Marquee({
  titles = ["BIENVEILLANCE", "TRANSPARENCE", "RESPECT", "SOLIDARITÉ"],
  speed = 30,
  className = "",
}: MarqueeProps) {
  const duplicatedTitles = [...titles, ...titles];

  return (
    <div className={`w-full overflow-hidden bg-blue py-4 mt-8 ${className}`}>
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {duplicatedTitles.map((title, index) => (
          <span
            key={index}
            className="svg_background_white title3 text-blue mx-8 flex-shrink-0"
          >
            {title}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
}
