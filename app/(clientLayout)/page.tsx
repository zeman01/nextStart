import CategorySection from "@/components/landing/category-section";
import Hero from "@/components/landing/hero";
import NewArrivals from "@/components/landing/new-arrival-section";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <CategorySection/>
      <NewArrivals/>
    </main>
  );
}
