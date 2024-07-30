import { api, HydrateClient } from "@/trpc/server";
import CategoriesMenu from "./_components/categories-menu/categories-menu";
import Hero from "./_components/hero/hero";
import ProductCard from "./_components/product-card/product-card";
import SectionWrapper from "./_components/section-wrapper/section-wrapper";
import { Separator } from "./components/ui/separator";

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
          <SectionWrapper title="Flash Sales" subtitle="Today's">
            <ProductCard />
          </SectionWrapper>

          <Separator />

          {/* Category Section */}
          <SectionWrapper title="Browse By Category" subtitle="Category">
            <ProductCard />
          </SectionWrapper>
        </main>
      </div>
    </HydrateClient>
  );
}
