import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-24 text-4xl md:text-6xl font-bold tracking-widest">
          <span className="text-gold-gradient">PORTFOLIO</span>
        </h2>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT - QR */}
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white p-4 rounded-xl">
              <Image
                src="/imgs/qr.png" // thay bằng QR thật
                alt="QR Portfolio"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>
            <p className="text-sm tracking-widest opacity-80 font-bold">
              SCAN FOR DOWNLOAD
            </p>
          </div>

          {/* RIGHT - INFO */}
          <div className="space-y-8 flex flex-col lg:items-end lg:text-right items-center">
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo-slogan.png"
                alt="CTRL S Logo"
                width={200}
                height={200}
              />
            </div>

            {/* COMPANY PORTFOLIO */}
            <h3 className="text-3xl md:text-5xl font-serif tracking-wider">
              COMPANY PORTFOLIO
            </h3>

            {/* LINE */}
            <div className="w-32 h-[2px] bg-gradient-to-r from-[var(--primary)] to-transparent" />

            {/* COMPANY NAME */}
            <div>
              <p className="font-semibold uppercase tracking-wide">
                CÔNG TY TNHH CTRL S
              </p>
              <p className="opacity-80 mt-1">Hồ sơ năng lực</p>
            </div>

            {/* UPDATED */}
            <div className="flex items-center gap-2 opacity-80 text-sm">
              <FiAlertCircle />
              <span>Updated on November 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
