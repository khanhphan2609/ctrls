"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";

/* ================= PRODUCTS ================= */

type Product = {
  title: string;
  images: string[];
};

const PRODUCTS: Product[] = [
  {
    title: "CHƯƠNG TRÌNH 20/11 – NHỮNG NGƯỜI THẦY CHÂN CHÍNH 2025",
    images: [
      "/imgs/products/nguoi-thay-chan-chinh/1.jpg",
      "/imgs/products/nguoi-thay-chan-chinh/2.jpg",
      "/imgs/products/nguoi-thay-chan-chinh/3.jpg",
    ],
  },
  {
    title: "NỐT THƯƠNG 2",
    images: [
      "/imgs/products/not-thuong-2/1.jpg",
      "/imgs/products/not-thuong-2/2.jpg",
      "/imgs/products/not-thuong-2/3.jpg",
    ],
  },
  {
    title: "WOWFEST – VIBE ON THE WHEELS 2025",
    images: [
      "/imgs/products/wowfest/1.jpg",
      "/imgs/products/wowfest/2.jpg",
      "/imgs/products/wowfest/3.jpg",
    ],
  },
  {
    title: "HOA HẬU ĐẠI DƯƠNG 2025",
    images: [
      "/imgs/products/hoa-hau-dai-duong/1.jpg",
      "/imgs/products/hoa-hau-dai-duong/2.jpg",
      "/imgs/products/hoa-hau-dai-duong/3.jpg",
    ],
  },
  {
    title: "SEA GAME 31",
    images: [
      "/imgs/products/sea-game-31/1.jpg",
      "/imgs/products/sea-game-31/2.jpg",
      "/imgs/products/sea-game-31/3.jpg",
    ],
  },
  {
    title: "TÀU BLUE DRAGON 01 - CẢNG HẢI LÍNH",
    images: [
      "/imgs/products/blue-dragon/1.jpg",
      "/imgs/products/blue-dragon/2.jpg",
      "/imgs/products/blue-dragon/3.jpg",
    ],
  },
];

/* ================= PRODUCT CARD ================= */

function ProductCard({ item }: { item: Product }) {
  return (

    <div className="space-y-8 px-2">

      <h3 className="text-center text-sm uppercase tracking-wide opacity-90">
        {item.title}
      </h3>

      <div className="flex gap-4">
        <div className="flex-1 grid gap-4">
          {item.images.slice(0, 2).map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="relative aspect-[1/2] rounded-2xl overflow-hidden">
            <Image
              src={item.images[2]}
              alt=""
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


/* ================= PAGE ================= */

export default function Products() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setActiveVideo(videoId);
  }

  return (
    <section id="products" className="text-white py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        <h2 className="hidden md:block text-center text-4xl md:text-5xl font-bold tracking-wider">
          <span className="text-gold-gradient">OUR PRODUCTS</span>
        </h2>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-20">

          {PRODUCTS.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>

        {/* ================= MOBILE PRODUCT TABLE (ADDED PER REQUEST) ================= */}
        <div className="md:hidden space-y-12 pt-10 border-t border-white/10">
          <h2 className="text-center text-4xl md:text-4xl font-bold tracking-wider">
            <span className="text-gold-gradient">OUR PRODUCTS</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {PRODUCTS.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-center text-[10px] sm:text-xs uppercase font-bold tracking-tight opacity-90 min-h-[2rem] flex items-center justify-center">
                  {item.title}
                </h3>
                <div className="flex gap-1.5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    {item.images.slice(0, 2).map((img, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image src={img} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="relative h-full w-full rounded-lg overflow-hidden">
                      <Image src={item.images[2]} alt="" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED VIDEOS SECTION */}
        <div className="space-y-16">
          <h2 className="text-center text-4xl md:text-4xl font-bold tracking-wider">
            <span className="text-gold-gradient">OUR PRODUCTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* VIDEO 1 */}
            <div className="space-y-4">
              <div
                onClick={() => openVideo("ELdGI7vYrZg")}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--primary)] transition-all duration-500"
              >
                <Image
                  src="https://img.youtube.com/vi/ELdGI7vYrZg/maxresdefault.jpg"
                  alt="Video 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-white mt-3 group-hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm md:text-xl  uppercase tracking-wider text-white">
                CHƯƠNG TRÌNH 20/11 - <br /> NGƯỜI THẦY CHÂN CHÍNH 2025
              </p>
            </div>

            {/* VIDEO 2 */}
            <div className="space-y-4">
              <div
                onClick={() => openVideo("KRgqpJDbRgY")}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--primary)] transition-all duration-500"
              >
                <Image
                  src="https://img.youtube.com/vi/KRgqpJDbRgY/maxresdefault.jpg"
                  alt="Video 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-white mt-3 group-hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm md:text-xl  uppercase tracking-wider text-white">
                ĐÊM NHẠC CHẤP TAY HOA
              </p>
            </div>

            {/* VIDEO 3 */}
            <div className="space-y-4">
              <div
                onClick={() => openVideo("ktpfCVIsbkk")}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--primary)] transition-all duration-500"
              >
                <Image
                  src="https://img.youtube.com/vi/ktpfCVIsbkk/maxresdefault.jpg"
                  alt="Video 3"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-white mt-3 group-hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm md:text-xl  uppercase tracking-wider text-white">
                TÀU BLUE DRAGON 1 <br /> CẢNG HẢI LINH - LNG CÁI MÉP
              </p>
            </div>

            {/* VIDEO 4 */}
            <div className="space-y-4">
              <div
                onClick={() => openVideo("MjXi8684Bbo")}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[var(--primary)] transition-all duration-500"
              >
                <Image
                  src="https://img.youtube.com/vi/MjXi8684Bbo/maxresdefault.jpg"
                  alt="Video 4"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 text-white mt-3 group-hover:scale-110 transition-transform">
                    <FaPlay className="ml-1 text-xl" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm md:text-xl  uppercase tracking-wider text-white">
                CÔNG TY TNHH YOUNG IL VIỆT NAM
              </p>
            </div>
          </div>
        </div>



        {/* ================= VIDEO MODAL ================= */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all"
              >
                <FaTimes size={20} />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full"
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
