import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Track Your Order", href: "/track-order" },
  { label: "Exchange Your Order", href: "/exchange" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Contact() {
  return (
    <section className="relative z-10 py-10 sm:py-16 text-white min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <img 
        src="/svg/getintouch.svg"
      alt="Get In Touch"
        className="mx-auto h-14 md:h-16 object-contain mb-6"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
  
        <ul className="flex flex-col gap-4">
          {quickLinks.map((link) => (
            <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white/80 hover:text-lime-400 transition-colors duration-200 text-base"
                >
                  {link.label}
                </Link>
              </li>
          ))}
        </ul>
      </div>
        </div>
    </section>
  )
}