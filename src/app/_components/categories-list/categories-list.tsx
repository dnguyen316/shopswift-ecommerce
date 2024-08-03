"use client";

import { CategoriesIconList } from "@/app/components/icons";
import crypto from "crypto";
import Link from "next/link";

import CustomCarouselProvider from "../custom-carousel/create-context";
import CustomSlideButton from "../product-list/custom-slide-button";
import CustomCarousel, {
  CustomSlide,
} from "../custom-carousel/custom-carousel";

import "./categories-list.styles.css";

const categoriesList = [
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "phone",
    name: "Phones",
    url: "categories/phones",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "computer",
    name: "Computers",
    url: "categories/computers",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "camera",
    name: "Camera",
    url: "categories/camera",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "smartwatch",
    name: "SmartWatch",
    url: "categories/smartwatch",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "headphone",
    name: "Headphones",
    url: "categories/headphones",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "gamepad",
    name: "Gaming",
    url: "categories/gaming",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "gamepad",
    name: "Gaming",
    url: "categories/gaming",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "gamepad",
    name: "Gaming",
    url: "categories/gaming",
  },
  {
    id: crypto.randomBytes(64).toString("hex"),
    icon: "gamepad",
    name: "Gaming",
    url: "categories/gaming",
  },
];

const CategoriesList = () => {
  return (
    <CustomCarouselProvider>
      <CustomSlideButton />
      <CustomCarousel slidesPerView={5}>
        {categoriesList.map((item) => (
          <CustomSlide key={item.id}>
            <Link
              href={item.url}
              className="flex h-[145px] flex-col items-center justify-center gap-[16px] rounded-[4px] border-2 border-button/30 font-medium text-text-2 hover:border-secondary-2 hover:bg-secondary-2 hover:text-white"
            >
              {CategoriesIconList[item.icon as keyof typeof CategoriesIconList]}
              {item.name}
            </Link>
          </CustomSlide>
        ))}
      </CustomCarousel>
    </CustomCarouselProvider>
  );
};

export default CategoriesList;
