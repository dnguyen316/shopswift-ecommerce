"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCustomCarousel } from "../custom-carousel/create-context";
import { forwardRef } from "react";

const CustomSlideButton = forwardRef<HTMLButtonElement>(({ ...props }, ref) => {
  const { swiper } = useCustomCarousel();

  return (
    <div className="absolute right-7 top-[56px]" {...props}>
      <Button
        className="mr-2 h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
        onClick={() => swiper?.slidePrev()}
        ref={ref}
      >
        <ArrowLeft size={24} />
      </Button>
      <Button
        className="h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
        onClick={() => swiper?.slideNext()}
        ref={ref}
      >
        <ArrowRight size={24} />
      </Button>
    </div>
  );
});

CustomSlideButton.displayName = "CustomSlideButton";

export default CustomSlideButton;
