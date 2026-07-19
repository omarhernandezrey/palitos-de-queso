"use client";

import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { Container } from "@/components/shared/SectionHeader";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-yellow-400 text-xl shadow-lg">
                🧀
              </div>
              <div>
                <span className="block text-xl font-bold text-white">Palitos de Queso</span>
                <span className="text-sm text-stone-400">Bogotá</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-stone-400">
              Palitos de queso artesanales congelados, elaborados con queso costeño y una receta
              familiar tradicional de Montería. Sabor, textura y practicidad en cada bocado.
            </p>
            <div className="mt-6">
              <SocialLinks iconClassName="h-5 w-5 text-stone-400 group-hover:text-amber-500" />
            </div>
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
                  <MessageCircle className="h-5 w-5" />
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

          <div className="lg:col-span-3">
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
