export default function ContactUs() {
  return (
    <section className="relative z-10 py-10 sm:py-16 text-white min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <img 
        src="/svg/contactus.svg"
        alt="Contact Us"
        className="mx-auto h-14 md:h-16 object-contain mb-6"
        />
          {/* Form */}
          <div className="space-y-4">
            <input
              placeholder="Your name"
              className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white"
            />
            <input
              placeholder="Your email"
              className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white"
            />
            <textarea
              placeholder="Your message"
              className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white h-32"
            />
            <button className="font-cinzel border border-lime-400 text-lime-400 px-8 py-3 tracking-widest uppercase hover:bg-lime-400 hover:text-black transition">
              Send Message
            </button>
          </div>

          {/* Info */}
          <div className="text-gray-400 space-y-4">
            <p>Email: contact@bigtairys.com</p>
            <p>Phone: +91 99999 99999</p>
            <p>Street Culture Ave, Urban District</p>
          </div>
          <div className="px-6 py-10 border-t border-white/10">
          </div>
        </div>
      </div>
    </section>
  );
}