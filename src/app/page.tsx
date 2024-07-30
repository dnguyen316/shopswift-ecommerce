import { api, HydrateClient } from "@/trpc/server";
import CategoriesMenu from "./_components/categories-menu/categories-menu";
import Hero from "./_components/hero/hero";
import ProductCard from "./_components/product-card/product-card";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="container">
        <div className="flex gap-[45px]">
          <CategoriesMenu />
          <Hero />
        </div>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <ProductCard />
        </main>
      </div>
    </HydrateClient>
  );
}
