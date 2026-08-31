import { Instagram, Facebook, MessageCircle } from "lucide-react";

const nav = [
  { label: "Home", href: "#" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#brand-story" },
  { label: "Contact", href: "#footer" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-ivory/85">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <p className="text-2xl font-serif text-ivory">Tukaram Soni</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
            Jewellery rooted in tradition and made for the way life is lived
            today &mdash; crafted with care, worn for years.
          </p>
          <div className="mt-6 flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-ivory transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-ivory transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-ivory/70 hover:text-ivory transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm tracking-[0.14em] text-ivory/50">NAVIGATE</p>
          <ul className="mt-4 space-y-3">
            {nav.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-ivory/75 hover:text-ivory transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm tracking-[0.14em] text-ivory/50">VISIT</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-ivory/75 space-y-1">
            <p>Tukaram Soni Jewellers</p>
            <p>Laxmi Road, Pune, Maharashtra</p>
            <p>hello@tukaramsoni.com</p>
            <p>+91 98000 00000</p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Tukaram Soni. All rights reserved.</p>
          <p>Handcrafted with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
