import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black text-gray-300">
      {/* top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-lime-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT */}
          <div className="text-center md:text-left">
              <img 
              src="/svg/bigtairys.svg"
              alt="Big Tairys"
              className="h-6 w-auto"
              />
            <p className="font-cinzel mt-1 text-xs uppercase tracking-widest text-gray-400 ">
              Inspired from the streets
            </p>
          </div>

          {/* CENTER */}
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-3 text-gray-400">
              Follow us
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-white transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition font-bold">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right text-xs text-gray-400">
            © 2026 BIG TAIRYS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}