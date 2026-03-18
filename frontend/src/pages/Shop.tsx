import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <section className="relative z-10 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase mb-12">
          Shop
        </h1>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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