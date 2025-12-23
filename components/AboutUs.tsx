"use client";

import Image from "next/image";

export default function AboutUs() {
  const images = ["/imgs/about/about-1.png", "/imgs/about/about-2.png", "/imgs/about/about-3.png", "/imgs/about/about-4.png", "/imgs/about/about-5.png"];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* TITLE */}
        <div className="text-center mb-16 font-bold">
          <h2 className="text-5xl md:text-6xl lg:text-8xl tracking-wider text-shadow">
            CTRL-S
          </h2>
          <h3
            className="mt-4 text-3xl md:text-4xl lg:text-6xl tracking-wider
  text-gold-gradient"
          >
            SAVING THE TRUE VALUE OF YOURS
          </h3>
        </div>

        {/* IMAGES */}
        <div className="mb-20">
          {/* Desktop: 5 items, wrap if needed */}
          <div className="hidden lg:flex flex-wrap justify-center items-center gap-6">
            {images.map((img, i) => (
              <ImageCircle key={i} src={img} />
            ))}
          </div>

          {/* Tablet: 3-2 layout */}
          <div className="hidden md:flex lg:hidden grid grid-cols-3 gap-6 justify-items-center">
            {images.map((img, i) => (
              <ImageCircle key={i} src={img} />
            ))}
          </div>

          {/* Mobile: 2-2-1 layout */}
          <div className="md:hidden grid grid-cols-2 gap-4 px-4 justify-items-center">
            {images.map((img, i) => (
              <div key={i} className={i === 4 ? 'col-span-2 flex justify-center' : ''}>
                <ImageCircle src={img} />
              </div>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mx-auto text-center leading-relaxed mb-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold">
            CTRL-S
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
            CTRL-S is dedicated to delivering <span className="text-gold-gradient font-bold">paramount services</span> to our clients through{" "}
            <span className="text-gold-gradient font-bold">memorable events</span>, <span className="text-gold-gradient font-bold">striking visuals</span>, and <span className="text-gold-gradient font-bold">compelling films</span>
            . We operate under the core philosophy of being{" "}
            <span className="text-gold-gradient font-bold italic">“Saving the true value of yours”</span>.
          </p>
        </div>

        {/* VALUES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {["Creative", "Appreciative", "Proficient", "Dedicated"].map(
            (item) => (
              <div
                key={item}
                className="uppercase text-xl md:text-2xl lg:text-3xl font-bold text-gold-gradient border-2 border-[#d6b26f] rounded-lg p-4 bg-black/20 backdrop-blur-sm"
              >
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
    <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-[#7a5a23] shadow-lg">
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
