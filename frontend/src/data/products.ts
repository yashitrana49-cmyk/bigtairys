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
  {
    id: "2",
    name: "Oversized White Tee",
    price: 1099,
    images: ["/products/tshirt-grey.jpg"],
    featured: false,
    colors: ["white"],
    sizes: ["M", "L", "XL"],
    description: "Oversized fit for modern street culture.",
  },
  {
    id: "3",
    name: "Graphic Rebel Tee",
    price: 1299,
    images: ["/products/tshirt-graphic.jpg"],
    featured: false,
    colors: ["white"],
    sizes: ["M", "L", "XL"],
    description: "Love Graphics? .",
  },
];