import { Link } from "react-router-dom";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
  featured?: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  images,
  featured,
}: ProductCardProps) {
  return (
    <div className="group bg-black border border-lime-400/20 relative flex flex-col">

      {featured && (
        <span className="absolute top-3 left-3 bg-lime-400 text-black text-xs px-2 py-1 uppercase font-semibold z-10">
          Featured
        </span>
      )}
      <Link to={'/product/' + id}>
        <div className="relative w-full h-[320px] pt-6 overflow-hidden flex items-center justify-center">
          <img
            src={images[0]}
            alt={name}
            loading="lazy"
            className="absolute top-3 left-0 h-[99%] w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
        <img
            src={images[1]}
            alt={`${name} alternative`}
            loading="lazy"
            className="absolute top-3 left-0 h-[99%] w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
        </div>
      </Link>
      <div className="p-4 text-white">
        <h3 className="text-sm uppercase tracking-wide">{name}</h3>
        <p className="mt-1 text-lime-400 font-semibold">₹{price}</p>

        <button className="font-button mt-4 w-full border border-lime-400 py-2 text-sm uppercase hover:bg-lime-400 hover:text-black transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}