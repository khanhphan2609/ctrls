"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Services() {
  const services = [
    {
      title: "Full Show Package",
      desc: "End-to-end event solutions, delivering seamless experiences that amplify brand impact.",
      image: "/service-1.png",
    },
    {
      title: "Production",
      desc: "High-quality production with bold visuals that shape brand identity and engagement.",
      image: "/service-2.png",
    },
    {
      title: "Media - Entertainment",
      desc: "Story-driven media content crafted to inspire, entertain, and connect with audiences.",
      image: "/service-3.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? services.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === services.length - 1 ? 0 : i + 1));

  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif tracking-wider">
            SERVICES
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-serif tracking-wider text-gold-gradient">
            WHAT WE DELIVER
          </h3>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-12 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden flex items-center justify-center gap-6 mb-20">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-white/40 hover:bg-white/10 transition"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <ServiceCard {...services[index]} />

          <button
            onClick={next}
            className="p-2 rounded-full border border-white/40 hover:bg-white/10 transition"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Service Card ---------- */
function ServiceCard({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto">
      {/* IMAGE */}
      <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-[#7a5a23] shadow-lg mb-8">
        <Image
          src={image}
          alt={title}
          width={256}
          height={256}
          className="object-cover w-full h-full"
        />
      </div>

      {/* TEXT */}
      <h4 className="text-2xl font-serif mb-4 tracking-wide">{title}</h4>
      <p className="text-lg font-serif opacity-90">{desc}</p>
    </div>
  );
}
