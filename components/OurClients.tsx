import Image from "next/image";

const logos = Array.from(
  { length: 33 },
  (_, i) => `/imgs/logo_clients/${i+1}.png`
);

export default function OurClients() {
  return (
    <section id="clients" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-20 text-4xl md:text-6xl font-bold tracking-wider">
          <span className="text-gold-gradient">OUR CLIENT</span>
        </h2>

        {/* LOGO GRID */}
        <div
          className="
            grid
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-6
            xl:grid-cols-7
            gap-x-10
            gap-y-14
            items-center
            justify-items-center
          "
        >
          {logos.map((src, idx) => (
            <div
              key={idx}
              className="
                relative
                w-28
                h-20
                flex
                items-center
                justify-center
                opacity-90
                hover:opacity-100
                transition
                duration-300
                hover:grayscale-0
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
    </section>
  );
}
