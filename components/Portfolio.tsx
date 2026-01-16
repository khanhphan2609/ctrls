import Image from "next/image";
import { FaExclamationCircle, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-20 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-24 text-3xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em]">
          <span className="text-gold-gradient">PORTFOLIO</span>
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center w-full">

          {/* LEFT COLUMN: QR CODE (Spans 5 cols) - DESKTOP ONLY */}
          <div className="hidden lg:flex lg:order-1 lg:col-span-5 flex-col items-center justify-center">
            <div className="bg-white p-4 shadow-2xl mb-6 w-full max-w-[350px]">
              <Image
                src="/imgs/qr.png"
                alt="QR Portfolio"
                width={500}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>
            <p className="text-xl lg:text-2xl font-bold tracking-[0.15em] text-center">
              SCAN FOR DOWNLOAD
            </p>
          </div>

          {/* RIGHT COLUMN: INFO (Spans 7 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center lg:items-end lg:text-right space-y-6 lg:pl-10">

            {/* 1. TITLE (Mobile Top) */}
            <h3 className="order-1 lg:order-2 text-[32px] sm:text-5xl lg:text-6xl font-serif text-white tracking-wide uppercase whitespace-nowrap">
              COMPANY PORTFOLIO
            </h3>

            {/* 2. LOGO (Mobile Second) */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-end w-full mb-4">
              <Image
                src="/logo-slogan.png"
                alt="CTRL S Logo"
                width={180}
                height={80}
                className="w-28 sm:w-32 lg:w-40 object-contain"
              />
            </div>

            {/* 3. QR CODE (Mobile Only - Order 3) */}
            <div className="order-3 lg:hidden flex flex-col items-center justify-center w-full mb-6">
              <div className="bg-white p-3 rounded-xl shadow-2xl mb-4 w-[180px]">
                <Image
                  src="/imgs/qr.png"
                  alt="QR Portfolio"
                  width={200}
                  height={200}
                  className="object-contain w-full h-auto"
                />
              </div>
              <p className="text-sm font-bold tracking-[0.15em] text-center opacity-90">
                SCAN FOR DOWNLOAD
              </p>
            </div>

            {/* 4. DIVIDER LINE (Visible on both - Order 4) */}
            <div className="order-4 lg:order-3 w-3/4 h-[2px] lg:bg-gradient-to-l bg-gradient-to-r from-[var(--gold)] to-transparent my-4 mx-auto lg:mr-0 lg:ml-auto" />

            {/* 5. COMPANY DETAILS (Mobile Fifth) */}
            <div className="order-5 lg:order-4 space-y-2">
              <p className="font-bold text-xl lg:text-2xl uppercase tracking-wider text-white">
                CÔNG TY TNHH CTRL-S
              </p>
              <p className="text-lg lg:text-xl font-medium text-gray-300">
                Hồ sơ năng lực
              </p>
            </div>

            {/* UPDATED DATE (Desktop Only) */}
            <div className="hidden lg:flex lg:order-5 items-center justify-end gap-3 text-gray-300 mt-6 md:text-xl">
              <FaExclamationCircle className="text-xl" />
              <span>Updated on November 2025</span>
            </div>
          </div>

          {/* MOBILE SOCIALS */}
          <div className="order-last lg:hidden flex items-center justify-center gap-6 mt-4 w-full">
            <a href="https://www.facebook.com/ctrlscoltd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.youtube.com/@ctrlscoltd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.tiktok.com/@ctrlscoltd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
              <FaTiktok size={20} />
            </a>
          </div>

        </div>
      </div>
    </section >
  );
}
