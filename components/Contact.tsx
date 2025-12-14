import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2
          className="font-serif
  text-gold-gradient
            text-5xl md:text-6xl tracking-wider mb-20
            text-center text-shadow
          "
        >
          CONTACT INFORMATION
        </h2>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-20 text-shadow ">
          {/* LEFT */}
          <div className="space-y-16 text-center md:text-left">
            {/* CONTACT */}
            <div>
              <h3 className="text-3xl tracking-wider mb-10">CONTACT</h3>

              {/* PHONE */}
              <div className="mb-8">
                <p className="uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:0939735071" className="text-xl hover:text-[var(--primary)]">0939 735 071</a>
              </div>

              {/* EMAIL */}
              <div className="mb-8">
                <p className="uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:ctrlscompany@gmail.com" className="text-xl hover:text-[var(--primary)]">ctrlscompany@gmail.com</a><br />
                <a href="mailto:truongbao.ctrls@gmail.com" className="text-xl hover:text-[var(--primary)]">truongbao.ctrls@gmail.com</a>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-3xl tracking-wider mb-10">SOCIAL MEDIA</h3>

              <p className="mb-4 text-lg break-all md:break-normal">
                Fanpage:{" "}
                <a
                  href="https://www.facebook.com/ctrlscoltd"
                  target="_blank"
                  className="underline hover:text-[var(--primary)]"
                >
                  https://www.facebook.com/ctrlscoltd
                </a>
              </p>

              <p className="text-lg break-all md:break-normal">
                Tiktok:{" "}
                <a
                  href="https://www.tiktok.com/@ctrlscoltd"
                  target="_blank"
                  className="underline hover:text-[var(--primary)]"
                >
                  https://www.tiktok.com/@ctrlscoltd
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-16 text-center md:text-left flex flex-col items-center md:items-start">
            {/* ADDRESS */}
            <div>
              <h3 className="text-3xl tracking-wider mb-10">ADDRESS</h3>

              <p className="uppercase tracking-widest mb-2">
                HO CHI MINH OFFICE
              </p>
              <p className="text-xl leading-relaxed max-w-md mx-auto md:mx-0">
                9/11B/5 Pham Hung St, Chanh Hung Ward, Ho Chi Minh City.
              </p>
            </div>

            {/* QR */}
            <div>
              <Image
                src="/qr.png"
                alt="QR Code"
                width={160}
                height={160}
                className="border border-[var(--primary)]/90 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
