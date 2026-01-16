"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-24 text-4xl md:text-6xl font-bold tracking-wider">
          <span className="text-gold-gradient bg-clip-text text-transparent">
            CONTACT INFORMATION
          </span>
        </h2>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* COMPANY */}
          <div className="space-y-6 ">
            <div className="flex justify-center items-center w-48 h-32 border-b border-white">
              <Image
                src="/logo-slogan.png"
                alt="CTRL-S"
                width={140}
                height={120}
                className="object-contain mt-6"
              />
            </div>

            <div className="text-base space-y-3 opacity-120 ">
              <p className=" uppercase ">
                Công ty TNHH CTRL-S
              </p>
              <p>MST: 0316739083</p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/ctrlscoltd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.youtube.com/@ctrlscoltd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@ctrlscoltd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[28px] mt-10 tracking-wide uppercase">
              Services
            </h3>

            <ul className="space-y-3 text-xl opacity-100">
              <li>Full show package</li>
              <li>Production</li>
              <li>Media – Entertainment</li>
            </ul>
          </div>

          {/* PORTFOLIO */}
          <div className="space-y-4 mr-14">
            <h3 className="font-semibold text-[24px] flex justify-center items-center mt-10 tracking-wide uppercase">
              Portfolio
            </h3>

            <a
              href="/ctrls-portfolio.pdf"
              download
              className="text-sm opacity-100 underline text-[22px] flex justify-center items-center hover:text-[var(--primary)] transition"
            >
              Download here
            </a>

            <Image
              src="/imgs/qr.png"
              alt="QR Portfolio"
              width={140}
              height={140}
              className="flex justify-center items-center ml-11"
            />
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="font-semibold text-[24px] mt-10 tracking-wide uppercase">
              Contact
            </h3>

            <div className="space-y-4 text-sm opacity-100">
              {/* ADDRESS */}
              <a
                href="https://maps.google.com/?q=9/11B/5 Phạm Hùng, Bình Hưng, TP.HCM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[var(--primary)] transition"
              >
                <FaMapMarkerAlt size={24} className="mt-1 text-[var(--primary)] shrink-0" />
                <span className="text-xl whitespace-nowrap">
                  9/11B/5 Phạm Hùng St, Bình Hưng Ward,
                  Ho Chi Minh City
                </span>
              </a>

              {/* PHONE */}
              <a
                href="https://zalo.me/0939735071"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[var(--primary)] transition"
              >
                <FaPhoneAlt size={24} className="text-[var(--primary)] shrink-0" />
                <span className="text-xl whitespace-nowrap">0939 735 071</span>
              </a>

              {/* EMAIL 1 */}
              <a
                href="mailto:ctrlscompany@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--primary)] transition"
              >
                <FaEnvelope size={24} className="text-[var(--primary)] shrink-0" />
                <span className="text-xl whitespace-nowrap">ctrlscompany@gmail.com</span>
              </a>

              {/* EMAIL 2 */}
              <a
                href="mailto:truongbao.ctrls@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--primary)] transition"
              >
                <FaEnvelope size={24} className="text-[var(--primary)] shrink-0" />
                <span className="text-xl whitespace-nowrap">truongbao.ctrls@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="md:hidden flex flex-col items-center text-center space-y-16">
          {/* LOGO & SOCAL */}
          <div className="flex flex-col items-center space-y-6">
            <div className="flex justify-center items-center w-56 h-32 border-b border-white/20">
              <Image
                src="/logo-slogan.png"
                alt="CTRL-S"
                width={160}
                height={140}
                className="object-contain"
              />
            </div>

            <div className="space-y-2 mt-4">
              <p className="font-bold text-2xl uppercase tracking-wider text-gold-gradient">
                CÔNG TY TNHH CTRL-S
              </p>
              <p className="opacity-80 text-lg">MST: 0316739083</p>
            </div>

            <div className="flex gap-6 mt-4">
              {[
                { Icon: FaFacebookF, link: "https://www.facebook.com/ctrlscoltd" },
                { Icon: FaYoutube, link: "https://www.youtube.com/@ctrlscoltd" },
                { Icon: FaTiktok, link: "https://www.tiktok.com/@ctrlscoltd" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)] transition-transform hover:scale-110"
                >
                  <item.Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* INFO BLOCKS */}
          <div className="grid grid-cols-1 gap-14 w-full">
    
            {/* PORTFOLIO */}
            <div className="space-y-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold tracking-widest text-gold-gradient uppercase">
                PORTFOLIO
              </h3>
              <div className="flex flex-col items-center gap-6">
                <a
                  href="/ctrls-portfolio.pdf"
                  download
                  className="text-lg font-medium underline underline-offset-8 decoration-[var(--gold)]"
                >
                  Download here
                </a>
                <div className="bg-white p-3 rounded-xl shadow-2xl">
                  <Image src="/imgs/qr.png" alt="QR" width={100} height={100} />
                </div>
              </div>
            </div>

            {/* CONTACT DETAIL */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-widest text-gold-gradient uppercase">
                CONTACT
              </h3>
              <div className="flex flex-col items-center space-y-6 px-4">
                {[
                  { icon: FaMapMarkerAlt, text: "9/11B/5 Phạm Hùng St, Bình Hưng Ward, HCM", link: "https://maps.google.com" },
                  { icon: FaPhoneAlt, text: "0939 735 071", link: "https://zalo.me/0939735071" },
                  { icon: FaEnvelope, text: "ctrlscompany@gmail.com", link: "mailto:ctrlscompany@gmail.com" },
                  { icon: FaEnvelope, text: "truongbao.ctrls@gmail.com", link: "mailto:truongbao.ctrls@gmail.com" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center gap-5 group w-full max-w-sm text-center"
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                      <item.icon size={22} />
                    </div>
                    <span className="text-lg opacity-90 leading-tight">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div suppressHydrationWarning className="mt-16 md:mt-24 text-center text-[9px] sm:text-[10px] md:text-xs opacity-50 px-4">
          © {new Date().getFullYear()} CTRL-S. All rights reserved.
        </div>
      </div>
    </section>
  );
}
