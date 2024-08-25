import CategoriesMenu from "./_components/categories-menu/categories-menu";
import Hero from "./_components/hero/hero";
import { Separator } from "./components/ui/separator";
import FlashSalesSection from "./_components/sections/flash-sales";
import CategorySection from "./_components/sections/category";
import BestSellerSection from "./_components/sections/best-seller";
import OurProductSection from "./_components/sections/out-products";

export default async function Home() {
  return (
    <>
      <div className="container">
        <div className="flex gap-[45px]">
          <CategoriesMenu />
          <Hero />
        </div>
      </div>

      <main className="min-h-screen">
        {/* Flash Sales Section */}
        <FlashSalesSection />

        <Separator />

        {/* Category Section */}
        <CategorySection />

        {/* Best Selling Products Section */}
        <BestSellerSection />

        {/* Our Products Section */}
        <OurProductSection />
      </main>
    </>
  );
}
