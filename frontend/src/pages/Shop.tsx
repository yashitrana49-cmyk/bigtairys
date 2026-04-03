import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <section className="relative z-10 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <img 
        src="/svg/shop.svg"
        alt="Shop"
        className="h-12 md:h-16 object-contain mb-4"
        />
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              images={product.images}
              featured={product.featured}
            />
          ))}
        </div>

      </div>
    </section>
  );
}