"use client";

import type { Ref } from "react";
import React, { useImperativeHandle, useState } from "react";

import { Navigation } from "swiper/modules";
import type { SwiperProps } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

import ProductCard from "../product-card/product-card";

export type CustomCarouselRef = {
  slideNext: () => void;
  slidePrev: () => void;
};

interface CustomCarouselProps extends SwiperProps {
  productList: [];
}

const CustomCarousel = (
  prop: CustomCarouselProps,
  ref: Ref<CustomCarouselRef>,
) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slideNext = () => {
    swiper?.slideNext();
  };

  const slidePrev = () => {
    swiper?.slidePrev();
  };

  useImperativeHandle(ref, () => ({
    slidePrev,
    slideNext,
  }));

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      modules={[Navigation]}
      className="mySwiper"
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default React.forwardRef(CustomCarousel);
