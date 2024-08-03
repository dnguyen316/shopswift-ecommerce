"use client";

import React from "react";

import { Navigation, Pagination } from "swiper/modules";
import type { SwiperProps } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useCustomCarousel } from "../custom-carousel/create-context";

interface CustomCarouselProps extends SwiperProps {
  children: React.ReactNode;
}

const CustomCarousel = (props: CustomCarouselProps) => {
  const { children, ...rest } = props;
  const { setSwiper } = useCustomCarousel();

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      onSwiper={(swiper) => setSwiper(swiper)}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

export const CustomSlide = SwiperSlide;

export default CustomCarousel;
