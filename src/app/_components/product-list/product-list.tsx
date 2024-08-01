"use client";

import { Button } from "@/app/components/ui/button";
import { useRef } from "react";
import CustomCarousel from "./custom-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomSlideButton from "./custom-slide-button";
import type { CustomCarouselRef } from "./custom-carousel";

import "swiper/css";
import "swiper/css/navigation";
import "./product-list.styles.css";

const ProductList = () => {
  const swiperRef = useRef<CustomCarouselRef>(null);

  return (
    <>
      {/* <div className="absolute right-0 top-0">
        <Button
          className="mr-2 h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft size={24} />
        </Button>
        <Button
          className="h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight size={24} />
        </Button>
      </div> */}
      <CustomSlideButton
        onSlideNext={
          swiperRef.current ? () => swiperRef.current?.slideNext() : undefined
        }
        onSlidePrev={
          swiperRef.current ? () => swiperRef.current?.slidePrev() : undefined
        }
      />
      <CustomCarousel ref={swiperRef} productList={[]} />
    </>
  );
};

export default ProductList;
