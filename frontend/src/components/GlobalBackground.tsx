export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center animate-zoom-slow"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}