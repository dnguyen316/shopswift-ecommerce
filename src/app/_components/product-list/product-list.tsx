"use client";

import CustomSlideButton from "./custom-slide-button";
import CustomCarousel from "../custom-carousel/custom-carousel";
import CustomCarouselProvider from "../custom-carousel/create-context";

import "swiper/css";
import "swiper/css/navigation";
import "./product-list.styles.css";

const ProductList = () => {
  return (
    <CustomCarouselProvider>
      <CustomSlideButton />
      <CustomCarousel productList={[]} />
    </CustomCarouselProvider>
  );
};

export default ProductList;
