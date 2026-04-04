const quickLinks = [
  { label: "Track Your Order", href: "/Track-order" },
  { label: "Exchange Your Order", href: "/Exchange" },
  { label: "Shipping Policy", href: "/Shipping-policy" },
  { label: "Refund Policy", href: "/Refund-policy" },
  { label: "Contact Us", href: "/Contact-us" },
  { label: "Privacy Policy", href: "/Privacy-policy" },
];

export default function Contact() {
  return (
    <section className="relative z-10 py-10 sm:py-16 text-white min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <img 
        src="/svg/getintouch.svg"
      alt="Get In Touch"
        className="mx-auto h-15 md:h-16 object-contain mb-6"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
  
        <ul className="flex flex-col gap-4">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-lime-400 transition-colors duration-200 text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
        </div>
    </section>
  )
}