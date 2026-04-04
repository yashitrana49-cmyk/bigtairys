import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedDrops() {
  const navigate = useNavigate();
  return (
    <section className="py-20 sm:py-16 lg:py-20 text-white">
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <ScrollReveal>
        <img 
        src="/svg/featureddrops.svg"
        alt="Featured Drops"
        className="h-8 sm:h-14 lg:h-16 w-auto"
        />
       <div className="mt-6 sm:mt-10">
       <button 
       onClick={() => navigate("/shop")}
       className="border border-lime-400 px-6 py-3 sm:py-4 text-lime-400 font-extrabold uppercase text-sm sm:text-base lg:text-lg rounded hover:bg-lime-400 hover:text-black transition-colors duration-300">
        Check this out →
       </button>
       </div>
      </ScrollReveal>
      </div>
    </section>
  );
}