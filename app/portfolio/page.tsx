export const metadata = {
  title: "Company Portfolio | CTRL-S",
};

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h1 className="text-center mb-12 text-4xl md:text-5xl font-bold tracking-wider">
          <span className="text-gold-gradient bg-clip-text text-transparent">
            COMPANY PORTFOLIO
          </span>
        </h1>

        {/* PDF PREVIEW */}
        <div className="relative w-full aspect-[3/4] border border-[var(--primary)] rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="/ctrls-portfolio.pdf"
            className="w-full h-full"
            loading="lazy"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <a
            href="/ctrl-portfolio.pdf"
            target="_blank"
            className="px-8 py-3 rounded-full border border-[var(--primary)] hover:bg-[var(--primary)] transition text-center"
          >
            View Fullscreen
          </a>

          <a
            href="/ctrl-portfolio.pdf"
            download
            className="px-8 py-3 rounded-full bg-[var(--primary)] text-black font-semibold hover:opacity-90 transition text-center"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
