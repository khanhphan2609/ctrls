"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

/* ===== NAV CONFIG ===== */
const NAV_ITEMS = [
  { id: "about", label: "About us" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Profile" },
  { id: "clients", label: "Case Study" },
  { id: "contact", label: "Contact" },
];

const MOBILE_NAV_ITEMS = NAV_ITEMS;

const GRADIENT =
  "bg-[linear-gradient(45deg,#efd18a_0%,#e1b85f_18%,#cf9f3d_50%,#e1b85f_82%,#efd18a_100%)]";

export default function Header() {
  const [active, setActive] = useState("about");
  const [isScrolling, setIsScrolling] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setIsScrolling(true);
    setActive(id);

    const isMobile = window.innerWidth < 1280; // Matches xl breakpoint
    let offset = 0;

    if (id === "about") {
      offset = 0;
    } else if (isMobile) {
      // Mobile: Negative offsets compensate for component padding (py-20, py-32)
      // so the title is framed perfectly just below the 60px fixed header.
      if (id === "portfolio") offset = -20; // 80 - 20 = 60px (under bar)
      else if (id === "services") offset = -20; // Corrected jump for py-20 section
      else offset = -68; // 128 - 68 = 60px (under bar)
    } else {
      offset = 100;
    }

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Reset isScrolling after animation completes
    setTimeout(() => setIsScrolling(false), 1000);
  };

  /* ===== SCROLL SPY ===== */
  useEffect(() => {
    const onScroll = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isMobile = window.innerWidth < 1280;

      // Handle bottom of page - more generous threshold for short mobile devices
      if (scrollPosition + windowHeight >= documentHeight - (isMobile ? 150 : 50)) {
        setActive("contact");
        return;
      }

      const y = scrollPosition + (isMobile ? 110 : 150);
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
  }, [isScrolling]);

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
      <div className="xl:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#about" className="flex-shrink-0">
            <Image src="/logo-slogan.png" alt="CTRL-S" width={70} height={28} className="object-contain" />
          </a>

          <a href="https://zalo.me/0939735071" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-[#d6b26f] text-[#d6b26f]">
              <FaPhoneAlt className="text-[10px] sm:text-xs" />
            </span>
            <span className="text-[11px] sm:text-sm font-bold text-white whitespace-nowrap">0939 735 071</span>
          </a>
        </div>
      </div>

      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden xl:block">
        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-12 items-center">
          {/* LOGO */}
          <div className="col-span-2">
            <Link href="/">
              <Image src="/logo-slogan.png" alt="CTRL-S" width={140} height={80} />
            </Link>
          </div>

          {/* MENU */}
          <div className="col-span-8 flex justify-center">
            <nav
              ref={navRef}
              className={`
                relative flex items-center gap-10
                px-12 py-4 rounded-2xl 
                  text-white
                ${GRADIENT}
              `}
            >
              {/* MENU ITEM */}
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
                  className={`flex  text-base md:text-2xl items-center gap-2 transition ${active === item.id ? "opacity-100" : "opacity-70"
                    }`}
                >
                  {item.id === "about" ? <FaHome /> : ""}
                  {item.label}
                </a>
              ))}

              <span
                ref={indicatorRef}
                className="absolute bottom-2 left-0 h-[2px] bg-white rounded-full transition-all duration-300"
              />
            </nav>
          </div>
          <div className="col-span-2 flex justify-end">
            <a
              href="https://zalo.me/0939735071"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#d6b26f] text-[#d6b26f]">
                <FaPhoneAlt className="text-xs" />
              </span>
              <span className="text-sm lg:text-base font-bold text-white">
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
              className={`flex flex-col items-center gap-1 transition ${active === item.id ? "opacity-100 bg-white/20" : "opacity-70"
                }`}
            >
              <span className="text-[9px] uppercase">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header >
  );
}
