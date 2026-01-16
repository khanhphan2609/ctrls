"use client";

import Image from "next/image";

export default function AboutUs() {
  const images = [
    "/imgs/about/about-1.png",
    "/imgs/about/about-2.png",
    "/imgs/about/about-3.jpg",
    "/imgs/about/about-4.png",
    "/imgs/about/about-5.jpg",
    "/imgs/about/about-6.jpg",
    "/imgs/about/about-7.jpg",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        {/* TITLE */}
        <div className="text-center mb-8 sm:mb-16 font-bold">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl  tracking-wider text-shadow">
            CTRL-S
          </h2>
          <h3
            className="mt-4 text-2xl sm:text-3xl md:text-4xl py-8 sm:py-12 lg:text-6xl tracking-wider
  text-gold-gradient"
          >
            SAVING THE TRUE VALUE OF YOURS
          </h3>
        </div>

        {/* IMAGES - Marquee Animation */}
        <div className="mb-20">

          {/* Marquee for Desktop & Tablet */}
          <div className="hidden md:block overflow-hidden">
            <div className="flex w-max gap-8 animate-marquee-about">
              {[...images, ...images].map((img, i) => (
                <div key={i} className="px-4">
                  <ImageCircle src={img} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile (dưới md): Layout 2-2-2-1 với hiệu ứng Pop-up - Tối ưu cho mọi cỡ màn hình */}
          <div className="md:hidden flex flex-col items-center gap-y-6 sm:gap-y-8">
            <div className="flex justify-center gap-x-8 sm:gap-x-12">
              <ImageCircle src={images[0]} delay="0s" isPopup />
              <ImageCircle src={images[1]} delay="0.2s" isPopup />
            </div>
            <div className="flex justify-center items-center gap-x-8 sm:gap-x-12">
              <ImageCircle src={images[2]} delay="0.4s" isPopup />
              <ImageCircle src={images[3]} delay="0.6s" isPopup />
            </div>
            <div className="flex justify-center items-center gap-x-8 sm:gap-x-12">
              <ImageCircle src={images[4]} delay="0.8s" isPopup />
              <ImageCircle src={images[5]} delay="1.0s" isPopup />
            </div>
            <div className="flex justify-center items-center">
              <ImageCircle src={images[6]} delay="1.2s" isPopup />
            </div>
          </div>

        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mx-auto text-center leading-relaxed mb-20">
          <h3 className="text-3xl md:text-6xl lg:text-6xl mt-76 mb-28 font-bold">
            CTRL-S
          </h3>
          <p
            className="text-lg md:text-xl lg:text-3xl mb-28 p-2 leading-relaxed text-justify"
          >
            CTRL-S is dedicated to delivering paramount services to our clients through{" "}
            <span className="font-bold">memorable events</span>,{" "}
            <span className="font-bold">striking visuals</span>, and{" "}
            <span className="font-bold">compelling films</span>. We operate under the core
            philosophy of being{" "}
            <span className="font-bold">“Saving the true value of yours”</span>.
          </p>
        </div>

        {/* VALUES */}
        <div className="grid grid-cols-2 md:grid-cols-4  gap-6 md:gap-6 text-center">
          {["Creative", "Appreciative", "Proficient", "Dedicated"].map(
            (item) => (
              <div
                key={item}
                className=" text-xl md:text-2xl lg:text-4xl font-bold  rounded-lg"
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
function ImageCircle({
  src,
  delay = "0s",
  isPopup = false
}: {
  src: string;
  delay?: string;
  isPopup?: boolean;
}) {
  return (
    <div
      className={`
        w-[22vw] h-[22vw] min-w-[85px] min-h-[85px] max-w-[120px] max-h-[120px]
        md:w-32 md:h-32 lg:w-40 lg:h-40 
        rounded-full overflow-hidden border-2 border-[#d6b26f] 
        shadow-[0_0_15px_rgba(214,178,111,0.3)] 
        ${isPopup ? "animate-pop-up opacity-0" : "opacity-100"}
      `}
      style={isPopup ? { animationDelay: delay, animationFillMode: "forwards" } : {}}
    >
      <Image
        src={src}
        alt="CTRL-S activity"
        width={160}
        height={160}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
