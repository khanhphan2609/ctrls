"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ================= DATA ================= */

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
    avatar: "/imgs/feedback/nguyen-minh-cuong.png",
    content:
      "Màn hình LED sắc nét, hiển thị màu chuẩn, không bị sọc hay lẫn hình livestream. Đội ngũ kỹ thuật hỗ trợ test trước và setup rất nhiệt tình.",
  },
  {
    name: "NGUYỄN HOÀNG VŨ",
    title: "Giám đốc H.O.S.T Academy",
    avatar: "/imgs/feedback/nguyen-hoang-vu.png",
    content:
      "Các sản phẩm truyền thông trước và sau sự kiện được thiết kế đồng bộ, giúp nhận diện thương hiệu tốt trên các nền tảng mạng xã hội.",
  },
  {
    name: "VÕ VIỆT CHUNG",
    title: "Chủ tịch Hoa hậu Đại dương Việt Nam",
    avatar: "/imgs/feedback/vo-viet-chung.png",
    content:
      "Khả năng sản xuất chương trình chuyên nghiệp, bố trí layout sân khấu hợp lý và hiệu ứng chuyển cảnh rất ấn tượng.",
  },
  {
    name: "NGUYỄN THANH TÂM",
    title: "Ban Văn hóa FPT Software",
    avatar: "/imgs/feedback/nguyen-thanh-tam.png",
    content:
      "Trang thiết bị hiện đại, đồng bộ. Quy trình tổ chức chặt chẽ, đảm bảo an toàn và đúng timeline sự kiện.",
  },
  {
    name: "CHUNG QUỐC PHONG",
    title: "Trưởng phòng Tuyển sinh HUFLIT",
    avatar: "/imgs/feedback/chung-quoc-phong.png",
    content:
      "CTRL-S thể hiện sự linh hoạt và chuyên nghiệp cao khi tổ chức nhiều loại hình sự kiện khác nhau.",
  },
  {
    name: "BÙI KIM THANH THU",
    title: "Trợ lý Trưởng đoàn – IPS & Hapo Centrosa",
    avatar: "/imgs/feedback/bui-kim-thanh-thu.png",
    content:
      "Khâu vận hành rất trơn tru, từ đón tiếp đại biểu đến điều phối sân khấu đều rõ ràng và chính xác.",
  },
  {
    name: "NGUYỄN HẢI ĐĂNG",
    title: "MC / Biên tập viên VTV",
    avatar: "/imgs/feedback/nguyen-hai-dang.png",
    content:
      "Kịch bản sáng tạo, ekip kiểm soát timeline tốt và xử lý tình huống phát sinh rất nhanh.",
  },
];

/* ================= CARD ================= */

function FeedbackCard({ item }: { item: FeedbackItem }) {
  return (
    <div className="text-center space-y-6 max-w-sm mx-auto px-4">
      <div className="relative mx-auto w-28 h-28 rounded-full border-4 border-[var(--primary)] overflow-hidden">
        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
      </div>

      <p className="italic text-sm leading-relaxed opacity-90">
        “{item.content}”
      </p>

      <div>
        <p className="font-semibold tracking-wide">{item.name}</p>
        <p className="text-xs opacity-70 mt-1">{item.title}</p>
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function Feedback() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const total = FEEDBACKS.length;

  const next = () => setCurrent((i) => (i + 1) % total);
  const prev = () => setCurrent((i) => (i - 1 + total) % total);

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ===== TOUCH ===== */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
  };

  const topRow = FEEDBACKS.slice(0, 3);
  const bottomRow = FEEDBACKS.slice(3);

  return (
    <section id="feedback" className="py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-6xl font-bold tracking-wider">
          <span className="text-gold-gradient">CLIENT’S FEEDBACK</span>
        </h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div
          className="block md:hidden overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {FEEDBACKS.map((item, idx) => (
              <div key={idx} className="min-w-full">
                <FeedbackCard item={item} />
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {FEEDBACKS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition
                  ${
                    idx === current
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 mb-20">
            {topRow.map((item, idx) => (
              <FeedbackCard key={idx} item={item} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20">
            {bottomRow.map((item, idx) => (
              <FeedbackCard key={idx} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
