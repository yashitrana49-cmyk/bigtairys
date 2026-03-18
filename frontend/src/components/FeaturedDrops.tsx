import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedDrops() {
  const navigate = useNavigate();
  return (
    <section className="py-20 text-white">
     <div className="mx-auto max-w-7xl px-6 sm:px-10">
      <ScrollReveal className="mx-auto max-w-7xl px-8">
       <h2 className="text-lime-400 text-5xl font-extrabold uppercase">
       Featured Drops
       </h2>

       <div className="mt-10">
       <button 
       onClick={() => navigate("/shop")}
       className="mt-10 border border-lime-400 px-8 py-4 text-lime-400 font-extrabold uppercase hover:bg-lime-500 transition">
        Check this out →
       </button>
       </div>
      </ScrollReveal>
      </div>
    </section>
  );
}