import { useState } from "react";

declare global {
  interface Window {
    Razorpay?: new (options: object) => { open: () => void };
  }
}

const RAZORPAY_SRC = "https://checkout.razorpay.com/v1/checkout.js";

// Load the Razorpay checkout script on demand, right before payment,
// instead of blocking initial page load with a <script> tag.
function loadRazorpay(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = RAZORPAY_SRC;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Could not load Razorpay checkout. Please try again."));
    document.body.appendChild(script);
  });
}
export default function Checkout({ totalAmount }: { totalAmount: number }) {
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = async () => {
    setIsPaying(true);
    try {
      // Step 1: create order on backend
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount * 100 }), // convert to paise
      });
      if (!res.ok) throw new Error("Could not start payment. Please try again.");
      const order = await res.json();

      // Step 2: load Razorpay and open popup
      await loadRazorpay();
      const RazorpayCtor = window.Razorpay;
      if (!RazorpayCtor) throw new Error("Razorpay checkout failed to load.");

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Big Tairys",
        description: "Street Culture Wear",
        order_id: order.id,
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          // Step 3: verify on backend
          const verify = await fetch(`${apiUrl}/api/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const result = await verify.json();
          if (result.success) {
            alert("Payment Successful!");
            // redirect to success page
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#a3e635", // your lime-green brand color
        },
      };

      const rzp = new RazorpayCtor(options);
      rzp.open();
    } catch (err) {
      alert(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isPaying}
      className="bg-lime-400 text-black font-bold px-6 py-3 uppercase tracking-widest hover:bg-lime-300 transition disabled:opacity-50"
    >
      {isPaying ? "Processing…" : `Pay ₹${totalAmount}`}
    </button>
  );
}