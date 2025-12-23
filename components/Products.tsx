import Image from "next/image";

const PRODUCTS = [
  {
    title: "CHƯƠNG TRÌNH 20/11 – NHỮNG NGƯỜI THẦY CHÂN CHÍNH 2025",
      images: ["/p1-1.jpg", "/p1-2.jpg", "/p1-3.jpg"],
    },
    {
      title: "NỐT THƯƠNG 2",
      images: ["/p2-1.jpg", "/p2-2.jpg", "/p2-3.jpg"],
    },
    {
      title: "WOWFEST – VIBE ON THE WHEELS 2025",
      images: ["/p3-1.jpg", "/p3-2.jpg", "/p3-3.jpg"],
    },
    {
      title: "HOA HẬU ĐẠI DƯƠNG 2025",
      images: ["/p4-1.jpg", "/p4-2.jpg", "/p4-3.jpg"],
    },
    {
      title: "SEA GAMES 31",
      images: ["/p5-1.jpg", "/p5-2.jpg", "/p5-3.jpg"],
    },
    {
      title: "TÀU BLUE DRAGON 01 – CẢNG HẢI LINH",
      images: ["/p6-1.jpg", "/p6-2.jpg", "/p6-3.jpg"],
    },
  ];
export default function Products() {
  return (
    <section className="text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-24 text-4xl md:text-6xl font-bold tracking-wider">
          <span className="bg-gradient-to-r text-gold-gradient bg-clip-text text-transparent">
            OUR PRODUCTS
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
          {PRODUCTS.map((item, idx) => (
            <div key={idx} className="space-y-8">
              {/* TITLE */}
              <h3 className="text-center text-sm uppercase tracking-wide opacity-90">
                {item.title}
              </h3>

              {/* IMAGE GRID: 2 left, 1 right */}
              <div className="flex gap-4">
                <div className="flex-1 grid grid-cols-1 gap-4">
                  {item.images.slice(0, 2).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={img}
                        alt=""
                        width={300}
                        height={300}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <div className="relative aspect-[1/2] overflow-hidden rounded-2xl">
                    <Image
                      src={item.images[2]}
                      alt=""
                      width={300}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}