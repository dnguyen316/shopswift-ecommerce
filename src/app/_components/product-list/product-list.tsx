"use client";

import CustomSlideButton from "./custom-slide-button";
import CustomCarousel, {
  CustomSlide,
} from "../custom-carousel/custom-carousel";
import CustomCarouselProvider from "../custom-carousel/create-context";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../product-card/product-card";
import { productItem } from "../__mocks__/products";
import "./product-list.styles.css";

const ProductList = () => {
  return (
    <CustomCarouselProvider>
      <CustomSlideButton />
      <CustomCarousel slidesPerView={6}>
        {productItem.map((item) => (
          <CustomSlide key={item._id}>
            <ProductCard productInfo={item} />
          </CustomSlide>
        ))}
      </CustomCarousel>
    </CustomCarouselProvider>
  );
};

export default ProductList;
