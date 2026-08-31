import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button.jsx";

const links = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#brand-story" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur border-b border-hairline">
      <nav className="container-page flex h-18 items-center justify-between py-4" aria-label="Primary">
        <a href="#" className="text-2xl tracking-wide text-ink font-serif">
          Tukaram Soni
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-ink/80 hover:text-burgundy transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button as="a" href="#featured-products" variant="primary">
            Explore Collection
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-[73px] bg-ivory transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 pt-6">
          {links.map((link) => (
            <li key={link.label} className="border-b border-hairline">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-page mt-8">
          <Button
            as="a"
            href="#featured-products"
            variant="primary"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Explore Collection
          </Button>
        </div>
      </div>
    </header>
  );
}
