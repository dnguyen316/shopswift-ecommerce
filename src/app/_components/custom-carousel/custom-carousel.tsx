"use client";

import React from "react";

import { Navigation } from "swiper/modules";
import type { SwiperProps } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../product-card/product-card";
import { useCustomCarousel } from "../custom-carousel/create-context";

interface CustomCarouselProps extends SwiperProps {
  children: React.ReactNode;
}

const CustomCarousel = (props: CustomCarouselProps) => {
  const { children } = props;
  const { setSwiper } = useCustomCarousel();

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      modules={[Navigation]}
      className="mySwiper"
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {children}
    </Swiper>
  );
};

export const CustomSlide = SwiperSlide;

export default CustomCarousel;
