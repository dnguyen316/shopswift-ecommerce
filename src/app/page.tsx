import { api, HydrateClient } from "@/trpc/server";
import CategoriesMenu from "./_components/categories-menu/categories-menu";
import Hero from "./_components/hero/hero";
import ProductCard from "./_components/product-card/product-card";
import SectionWrapper from "./_components/section-wrapper/section-wrapper";
import { Separator } from "./components/ui/separator";
import ProductList from "./_components/product-list/product-list";
import { Button } from "./components/ui/button";
import CategoriesList from "./_components/categories-list/categories-list";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="container">
        <div className="flex gap-[45px]">
          <CategoriesMenu />
          <Hero />
        </div>
        <main className="min-h-screen">
          {/* Flash Sales Section */}
          <SectionWrapper
            className="relative"
            title="Flash Sales"
            subtitle="Today's"
          >
            <ProductList />
            <div className="mt-[60px] flex items-center justify-center">
              <Button>View All Products</Button>
            </div>
          </SectionWrapper>

          <Separator />

          {/* Category Section */}
          <SectionWrapper
            className="relative"
            title="Browse By Category"
            subtitle="Category"
          >
            <CategoriesList />
          </SectionWrapper>

          {/* Best Selling Products Section */}
          <SectionWrapper
            className="relative"
            title="Best Selling Products"
            subtitle="This Month"
          >
            <ProductList />
          </SectionWrapper>

          {/* Our Products Section */}
          <SectionWrapper
            className="relative"
            title="Explore Our Products"
            subtitle="Our Products"
          >
            <ProductList />
          </SectionWrapper>
        </main>
      </div>
    </HydrateClient>
  );
}
