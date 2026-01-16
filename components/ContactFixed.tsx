"use client";

import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Image from "next/image";

export default function ContactFixed() {
  return (
    <div
      className="
        fixed
        right-4
        md:right-6
        top-1/2
        -translate-y-1/2
        z-[100]
        flex
        flex-col
        gap-3
        md:gap-4
      "
    >
      {/* FACEBOOK */}
      <IconWrapper bg="bg-blue-600">
        <a
          href="https://www.facebook.com/ctrlscoltd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-xl text-white" />
        </a>
      </IconWrapper>

      {/* YOUTUBE */}
      <IconWrapper bg="bg-red-600">
        <a
          href="https://www.youtube.com/@ctrlscoltd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-xl text-white" />
        </a>
      </IconWrapper>

      {/* TIKTOK */}
      <IconWrapper bg="bg-black">
        <a
          href="https://www.tiktok.com/@ctrlscoltd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="text-xl text-white" />
        </a>
      </IconWrapper>

      {/* ZALO (image) */}
      <IconWrapper bg="bg-blue-400">
        <a
          href="https://zalo.me/0939735071"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/imgs/zalo.webp"
            alt="Zalo"
            width={22}
            height={22}
          />
        </a>
      </IconWrapper>

      {/* EMAIL */}
      <IconWrapper bg="bg-orange-500">
        <a href="mailto:ctrlscompany@gmail.com">
          <HiMail className="text-xl text-white" />
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
        w-10 h-10
        md:w-12 md:h-12
        rounded-full
        flex items-center justify-center
        shadow-2xl
        transition-all duration-300
        hover:scale-110
        hover:-translate-x-1
        cursor-pointer
        ${bg}
      `}
    >
      {children}
    </div>
  );
}
