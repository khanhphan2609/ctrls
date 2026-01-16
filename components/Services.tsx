"use client";

import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Full Show Package",
      image: "/imgs/services/service-1.png",
    },
    {
      title: "Production",
      image: "/imgs/services/service-2.png",
    },
    {
      title: "Media - Entertainment",
      image: "/imgs/services/service-3.png",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-0 md:min-h-screen flex md:items-center overflow-hidden"
    >
      <div className="z-10 max-w-7xl mx-auto px-6 w-full">
        {/* TITLE */}
        <h2 className="text-center mb-16 md:mb-24 text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider">
          <span className="bg-gradient-to-r text-gold-gradient bg-clip-text text-transparent">
            OUR SERVICES
          </span>
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-12 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden grid grid-cols-1 gap-8 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Service Card ---------- */
function ServiceCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto">
      {/* TEXT */}
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 tracking-wide font-bold text-white">
        {title}
      </h2>
      {/* IMAGE */}
      <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#d6b26f] shadow-lg mb-8">
        <Image
          src={image}
          alt={title}
          width={256}
          height={256}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
