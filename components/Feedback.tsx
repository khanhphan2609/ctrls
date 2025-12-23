import Image from "next/image";

type FeedbackItem = {
  name: string;
  title: string;
  avatar: string;
  content: string;
};

const FEEDBACKS: FeedbackItem[] = [
  {
    name: "NGUYỄN MINH CƯỜNG",
    title: "Giám đốc TC Multimedia",
    avatar: "/feedback/1.jpg",
    content:
      "Màn hình LED sắc nét, hiển thị màu chuẩn, không bị sọc hay lẫn hình livestream. Đội ngũ kỹ thuật hỗ trợ test trước và setup rất nhiệt tình.",
  },
  {
    name: "NGUYỄN HOÀNG VŨ",
    title: "Giám đốc H.O.S.T Academy",
    avatar: "/feedback/2.jpg",
    content:
      "Các sản phẩm truyền thông trước và sau sự kiện được thiết kế đồng bộ, giúp nhận diện thương hiệu tốt trên các nền tảng mạng xã hội.",
  },
  {
    name: "VÕ VIỆT CHUNG",
    title: "Chủ tịch Hoa hậu Đại dương Việt Nam",
    avatar: "/feedback/3.jpg",
    content:
      "Khả năng sản xuất chương trình chuyên nghiệp, bố trí layout sân khấu hợp lý và hiệu ứng chuyển cảnh rất ấn tượng.",
  },
  {
    name: "NGUYỄN THANH TÂM",
    title: "Ban Văn hóa FPT Software",
    avatar: "/feedback/4.jpg",
    content:
      "Trang thiết bị hiện đại, đồng bộ. Quy trình tổ chức chặt chẽ, đảm bảo an toàn và đúng timeline sự kiện.",
  },
  {
    name: "CHUNG QUỐC PHONG",
    title: "Trưởng phòng Tuyển sinh HUFLIT",
    avatar: "/feedback/5.jpg",
    content:
      "CTRL-S thể hiện sự linh hoạt và chuyên nghiệp cao khi tổ chức nhiều loại hình sự kiện khác nhau.",
  },
  {
    name: "BÙI KIM THANH THU",
    title: "Trợ lý Trưởng đoàn – IPS & Hapo Centrosa",
    avatar: "/feedback/6.jpg",
    content:
      "Khâu vận hành rất trơn tru, từ đón tiếp đại biểu đến điều phối sân khấu đều rõ ràng và chính xác.",
  },
  {
    name: "NGUYỄN HẢI ĐĂNG",
    title: "MC / Biên tập viên VTV",
    avatar: "/feedback/7.jpg",
    content:
      "Kịch bản sáng tạo, ekip kiểm soát timeline tốt và xử lý tình huống phát sinh rất nhanh.",
  },
];

export default function Feedback() {
  const topRow = FEEDBACKS.slice(0, 3);
  const bottomRow = FEEDBACKS.slice(3);

  return (
    <section id="feedback" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-24 text-4xl md:text-6xl font-bold tracking-wider">
          <span className="text-gold-gradient bg-clip-text text-transparent">
            CLIENT’S FEEDBACK
          </span>
        </h2>

        {/* ===== ROW 1: 3 ITEMS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 justify-center mb-20">
          {topRow.map((item, idx) => (
            <FeedbackCard key={idx} item={item} />
          ))}
        </div>

        {/* ===== ROW 2: 4 ITEMS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 justify-center">
          {bottomRow.map((item, idx) => (
            <FeedbackCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function FeedbackCard({ item }: { item: FeedbackItem }) {
  return (
    <div className="text-center space-y-6 max-w-sm mx-auto">
      {/* AVATAR */}
      <div className="relative mx-auto w-28 h-28 rounded-full border-4 border-[var(--primary)] overflow-hidden">
        <Image
          src={item.avatar}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <p className="italic text-sm leading-relaxed opacity-90">
        “{item.content}”
      </p>

      {/* NAME */}
      <div>
        <p className="font-semibold tracking-wide">{item.name}</p>
        <p className="text-xs opacity-70 mt-1">{item.title}</p>
      </div>
    </div>
  );
}
