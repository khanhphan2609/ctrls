"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Feedback() {
  const categories = [
    "Full show package",
    "Production",
    "Media - Entertainment",
  ];

  const feedbacks = [
    {
      category: "Full show package",
      name: "ThS Chung Quốc Phong",
      role: "Trưởng phòng Tuyển sinh",
      company: "HUFLIT",
      avatar: "/feedback/feedback-1.png",
      quote:
        "CTRL-S thể hiện sự linh hoạt và chuyên nghiệp cao khi tổ chức được đa dạng các loại hình, đảm bảo không khí luôn sôi động và gắn kết.",
    },
    {
      category: "Production",
      name: "ThS Chung Quốc Phong",
      role: "Trưởng phòng Tuyển sinh",
      company: "HUFLIT",
      avatar: "/feedback/feedback-1.png",
      quote:
        "CTRL-S thể hiện sự linh hoạt và chuyên nghiệp cao khi tổ chức được đa dạng các loại hình, đảm bảo không khí luôn sôi động và gắn kết.",
    },
    {
      category: "Media - Entertainment",
      name: "ThS Chung Quốc Phong",
      role: "Trưởng phòng Tuyển sinh",
      company: "HUFLIT",
      avatar: "/feedback/feedback-1.png",
      quote:
        "CTRL-S thể hiện sự linh hoạt và chuyên nghiệp cao khi tổ chức được đa dạng các loại hình, đảm bảo không khí luôn sôi động và gắn kết.",
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0]);
  const [index, setIndex] = useState(0);

  const filtered = feedbacks.filter(
    (item) => item.category === activeTab
  );

  // 👉 Bảo vệ crash
  if (filtered.length === 0) return null;

  const prev = () =>
    setIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  return (
    <section
      id="feedback"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif tracking-wider text-shadow">
            FEEDBACK
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-serif tracking-wider text-gold-gradient text-shadow">
            WHAT OUR CLIENTS SAY
          </h3>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center mb-20 overflow-x-auto">
          <div
            className="
              flex rounded-full overflow-hidden min-w-max
              bg-gradient-to-r
              from-[var(--primary)]
              via-[var(--black)]
              to-[var(--primary)]
              shadow-lg
            "
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {setActiveTab(cat); setIndex(0);}}
                className={`
                  px-8 py-3 text-sm md:text-base uppercase tracking-wider
                  whitespace-nowrap
                  transition-all duration-300 
                  ${
                    activeTab === cat
                      ? "bg-black/30 text-white"
                      : "text-white/80 hover:bg-black/20"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div
          className={`hidden md:grid gap-12 mb-20 ${
            filtered.length === 1
              ? "grid-cols-1 place-items-center"
              : filtered.length === 2
              ? "grid-cols-2 place-items-center"
              : "grid-cols-3"
          }`}
        >
          {filtered.map((item, i) => (
            <FeedbackCard key={i} {...item} />
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden flex items-center justify-center gap-6 mb-20">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-white/60 transition"
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <FeedbackCard {...filtered[index]} />

          <button
            onClick={next}
            className="p-2 rounded-full border border-white/60 transition"
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>

      </div>
    </section>
  );
}

/* ---------- Feedback Card ---------- */
function FeedbackCard({
  name,
  role,
  company,
  avatar,
  quote,
}: {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}) {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto">

      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#7a5a23] shadow-lg mb-8">
        <Image
          src={avatar}
          alt={name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      <p className="text-lg italic leading-relaxed mb-8 text-shadow">
        “{quote}”
      </p>

      <h4 className="text-xl tracking-wide text-shadow">{name}</h4>
      <p className="text-sm uppercase tracking-wider opacity-80 text-shadow">
        {role} · {company}
      </p>
    </div>
  );
}
