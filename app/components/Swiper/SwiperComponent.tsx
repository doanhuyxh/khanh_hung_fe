"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const SwiperComponent = () => {
  const newsItems = [
    "Tin tức 1: Chào mừng đến với KhanhHung Academy!",
    "Tin tức 2: Cập nhật chương trình đào tạo mới nhất.",
    "Tin tức 3: Đăng ký ngay để nhận ưu đãi đặc biệt.",
  ];

  return (
    <Swiper

      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {newsItems.map((item, index) => (
        <SwiperSlide key={index}>
          <p>{item}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
