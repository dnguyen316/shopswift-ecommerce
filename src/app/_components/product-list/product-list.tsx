"use client";

import { lazy, Suspense } from "react";

import CustomCarousel, {
  CustomSlide,
} from "../custom-carousel/custom-carousel";
import CustomCarouselProvider from "../custom-carousel/create-context";

import ProductCard from "../product-card/product-card";
import { productItem } from "../__mocks__/products";

import "swiper/css";
import "swiper/css/navigation";
import "./product-list.styles.css";

const SlideButton = lazy(() => import("./custom-slide-button"));
const ViewAllButton = lazy(() => import("./view-all-button"));
const MoveToBagButton = lazy(() => import("./move-to-bag-button"));

export type ActionButtonTypes = "custom-slide" | "view-all" | "move-to-bag";

export interface ProductListProps {
  actionButton?: ActionButtonTypes;
  link?: string;
  action?: () => void;
}

const ProductList = ({
  actionButton = "custom-slide",
  action,
  link,
}: ProductListProps) => {
  return (
    <CustomCarouselProvider>
      <Suspense fallback={<></>}>
        {/** pass another button here, if not show the  <CustomSlideButton />   */}
        {actionButton === "custom-slide" && <SlideButton />}
        {actionButton === "view-all" && <ViewAllButton href={link ?? "/"} />}
        {actionButton === "move-to-bag" && <MoveToBagButton action={action} />}
      </Suspense>
      <CustomCarousel className="w-[270px]" slidesPerView={4}>
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
