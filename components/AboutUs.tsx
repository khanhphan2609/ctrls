"use client";

import { useState } from "react";
import Image from "next/image";
import "./AboutUs.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function AboutUs() {
  const images = ["/about-1.png", "/about-2.png", "/about-3.png"];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif tracking-wider">
            CTRL-S
          </h2>
          <h3
            className="mt-4 text-3xl md:text-4xl font-serif tracking-wider
  text-gold-gradient"
          >
            THE RESERVE FOR YOUR CORE EQUITY
          </h3>
        </div>

        {/* IMAGES */}
        {/* Desktop */}
        <div className="hidden md:flex justify-center items-center gap-10 mb-20">
          {images.map((img, i) => (
            <ImageCircle key={i} src={img} />
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden flex items-center justify-center gap-6 mb-20">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-white/40 hover:bg-white/10 transition"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <ImageCircle src={images[index]} />

          <button
            onClick={next}
            className="p-2 rounded-full border border-white/40 hover:bg-white/10 transition"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mx-auto text-center leading-relaxed mb-20">
          <h3 className="text-3xl font-serif mb-6">CTRL-S</h3>
          <p className="text-xl font-serif mb-6">
            CTRL-S is dedicated to delivering{" "}
            <strong>paramount services</strong> to our clients through{" "}
            <strong>
              memorable events, striking visuals, and compelling films
            </strong>
            . We operate under the core philosophy of being{" "}
            <em>“The Reserve for Your Core Equity”.</em>
          </p>
        </div>

        {/* VALUES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-lg tracking-wide">
          {["Creative", "Appreciative", "Proficient", "Dedicated"].map(
            (item) => (
              <div key={item} className="uppercase text-2xl font-semibold">
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Image Circle ---------- */
function ImageCircle({ src }: { src: string }) {
  return (
    <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-[#7a5a23] shadow-lg">
      <Image
        src={src}
        alt="CTRL-S activity"
        width={224}
        height={224}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
