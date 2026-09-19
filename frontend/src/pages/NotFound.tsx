import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center text-white">
      <h1 className="text-6xl font-extrabold text-lime-400 sm:text-7xl">404</h1>
      <p className="text-lg uppercase tracking-widest">
        This page wandered off the streets
      </p>
      <Link
        to="/"
        className="border border-lime-400 px-6 py-3 text-lime-400 font-extrabold uppercase text-sm sm:text-base rounded hover:bg-lime-400 hover:text-black transition-colors duration-300"
      >
        Back to home
      </Link>
    </section>
  );
}
