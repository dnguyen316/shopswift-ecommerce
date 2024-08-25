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
import { CldImage } from "next-cloudinary";
import React from "react";

type ProductCardProps = {
  productInfo: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = ({ productInfo }) => {
  // const [ratingReview, _] = useState(3);

  return (
    <Card className="hover group h-[350px] w-[270px] hover:cursor-pointer">
      <CardHeader className="relative flex h-[250px] items-center justify-between bg-secondary p-0 pt-7">
        {productInfo?.discount && (
          <Button className="absolute left-3 top-3 h-[26px] w-[55px] pb-1 text-[12px] font-normal text-text-foreground hover:bg-primary">
            {productInfo.discount}%
          </Button>
        )}
        <div className="absolute right-3 top-3">
          <Button className="mb-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-background p-0 hover:bg-button-hover-1">
            <HeartIcon color="#000000" />
          </Button>
          <Button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-background p-0 hover:bg-button-hover-1">
            <EyeIcon color="#000000" />
          </Button>
        </div>
        <CldImage
          src={productInfo.thumb}
          width={100}
          height={100}
          className="object-contain pt-4"
          alt={productInfo.name}
        />
        <Button className="w-full translate-y-[10px] rounded-t-none bg-button opacity-0 transition-all duration-300 group-hover:translate-y-[0] group-hover:opacity-100">
          Add To Cart
        </Button>
      </CardHeader>
      <CardContent className="z-10 p-[16px]">
        <CardTitle className="pb-2 text-[16px] font-medium">
          {productInfo.name}
        </CardTitle>
        <CardDescription>
          <div className="pb-2 text-[16px] font-medium text-secondary-2">
            $
            {(
              productInfo.price -
              (productInfo.price * productInfo.discount) / 100
            ).toFixed(2)}{" "}
            <span className="ml-3 inline-block text-button line-through decoration-1 opacity-[50%]">
              ${productInfo.price}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Rating value={Math.ceil(productInfo.ratings_avg)} readOnly />
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
