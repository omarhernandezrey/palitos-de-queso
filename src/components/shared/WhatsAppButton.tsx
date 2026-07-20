"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2.003C6.58 2.003 2.13 6.45 2.13 11.913c0 1.834.48 3.556 1.318 5.045L2 22l5.176-1.354a9.87 9.87 0 0 0 4.858 1.24h.005c5.46 0 9.91-4.447 9.91-9.91 0-2.647-1.03-5.135-2.902-7.006a9.85 9.85 0 0 0-7.007-2.967zm0 18.13h-.004a8.2 8.2 0 0 1-4.183-1.146l-.3-.178-3.113.815.831-3.037-.196-.312a8.19 8.19 0 0 1-1.257-4.362c0-4.535 3.69-8.225 8.226-8.225a8.17 8.17 0 0 1 5.816 2.412 8.17 8.17 0 0 1 2.407 5.818c0 4.535-3.69 8.215-8.227 8.215z" />
    </svg>
  );
}

interface WhatsAppButtonProps {
  variant?: "sticky" | "inline" | "hero" | "cta";
  label?: string;
  shortLabel?: string;
  className?: string;
  message?: string;
}

export function WhatsAppButton({
  variant = "inline",
  label = "Pedir por WhatsApp",
  shortLabel,
  className,
  message = BRAND.whatsappMessage,
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const url = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(message)}`;

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-2 lg:flex">
        {showTooltip && (
          <div className="mb-2 max-w-[220px] rounded-2xl bg-white px-4 py-3 text-sm font-medium text-stone-800 shadow-premium animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start gap-2">
              <span>✨</span>
              <span>¡Escríbenos y coordina tu entrega hoy mismo!</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -left-2 rounded-full bg-stone-200 p-1 text-stone-600 hover:bg-stone-300"
              aria-label="Cerrar tooltip"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
          aria-label="Pedir palitos de queso por WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={cn(
            "group relative flex h-16 w-16 shrink-0 animate-bounce items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg [animation-duration:2.5s] hover:animate-none hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-4 active:scale-95",
            className,
          )}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-green-400/60 [animation-duration:2.5s]" />
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <WhatsAppIcon className="relative h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
          <span className="sr-only">{label}</span>
        </button>
      </div>
    );
  }

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 focus-visible:ring-4 focus-visible:ring-offset-4";

  const variants = {
    inline:
      "bg-[#25D366] px-5 py-3 text-sm text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 focus-visible:ring-green-400 sm:px-6 sm:text-base",
    hero:
      "gradient-brand px-6 py-3.5 text-sm text-white shadow-brand hover:shadow-2xl hover:shadow-amber-500/30 focus-visible:ring-amber-400 sm:px-8 sm:py-4 sm:text-lg",
    cta:
      "bg-[#25D366] px-7 py-4 text-base text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/30 focus-visible:ring-green-400 sm:px-10 sm:py-5 sm:text-lg",
  };

  return (
    <button
      type="button"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      aria-label={`${label} - Abre WhatsApp`}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <WhatsAppIcon className="relative h-5 w-5 shrink-0" />
      <span className="relative whitespace-nowrap">
        {shortLabel ? (
          <>
            <span className="sm:hidden">{shortLabel}</span>
            <span className="hidden sm:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </span>
    </button>
  );
}

interface CallButtonProps {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function CallButton({
  className,
  label = "Llamar ahora",
  variant = "secondary",
}: CallButtonProps) {
  const styles = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700 shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50 shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-stone-700 border border-stone-300 hover:bg-stone-100",
  };

  return (
    <a
      href={`tel:${BRAND.phoneRaw}`}
      aria-label={`Llamar al ${BRAND.phone}`}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-4 hover:-translate-y-0.5 sm:px-6 sm:text-base",
        styles[variant],
        className,
      )}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}
