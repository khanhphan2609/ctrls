"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    title: "TÀU BLUE DRAGON 01 – CẢNG HẢI LINH",
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
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);

  const total = PRODUCTS.length;

  const next = () => setCurrent((i) => (i + 1) % total);
  const prev = () => setCurrent((i) => (i - 1 + total) % total);

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ===== TOUCH HANDLERS ===== */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
  };

  return (
    <section id="products" className="text-white py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-6xl font-bold tracking-wider">
          <span className="text-gold-gradient">OUR PRODUCTS</span>
        </h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="block md:hidden space-y-10">
          <div
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {PRODUCTS.map((item, idx) => (
                <div key={idx} className="min-w-full">
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3">
            {PRODUCTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition
                  ${
                    idx === current
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-20">
          {PRODUCTS.map((item, idx) => (
            <ProductCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
