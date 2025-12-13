"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Auto close mobile menu when resize to xl+
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="backdrop-blur bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-12 items-center">
          {/* LOGO */}
          <div className="col-span-6 xl:col-span-1 flex items-center">
            <a href="#about" className="hover:opacity-80 transition">
              <Image
                src="/icon.png"
                alt="CTRL-S"
                width={96}
                height={38}
                priority
              />
            </a>
          </div>

          {/* FULL MENU (xl+) */}
          <nav
            className="
              hidden xl:flex
              col-span-10
              items-center
              justify-center
              gap-10
              px-14
              py-4
              text-sm
              uppercase
              rounded-full
              bg-gradient-to-r
              from-[#7a5a23]
              via-[#d9c6a3]
              to-[#7a5a23]
              text-white
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            "
          >
            <NavItem href="#about" icon={<FaHome />} active>
              About Us
            </NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#clients">Our Clients</NavItem>
            <NavItem href="#feedback">Feedback</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>

          {/* HAMBURGER ( < xl ) */}
          <div className="col-span-6 xl:hidden flex justify-end">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="text-white"
            >
              {open ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="xl:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="
        absolute top-6 right-6
        text-white
        hover:opacity-80
        transition
      "
            aria-label="Close menu"
          >
            <HiX className="text-4xl" />
          </button>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl uppercase text-white">
            <MobileNavItem href="#about" setOpen={setOpen}>
              About Us
            </MobileNavItem>
            <MobileNavItem href="#services" setOpen={setOpen}>
              Services
            </MobileNavItem>
            <MobileNavItem href="#clients" setOpen={setOpen}>
              Our Clients
            </MobileNavItem>
            <MobileNavItem href="#feedback" setOpen={setOpen}>
              Feedback
            </MobileNavItem>
            <MobileNavItem href="#contact" setOpen={setOpen}>
              Contact
            </MobileNavItem>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Desktop Nav Item ---------- */
function NavItem({
  href,
  children,
  icon,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`
        relative flex items-center gap-3
        opacity-80 hover:opacity-100
        transition-all duration-300
        ${active ? "opacity-100" : ""}
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{children}</span>

      {active && (
        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/90" />
      )}
    </a>
  );
}

/* ---------- Mobile / Tablet Item ---------- */
function MobileNavItem({
  href,
  children,
  setOpen,
}: {
  href: string;
  children: React.ReactNode;
  setOpen: (v: boolean) => void;
}) {
  return (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="hover:opacity-80 transition"
    >
      {children}
    </a>
  );
}
