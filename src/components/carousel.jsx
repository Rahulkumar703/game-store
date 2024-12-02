"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import GameCard from "./game-card";
import { cn } from "@/lib/utils";
import { Autoplay, Keyboard, EffectCoverflow } from "swiper/modules";

const Carousel = ({ slides, className }) => {
  return (
    <Swiper
      className={cn(className)}
      spaceBetween={10}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      initialSlide={0}
      effect={"coverflow"}
      fadeEffect={true}
      grabCursor={true}
      keyboard={{
        enabled: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 5,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        950: {
          slidesPerView: 2,
        },
      }}
      modules={[EffectCoverflow, Keyboard, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <GameCard {...slide} size={"slide"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
