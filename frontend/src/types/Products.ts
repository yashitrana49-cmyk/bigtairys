export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  colors:string[];
  sizes: string[];
  featured?: boolean;
};