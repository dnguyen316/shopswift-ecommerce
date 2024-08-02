"use client";

import CustomSlideButton from "./custom-slide-button";
import CustomCarousel, {
  CustomSlide,
} from "../custom-carousel/custom-carousel";
import CustomCarouselProvider from "../custom-carousel/create-context";

import "swiper/css";
import "swiper/css/navigation";
import "./product-list.styles.css";
import ProductCard from "../product-card/product-card";

const ProductList = () => {
  return (
    <CustomCarouselProvider>
      <CustomSlideButton />
      <CustomCarousel>
        <CustomSlide>
          <ProductCard />
        </CustomSlide>
      </CustomCarousel>
    </CustomCarouselProvider>
  );
};

export default ProductList;
