"use client";

import Image from "next/image";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Container } from "@/components/shared/SectionHeader";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 pb-24 text-stone-300 lg:pb-0">
      <Container className="py-16 lg:py-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-removebg-preview.png"
                alt="Logo Palitos de Queso"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div>
                <span className="block text-xl font-bold text-white">Palitos de Queso</span>
                <span className="text-sm text-stone-400">Bogotá</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-stone-400">
              Palitos de queso artesanales congelados, elaborados con queso costeño y una receta
              familiar tradicional de Montería. Sabor, textura y practicidad en cada bocado.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navegación</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(BRAND.whatsappMessage)}`,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  aria-label={`Escríbenos por WhatsApp al ${BRAND.phone}`}
                  className="flex items-center gap-3 text-stone-400 transition-colors hover:text-[#25D366]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>{BRAND.phone}</span>
                </button>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center gap-3 text-stone-400 transition-colors hover:text-amber-400"
                >
                  <Phone className="h-5 w-5" />
                  <span>Llamar ahora</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-stone-400 transition-colors hover:text-amber-400"
                >
                  <Mail className="h-5 w-5" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>Entregas coordinadas en Bogotá, Colombia</span>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <Clock className="h-5 w-5 shrink-0" />
                <span>Horario flexible coordinado por WhatsApp</span>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Cobertura</h3>
            <p className="mt-5 text-stone-400">
              Realizamos entregas coordinadas en Bogotá. Nos podemos encontrar en estaciones de
              TransMilenio o acordar un punto cercano según tu ubicación y horario.
            </p>
            <div className="mt-5 rounded-2xl bg-stone-800/50 p-4">
              <p className="text-sm text-stone-300">
                No prometemos domicilios ni cobertura total. Trabajamos con honestidad y
                flexibilidad para brindarte la mejor experiencia.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-sm text-stone-500">
            © {currentYear} {BRAND.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-500">
            <a href="#" className="hover:text-stone-300">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-stone-300">
              Términos de servicio
            </a>
            <a href="#preguntas" className="hover:text-stone-300">
              Preguntas frecuentes
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
