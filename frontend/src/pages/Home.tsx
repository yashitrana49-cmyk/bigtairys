import Hero from "../components/Hero";
import FeaturedDrops from "../components/FeaturedDrops";

export default function Home() {
  return (
    <>
      <main className="relative z-10 flex flex-col"></main>
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />
      <FeaturedDrops />
      <div className="h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />
      </>
  )
}