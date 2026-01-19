"use client";

import { FaFacebookF, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
    {
        name: "Facebook",
        icon: <FaFacebookF size={20} />,
        url: "https://www.facebook.com/ctrlscoltd",
        color: "bg-[#1877F2]",
    },
    {
        name: "Youtube",
        icon: <FaYoutube size={20} />,
        url: "https://www.youtube.com/@ctrlsprofile",
        color: "bg-[#FF0000]",
    },
    {
        name: "Tiktok",
        icon: <FaTiktok size={20} />,
        url: "https://www.tiktok.com/@ctrls_coltd",
        color: "bg-black",
    },
    {
        name: "Zalo",
        icon: (
            <Image
                src="/imgs/zalo.webp"
                alt="Zalo"
                width={20}
                height={20}
                className="object-contain"
            />
        ),
        url: "https://zalo.me/0939735071",
        color: "bg-[#0068FF]",
    },
    {
        name: "Email",
        icon: <FaEnvelope size={20} />,
        url: "mailto:ctrls.event@gmail.com",
        color: "bg-[#F89E1B]",
    },
];

export default function FloatingSocials() {
    return (
        <div
            className="
        fixed z-[9999] flex flex-col gap-3
        bottom-80 right-4
        md:top-1/2 md:-translate-y-1/2 md:bottom-auto
      "
        >
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`
            ${social.color}
            w-10 h-10 md:w-12 md:h-12
            flex items-center justify-center
            rounded-full text-white
            shadow-lg
            hover:scale-110
            transition-all duration-300
          `}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
