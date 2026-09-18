import type { Product } from "../types/Products";

export const products: Product[] = [
  {
    id: "1",
    name: "Black Street Tee",
    price: 999,
    images: [
      "/products/tshirt-black.jpg",
      "/products/tshirt-white.jpg",
    ],
    featured: true,
    colors: ["black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium streetwear tee with bold attitude.",
  },
];