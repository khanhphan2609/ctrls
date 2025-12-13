"use client";

import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Image from "next/image";

export default function ContactFixed() {
  return (
    <div
      className="
        fixed
        right-6
        bottom-1/2
        translate-y-1/2
        z-50
        flex
        flex-col
        gap-4
      "
    >
      {/* EMAIL */}
      <IconWrapper bg="bg-blue-500">
        <a href="mailto:ctrlscompany@gmail.com">
          <HiMail className="text-xl text-white" />
        </a>
      </IconWrapper>

      {/* FACEBOOK */}
      <IconWrapper bg="bg-blue-600">
        <a
          href="https://www.facebook.com/ctrlscoltd"
          target="_blank"
        >
          <FaFacebookF className="text-xl text-white" />
        </a>
      </IconWrapper>

      {/* ZALO (image) */}
      <IconWrapper bg="bg-blue-400">
        <a
          href="https://zalo.me/0939735071"
          target="_blank"
        >
          <Image
            src="/zalo.webp"
            alt="Zalo"
            width={22}
            height={22}
          />
        </a>
      </IconWrapper>

      {/* TIKTOK */}
      <IconWrapper bg="bg-black">
        <a
          href="https://www.tiktok.com/@ctrlscoltd"
          target="_blank"
        >
          <FaTiktok className="text-xl text-white" />
        </a>
      </IconWrapper>
    </div>
  );
}

/* ---------- Icon Wrapper ---------- */
function IconWrapper({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className={`
        w-12 h-12
        rounded-full
        flex items-center justify-center
        shadow-lg
        transition-all duration-300
        hover:scale-110
        ${bg}
      `}
    >
      {children}
    </div>
  );
}
