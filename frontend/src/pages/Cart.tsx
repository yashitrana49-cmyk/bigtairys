import { useCart } from "../context/CartContext";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-5 px-6 text-white">
        <h1 className="text-3xl uppercase">Your cart is empty</h1>

        <Link
          to="/shop"
          className="border border-lime-400 px-6 py-3 sm:py-4 text-lime-400 font-extrabold uppercase text-sm sm:text-base lg:text-lg rounded hover:bg-lime-400 hover:text-black transition-colors duration-300"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="py-24 text-white max-w-5xl mx-auto px-6">
      <h1 className="text-3xl uppercase mb-10">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={`${item.id}-${item.size}`}
          className="flex gap-6 border-b border-white/10 py-6"
        >
          <img
            src={item.image}
            alt={`${item.name} - size ${item.size}`}
            className="w-40 h-40 object-cover"
          />

          <div className="flex-1">
            <h3>{item.name}</h3>
            <p className="text-sm text-gray-400">
              Size: {item.size}
            </p>
            <p className="text-lime-400">₹{item.price}</p>
          
            <div className="font-button flex gap-3 mt-3">
              <button
                onClick={() =>
                  decreaseQty(item.id, item.size)
                }
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQty(item.id, item.size)
                }
              >
                +
              </button>

              <button
                className="ml-6 font-button"
                onClick={() =>
                  removeFromCart(item.id, item.size)
                }
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-10 text-xl">
        Total: <span className="text-lime-400">₹{total}</span>
      </div>
      <div className="border-lime-400 px-6 py-3 sm:py-4 text-lime-400 font-extrabold uppercase text-sm sm:text-base lg:text-lg rounded hover:text-black transition-colors duration-300">
        
        <Checkout totalAmount={total} />
      </div>
    </section>
  );
}