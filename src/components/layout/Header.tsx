"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/SectionHeader";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { NAV_LINKS, BRAND } from "@/lib/constants";

function MoreMenu({
  links,
  isScrolled,
}: {
  links: typeof NAV_LINKS;
  isScrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-100 hover:text-amber-700 focus-visible:ring-2 focus-visible:ring-amber-400",
          isScrolled ? "text-stone-700" : "text-stone-800",
          open && "bg-amber-100 text-amber-700",
        )}
      >
        Más
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-stone-100 bg-white/98 p-2 shadow-xl backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryHrefs = new Set(["#inicio", "#beneficios", "#galeria", "#testimonios"]);
  const primaryLinks = NAV_LINKS.filter((link) => primaryHrefs.has(link.href));
  const moreLinks = NAV_LINKS.filter((link) => !primaryHrefs.has(link.href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5",
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="group flex items-center gap-3 focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-4 rounded-xl"
            aria-label="Volver al inicio"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-400 text-lg shadow-md transition-transform group-hover:scale-105">
              🧀
            </div>
            <div className="hidden flex-col sm:flex">
              <span className={cn("text-lg font-bold leading-tight", isScrolled ? "text-stone-900" : "text-stone-900")}>
                Palitos de Queso
              </span>
              <span className="text-xs font-medium text-stone-500">Bogotá</span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-100 hover:text-amber-700 focus-visible:ring-2 focus-visible:ring-amber-400",
                  isScrolled ? "text-stone-700" : "text-stone-800",
                )}
              >
                {link.label}
              </a>
            ))}
            <MoreMenu links={moreLinks} isScrolled={isScrolled} />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              aria-label={`Llamar al ${BRAND.phone}`}
              className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phone}
            </a>
            <WhatsAppButton variant="inline" label="Pedir ahora" />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-colors hover:bg-amber-200 focus-visible:ring-2 focus-visible:ring-amber-400 lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-30 border-t border-stone-100 bg-white/98 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-stone-100 pt-4">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-full border border-stone-200 px-5 py-3 text-center font-semibold text-stone-700"
            >
              <Phone className="h-4 w-4" />
              Llamar ahora
            </a>
            <WhatsAppButton variant="inline" label="Pedir por WhatsApp" className="w-full justify-center" />
          </div>
        </nav>
      </div>
    </header>
  );
}
