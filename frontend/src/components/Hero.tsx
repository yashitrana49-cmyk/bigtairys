import HeroShirtSlider from "./HeroShirtSlider";
export default function Hero() {
  return (
    <section className="relative hero min-h-screen pt-0 py-32">
    <div className="relative h-140 flex flex-col items-center text-center justify-start">

    {/* TOP TEXT */}
    <h1 className="font-cinzel-decorative mt-4">
      14 THE DANGER ZONE
    </h1>
    <HeroShirtSlider />
    {/* TEXT BETWEEN */}
    <p className="hero-mid-text ">
      REPRESENTING STREET CULTURE
    </p>
    <p className="hero-end-text ">
      BOLD.RAW.AUTHENTIC.WEAR YOUR REBELLION
    </p>

  </div>
</section>
  );
}