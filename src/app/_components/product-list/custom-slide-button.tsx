"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCustomCarousel } from "../custom-carousel/create-context";

const CustomSlideButton = () => {
  const { swiper } = useCustomCarousel();

  return (
    <div className="absolute right-0 top-[56px]">
      <Button
        className="mr-2 h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
        onClick={() => swiper?.slidePrev()}
      >
        <ArrowLeft size={24} />
      </Button>
      <Button
        className="h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
        onClick={() => swiper?.slideNext()}
      >
        <ArrowRight size={24} />
      </Button>
    </div>
  );
};

export default CustomSlideButton;
