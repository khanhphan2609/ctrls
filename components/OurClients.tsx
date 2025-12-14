"use client";

import { useRef } from "react";
import Image from "next/image";
import "./OurClients.css";

export default function OurClients() {
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  const logos = Array.from(
    { length: 32 },
    (_, i) => `/clients/client-${i + 1}.png`
  );

  const half = Math.ceil(logos.length / 2);
  const logos1 = logos.slice(0, half);
  const logos2 = logos.slice(half);

  return (
    <section id="clients" className="relative py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif tracking-wider text-shadow">
            OUR CLIENTS
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-serif tracking-wider text-gold-gradient text-shadow">
            BRANDS WE WORK WITH
          </h3>
        </div>

        {/* ROW 1 */}
        <div className="relative overflow-hidden mb-20 ">
          <div ref={row1} className="marquee slow">
            {[...logos1, ...logos1].map((logo, i) => (
              <Logo key={i} src={logo} className="text-shadow" />
            ))}
          </div>
        </div>

        {/* ROW 2 (reverse) */}
        <div className="relative overflow-hidden">
          <div ref={row2} className="marquee slow reverse">
            {[...logos2, ...logos2].map((logo, i) => (
              <Logo key={i} src={logo} className="text-shadow"/>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Logo ---------- */
function Logo({ src, className }: { src: string; className?: string }) {
  return (
    <div className="flex items-center justify-center min-w-[160px] px-8">
      <Image
        src={src}
        alt="Client logo"
        width={160}
        height={80}
        className={`object-contain transition ${className || ""}`}
      />
    </div>
  );
}
