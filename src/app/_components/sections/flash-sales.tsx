import { Button } from "@/app/components/ui/button";
import ProductList from "../product-list/product-list";
import SectionWrapper from "./section-wrapper";

const FlashSalesSection = () => {
  return (
    <SectionWrapper className="relative" title="Flash Sales" subtitle="Today's">
      <ProductList />
      <div className="mt-[60px] flex items-center justify-center">
        <Button>View All Products</Button>
      </div>
    </SectionWrapper>
  );
};

export default FlashSalesSection;
