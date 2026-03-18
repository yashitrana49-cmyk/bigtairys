import { useCart } from "../context/CartContext"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  const count = cart.reduce((a, b) => a + b.quantity, 0);

  return (
    <nav className="relative z-50">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-1 h-16 flex items-center text-white">
        
        {/* Logo → HOME */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-lime-400 font-extrabold uppercase tracking-wide hover:opacity-90 transition"
        >
          Big Tairys
        </Link>
        <div className="ml-auto flex items-center gap-5">
        <Link to="/cart" className="relative text-white flex items-center text-xl">
          🛒
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs px-1 rounded">
                {count}
              </span>
            )}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 focus:outline-none"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      </div>
      {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-6 mt-4 w-48 bg-black/90 backdrop-blur border border-white/10 rounded-lg">
          <ul className="flex flex-col text-sm uppercase text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}