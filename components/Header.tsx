"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { id: "about", label: "About Us", icon: <FaHome /> },
  { id: "services", label: "Services" },
  { id: "clients", label: "Our Clients" },
  { id: "feedback", label: "Feedback" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* Auto close mobile menu when resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
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

  /* Move underline */
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
      <div className="backdrop-blur bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-12 items-center">
          {/* LOGO */}
          <div className="col-span-6 xl:col-span-1 flex items-center">
            <a href="#about">
              <Image src="/icon.png" alt="CTRL-S" width={96} height={38} />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex col-span-10 justify-center">
            <nav
              ref={navRef}
              className="
                relative flex items-center gap-10
                px-14 py-4 text-lg uppercase rounded-full
                bg-gradient-to-r
                from-[var(--primary)]
                via-[var(--white)]
                to-[var(--primary)]
                text-[var(--black)]
                font-bold
                shadow-[0_10px_40px_rgba(0,0,0,0.8)]
              "
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
                  className={`
                    relative z-10 flex items-center gap-3
                    transition-all duration-300 ease-out
                    ${active === item.id ? "opacity-100" : "opacity-70"}
                  `}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </a>
              ))}

              {/* SLIDING UNDERLINE */}
              <span
                ref={indicatorRef}
                className="
                  absolute bottom-2 left-0
                  h-[2px] rounded-full
                  bg-[var(--black)]
                  transition-all duration-300 ease-out
                "
              />
            </nav>
          </div>

          {/* MOBILE BUTTON */}
          <div className="col-span-6 xl:hidden flex justify-end">
            <button onClick={() => setOpen(!open)} className="text-white">
              {open ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="xl:hidden fixed inset-0 bg-black/90 backdrop-blur animate-fadeIn z-40">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="
        absolute top-6 right-6
        text-white
        hover:opacity-80
        transition
      "
          >
            <HiX className="text-4xl" />
          </button>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl uppercase text-white">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(item.id);
                  setOpen(false);
                  scrollToSection(item.id);
                }}
                className={`transition ${
                  active === item.id ? "opacity-100" : "opacity-60"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
