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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          {/* COMPANY */}
          <div className="space-y-6">
            <Image
              src="/logo-slogan.png"
              alt="CTRL-S"
              width={120}
              height={60}
              className="object-contain"
            />

            <div className="text-sm space-y-2 opacity-90">
              <p className="font-semibold uppercase">
                Công ty TNHH CTRL-S
              </p>
              <p>MST: 0316739083</p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="space-y-6">
            <h3 className="font-semibold tracking-wide uppercase">
              Services
            </h3>

            <ul className="space-y-3 text-sm opacity-90">
              <li>Full show package</li>
              <li>Production</li>
              <li>Media – Entertainment</li>
            </ul>
          </div>

          {/* PORTFOLIO */}
          <div className="space-y-6">
            <h3 className="font-semibold tracking-wide uppercase">
              Portfolio
            </h3>

            <a
              href="/ctrls-portfolio.pdf"
              download
              className="text-sm opacity-90 underline hover:text-[var(--primary)] transition"
            >
              Download here
            </a>

            <Image
              src="/imgs/qr.png"
              alt="QR Portfolio"
              width={140}
              height={140}
              className="rounded-lg"
            />
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h3 className="font-semibold tracking-wide uppercase">
              Contact
            </h3>

            <div className="space-y-4 text-sm opacity-90">
              {/* ADDRESS */}
              <a
                href="https://maps.google.com/?q=9/11B/5 Phạm Hùng, Bình Hưng, TP.HCM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[var(--primary)] transition"
              >
                <FaMapMarkerAlt className="mt-1 text-[var(--primary)]" />
                <span>
                  9/11B/5 Phạm Hùng St, Bình Hưng Ward,
                  Ho Chi Minh City
                </span>
              </a>

              {/* PHONE */}
              <a
                href="tel:0939735071"
                className="flex items-center gap-3 hover:text-[var(--primary)] transition"
              >
                <FaPhoneAlt className="text-[var(--primary)]" />
                <span>0939 735 071</span>
              </a>

              {/* EMAIL 1 */}
              <a
                href="mailto:ctrlscompany@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--primary)] transition"
              >
                <FaEnvelope className="text-[var(--primary)]" />
                <span>ctrlscompany@gmail.com</span>
              </a>

              {/* EMAIL 2 */}
              <a
                href="mailto:truongbao.ctrls@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--primary)] transition"
              >
                <FaEnvelope className="text-[var(--primary)]" />
                <span>truongbao.ctrls@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 text-center text-xs opacity-50">
          © {new Date().getFullYear()} CTRL-S. All rights reserved.
        </div>
      </div>
    </section>
  );
}
