import Image from "next/image";

/* ================= PRODUCTS ================= */

type Product = {
  title: string;
  images: string[];
};

const PRODUCTS: Product[] = [
  {
    title: "CHƯƠNG TRÌNH 20/11 – NHỮNG NGƯỜI THẦY CHÂN CHÍNH 2025",
    images: ["/imgs/products/nguoi-thay-chan-chinh/1.jpg", "/imgs/products/nguoi-thay-chan-chinh/2.jpg", "/imgs/products/nguoi-thay-chan-chinh/3.jpg"],
  },
  {
    title: "NỐT THƯƠNG 2",
    images: ["/imgs/products/not-thuong-2/1.jpg", "/imgs/products/not-thuong-2/2.jpg", "/imgs/products/not-thuong-2/3.jpg"],
  },
  {
    title: "WOWFEST – VIBE ON THE WHEELS 2025",
    images: ["/imgs/products/wowfest/1.jpg", "/imgs/products/wowfest/2.jpg", "/imgs/products/wowfest/3.jpg"],
  },
  {
    title: "HOA HẬU ĐẠI DƯƠNG 2025",
    images: ["/imgs/products/hoa-hau-dai-duong/1.jpg", "/imgs/products/hoa-hau-dai-duong/2.jpg", "/imgs/products/hoa-hau-dai-duong/3.jpg"],
  },
  {
    title: "SEA GAME 31",
    images: ["/imgs/products/sea-game-31/1.jpg", "/imgs/products/sea-game-31/2.jpg", "/imgs/products/sea-game-31/3.jpg"],
  },
  {
    title: "TÀU BLUE DRAGON 01 – CẢNG HẢI LINH",
    images: ["/imgs/products/blue-dragon/1.jpg", "/imgs/products/blue-dragon/2.jpg", "/imgs/products/blue-dragon/3.jpg"],
  },
];

/* ================= VIDEOS ================= */

type Video = {
  title: string;
  youtubeId: string;
};

const VIDEOS: Video[] = [
  {
    title: "CHƯƠNG TRÌNH 20/11 – NHỮNG NGƯỜI THẦY CHÂN CHÍNH",
    youtubeId: "ELdGI7vYrZg ",
  },
  {
    title: "ĐÊM NHẠC CHẮP TAY HOA",
    youtubeId: "MjXi8684Bbo",
  },
  {
    title: "TÀU BLUE DRAGON 01 – CẢNG HẢI LINH - LNG CÁI MÉP",
    youtubeId: "KRgqpJDbRgY ",
  },
  {
    title: "CÔNG TY TNHH YOUNG IL VIỆT NAM",
    youtubeId: "ktpfCVIsbkk ",
  },
];

/* ================= VIDEO CARD ================= */

type VideoCardProps = {
  title: string;
  youtubeId: string;
};

function VideoCard({ title, youtubeId }: VideoCardProps) {
  return (
    <div className="space-y-6">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <h4 className="text-center text-sm uppercase tracking-wide opacity-90">
        {title}
      </h4>
    </div>
  );
}

/* ================= PAGE ================= */

export default function Products() {
  return (
    <section id="products" className="text-white py-32">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-6xl font-bold tracking-wider">
          <span className="text-gold-gradient">OUR PRODUCTS</span>
        </h2>

        {/* IMAGE PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
          {PRODUCTS.map((item, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-center text-sm uppercase tracking-wide opacity-90">
                {item.title}
              </h3>

              <div className="flex gap-4">
                <div className="flex-1 grid gap-4">
                  {item.images.slice(0, 2).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex-1">
                  <div className="relative aspect-[1/2] rounded-2xl overflow-hidden">
                    <Image
                      src={item.images[2]}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIDEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
          {VIDEOS.map((video, idx) => (
            <VideoCard key={idx} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
