import { api, HydrateClient } from "@/trpc/server";
import CategoriesMenu from "./_components/categories-menu/categories-menu";
import Hero from "./_components/hero/hero";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="container">
        <div className="flex">
          <CategoriesMenu />
          <Hero />
        </div>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <h1>Hello World</h1>
        </main>
      </div>
    </HydrateClient>
  );
}
