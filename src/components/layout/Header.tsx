"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Home, ImageIcon, UtensilsCrossed, Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/SectionHeader";
import { WhatsAppButton, WhatsAppIcon } from "@/components/shared/WhatsAppButton";
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
        <div className="absolute right-0 top-full mt-3 w-56 origin-top-right animate-in fade-in slide-in-from-top-2 rounded-2xl border border-stone-100 bg-white/98 p-2 shadow-xl ring-1 ring-stone-900/5 backdrop-blur-xl duration-150">
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

const TAB_ITEMS = [
  { href: "#inicio", label: "Inicio", icon: Home },
  { href: "#galeria", label: "Galería", icon: ImageIcon },
  { href: "#medallones", label: "Medallones", icon: UtensilsCrossed },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#inicio");

  const primaryHrefs = new Set(["#inicio", "#beneficios", "#galeria", "#medallones"]);
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
    const handleHashChange = () => setActiveHash(window.location.hash || "#inicio");
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
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
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 border-b transition-all duration-300",
          isScrolled
            ? "border-stone-900/5 bg-white/85 py-3 shadow-sm backdrop-blur-xl"
            : "border-white/10 bg-white/40 py-4 backdrop-blur-md lg:py-5",
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <a
              href="#inicio"
              className="group flex items-center gap-3 rounded-xl focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-4"
              aria-label="Volver al inicio"
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-stone-900/5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md lg:h-11 lg:w-11">
                <Image
                  src="/images/logo-removebg-preview.png"
                  alt="Logo Palitos de Queso"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain lg:h-[30px] lg:w-[30px]"
                  priority
                />
              </span>
              <div className="flex flex-col">
                <span className="font-heading text-base font-bold leading-tight text-stone-900 sm:text-lg">
                  Palitos de Queso
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600 sm:text-[11px]">
                  Bogotá
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group/link relative rounded-full px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:text-amber-700 focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-amber-500 transition-transform duration-300 group-hover/link:scale-x-100" />
                </a>
              ))}
              <MoreMenu links={moreLinks} isScrolled={isScrolled} />
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                aria-label={`Llamar al ${BRAND.phone}`}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="hidden xl:inline">{BRAND.phone}</span>
              </a>
              <span className="h-6 w-px bg-stone-200" />
              <WhatsAppButton variant="inline" label="Pedir ahora" />
            </div>

            {/* Quick call icon — mobile only, keeps the top bar minimal */}
            <a
              href={`tel:${BRAND.phoneRaw}`}
              aria-label={`Llamar al ${BRAND.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-700 transition-colors hover:bg-stone-200 focus-visible:ring-2 focus-visible:ring-amber-400 lg:hidden"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </Container>
      </header>

      {/* Bottom tab bar — mobile only, Twitter/X-style structure */}
      <nav
        aria-label="Navegación principal"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-900/5 bg-white/90 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:hidden"
      >
        <div className="grid grid-cols-5 items-end px-1 pb-2 pt-2">
          {TAB_ITEMS.slice(0, 2).map((item) => (
            <TabItem key={item.href} item={item} isActive={activeHash === item.href} />
          ))}

          {/* Center — elevated WhatsApp FAB */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(BRAND.whatsappMessage)}`,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              aria-label="Pedir por WhatsApp"
              className="group -mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 ring-4 ring-white transition-transform active:scale-95"
            >
              <WhatsAppIcon className="h-6 w-6 transition-transform group-active:scale-90" />
            </button>
          </div>

          {TAB_ITEMS.slice(2).map((item) => (
            <TabItem key={item.href} item={item} isActive={activeHash === item.href} />
          ))}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            className="flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] font-medium transition-colors"
          >
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                isMobileMenuOpen ? "bg-amber-100 text-amber-700" : "text-stone-500",
              )}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
            <span className={isMobileMenuOpen ? "text-amber-700" : "text-stone-500"}>Menú</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu — bottom sheet, opens from the tab bar */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-30 max-h-[75vh] overflow-y-auto rounded-t-[2rem] border-t border-stone-100 bg-white pb-[calc(env(safe-area-inset-bottom)+88px)] pt-3 shadow-2xl transition-transform duration-300 lg:hidden",
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-stone-200" />
        <nav className="flex flex-col gap-1 px-4 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                activeHash === link.href
                  ? "bg-amber-100 text-amber-700"
                  : "text-stone-700 hover:bg-amber-50 hover:text-amber-700",
              )}
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
    </>
  );
}

function TabItem({
  item,
  isActive,
}: {
  item: (typeof TAB_ITEMS)[number];
  isActive: boolean;
}) {
  return (
    <a
      href={item.href}
      className="flex flex-col items-center gap-1 rounded-xl py-1 text-[11px] font-medium"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
          isActive ? "bg-amber-100 text-amber-700" : "text-stone-500",
        )}
      >
        <item.icon className="h-5 w-5" strokeWidth={isActive ? 2.25 : 2} />
      </span>
      <span className={isActive ? "text-amber-700" : "text-stone-500"}>{item.label}</span>
    </a>
  );
}
