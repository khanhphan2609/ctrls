import Image from "next/image";
import "./OurClients.css"

const logos: string[] = Array.from(
  { length: 33 },
  (_, i) => `/imgs/logo_clients/${i + 1}.png`
);

// chia logo làm 2 hàng
const middle = Math.ceil(logos.length / 2);
const row1 = logos.slice(0, middle);
const row2 = logos.slice(middle);

type LogoRowProps = {
  items: string[];
  reverse?: boolean;
};

function LogoRow({ items, reverse = false }: LogoRowProps) {
  return (
    <div className="overflow-hidden marquee-hover">
      <div
        className={`
          flex
          w-max
          gap-14
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
        `}
      >
        {[...items, ...items].map((src, idx) => (
          <div
            key={idx}
            className="
              relative
              w-28
              h-20
              flex-shrink-0
              opacity-80
              hover:opacity-100
              transition
            "
          >
            <Image
              src={src}
              alt={`Client logo ${idx + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section id="clients" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center mb-20 text-4xl md:text-6xl font-bold">
          <span className="text-gold-gradient">OUR CLIENT</span>
        </h2>

        <div className="space-y-14">
          {/* Hàng 1 → trôi trái */}
          <LogoRow items={row1} />

          {/* Hàng 2 → trôi phải (NGƯỢC CHIỀU) */}
          <LogoRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
