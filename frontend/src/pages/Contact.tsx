export default function Contact() {
  return (
    <section className="relative z-10 py-10 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-lime-400 uppercase text-center">
          Get in Touch
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          
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
            <button className="font-button bg-lime-400 text-black px-6 py-3 font-semibold hover:bg-lime-500">
              Send Message
            </button>
          </div>

          {/* Info */}
          <div className="text-gray-400 space-y-4">
            <p>Email: contact@bigtairys.com</p>
            <p>Phone: +91 99999 99999</p>
            <p>Street Culture Ave, Urban District</p>
          </div>
        </div>
      </div>
    </section>
  )
}