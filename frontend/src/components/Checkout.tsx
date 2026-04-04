  declare global {
  interface Window {
    Razorpay: new (options: object) => { open: () => void };
  }
}
export default function Checkout({ totalAmount }: { totalAmount: number }) {

  const handlePayment = async () => {
    // Step 1: create order on backend
    const res = await fetch("http://localhost:5000/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount * 100 }), // convert to paise
    });
    const order = await res.json();

    // Step 2: open Razorpay popup
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
        const verify = await fetch("http://localhost:5000/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        const result = await verify.json();
        if (result.success) {
          alert("Payment Successful!");
          // redirect to success page
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

    const rzp = new window.Razorpay(options);
rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-lime-400 text-black font-bold px-6 py-3 uppercase tracking-widest hover:bg-lime-300 transition"
    >
      Pay ₹{totalAmount}
    </button>
  );
}