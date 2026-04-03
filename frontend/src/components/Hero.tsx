import HeroShirtSlider from "./HeroShirtSlider";
export default function Hero() {
  return (
    <section className="relative hero min-h-screen pt-0 py-16 sm:py-24 overflow-hidden">
    <div className="relative w-full flex flex-col items-center text-center justify-start px-4 sm:px-8">
    <div className="hero-title">
    <img src="/svg/14.svg" alt="14 The Danger Zone" />
    </div>
    <HeroShirtSlider />
    {/* TEXT BETWEEN */}
    <p className="hero-mid-text w-full">
      REPRESENTING STREET CULTURE
    </p>
    <p className="hero-end-text w-full">
      BOLD.RAW.AUTHENTIC.WEAR YOUR REBELLION
    </p>

  </div>
</section>
  );
}