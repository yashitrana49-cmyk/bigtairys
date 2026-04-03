import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollReveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-active");
        } else {
          el.classList.remove("reveal-active");
        }
      },
      {
        threshold: 0.1,          // 👈 LOWER threshold
        rootMargin: "0px 0px -80px 0px", // 👈 forces exit/re-entry
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}