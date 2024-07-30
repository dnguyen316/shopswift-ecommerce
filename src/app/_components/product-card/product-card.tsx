"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Rating from "@/app/components/ui/custom-components/rating/rating";
import { EyeIcon, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductCard = () => {
  const [ratingReview, _] = useState(3);

  return (
    <Card className="min-h-[350px] w-[270px] hover:cursor-pointer">
      <CardHeader className="relative flex h-[250px] items-center justify-between bg-secondary p-0 pt-7">
        <Button className="text-text-foreground absolute left-3 top-3 h-[26px] w-[55px] text-[12px] font-normal">
          -40%
        </Button>
        <div>
          <Button className="">
            <HeartIcon />
          </Button>
          <Button>
            <EyeIcon />
          </Button>
        </div>
        <Image
          src="/controller.png"
          width={190}
          height={100}
          alt="controller"
        />
        <Button className="bg-button w-full rounded-t-none">Add To Cart</Button>
      </CardHeader>
      <CardContent className="p-[16px]">
        <CardTitle className="pb-2 text-[16px] font-medium">
          HAVIT HV-G92 Gamepad
        </CardTitle>
        <CardDescription>
          <div className="pb-2 text-[16px] font-medium text-secondary-2">
            $120{" "}
            <span className="text-button ml-3 inline-block line-through decoration-1 opacity-[50%]">
              $160
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Rating value={ratingReview} readOnly />
            <span className="pb-1 font-semibold text-text-2 opacity-[50%]">
              {`(`}75{`)`}
            </span>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
