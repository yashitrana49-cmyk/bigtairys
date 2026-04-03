import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  const [size, setSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <div className="text-white p-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!size) return;

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[activeImage], // ✅ single selected image
      size,
      quantity: 1,
    });
  };

  return (
    <section className="relative z-10 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT — IMAGE GALLERY */}
        <div>
          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="w-full object-cover border border-white/10"
          />

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3">
            {product.images.map((img, index) => (
              <button
                key={img}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1} of ${product.name}`}
                className={`border ${
                  activeImage === index
                    ? "border-lime-400"
                    : "border-white/20"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — PRODUCT INFO */}
        <div>
          <h1 className="text-4xl font-extrabold uppercase">
            {product.name}
          </h1>

          <p className="text-lime-400 text-xl mt-2">
            ₹{product.price}
          </p>

          <p className="text-gray-300 mt-6">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mt-8">
            <p className="uppercase text-sm mb-3">Size</p>
            <div className="flex gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border uppercase ${
                    size === s
                      ? "border-lime-400 text-lime-400"
                      : "border-white/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            disabled={!size}
            onClick={handleAddToCart}
            className="mt-10 w-full bg-lime-400 text-black py-4 uppercase font-semibold disabled:opacity-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}