"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaHome,
  FaPhoneAlt,
  FaServicestack,
  FaBriefcase,
  FaCommentDots,
  FaEnvelope,
} from "react-icons/fa";

/* ===== NAV CONFIG ===== */
const NAV_ITEMS = [
  { id: "about", label: "About Us", icon: <FaHome /> },
  { id: "services", label: "Services", icon: <FaServicestack /> },
  { id: "portfolio", label: "Portfolio", icon: <FaBriefcase /> },
  { id: "clients", label: "Case Study", icon: <FaCommentDots /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const MOBILE_NAV_ITEMS = NAV_ITEMS;

const GRADIENT =
  "bg-[linear-gradient(180deg,#d6b26f_0%,#b37c11_50%,#d6b26f_100%)]";

export default function Header() {
  const [active, setActive] = useState("about");

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ===== SCROLL SPY ===== */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);
        if (
          section &&
          y >= section.offsetTop &&
          y < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== DESKTOP INDICATOR ===== */
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const el = navRef.current.querySelector(
      `[data-id="${active}"]`
    ) as HTMLElement;

    if (el) {
      indicatorRef.current.style.width = `${el.offsetWidth}px`;
      indicatorRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [active]);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* ================= MOBILE TOP BAR ================= */}
      <div className="xl:hidden backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 items-center">
          <a href="#about">
            <Image src="/logo-slogan.png" alt="CTRL-S" width={80} height={32} />
          </a>

          <a href="tel:0939735071" className="flex justify-end items-center gap-2">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#d6b26f] text-[#d6b26f]">
              <FaPhoneAlt className="text-sm" />
            </span>
            <span className="text-sm font-bold text-white">0939 735 071</span>
          </a>
        </div>
      </div>

      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden xl:block backdrop-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-12 items-center">
          {/* LOGO */}
          <div className="col-span-2">
            <a href="">
              <Image src="/logo-slogan.png" alt="CTRL-S" width={100} height={40} />
            </a>
          </div>

          {/* MENU */}
          <div className="col-span-8 flex justify-center">
            <nav
              ref={navRef}
              className={`
                relative flex items-center gap-10
                px-14 py-4 rounded-full
                text-sm uppercase font-bold text-white
                ${GRADIENT}
                shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              `}
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  data-id={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.id);
                    scrollToSection(item.id);
                  }}
                  className={`flex items-center gap-2 transition ${
                    active === item.id ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}

              <span
                ref={indicatorRef}
                className="absolute bottom-2 left-0 h-[2px] bg-white rounded-full transition-all duration-300"
              />
            </nav>
          </div>

          {/* HOTLINE */}
          <div className="col-span-2 flex justify-end">
            <a href="tel:0939735071" className="flex items-center gap-2">
              <span className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-[#d6b26f] text-[#d6b26f]">
                <FaPhoneAlt className="text-xs" />
              </span>
              <span className="text-sm font-bold text-white">
                0939 735 071
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-4">
        <nav
          className={`
            grid grid-cols-5 gap-1
            px-3 py-2 rounded-full
            text-white
            ${GRADIENT}
            shadow-xl
          `}
        >
          {MOBILE_NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                scrollToSection(item.id);
              }}
              className={`flex flex-col items-center gap-1 transition ${
                active === item.id ? "opacity-100 bg-white/20" : "opacity-70"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-[9px] uppercase">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
