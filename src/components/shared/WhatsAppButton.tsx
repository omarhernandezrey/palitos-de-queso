"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/constants";

interface WhatsAppButtonProps {
  variant?: "sticky" | "inline" | "hero" | "cta";
  label?: string;
  className?: string;
  message?: string;
}

export function WhatsAppButton({
  variant = "inline",
  label = "Pedir por WhatsApp",
  className,
  message = BRAND.whatsappMessage,
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const url = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(message)}`;

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
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
            "group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#25D366] px-6 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 focus-visible:ring-4 focus-visible:ring-green-400 focus-visible:ring-offset-4",
            className,
          )}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-5 w-5 fill-current" />
          </span>
          <span className="relative hidden font-semibold sm:inline">{label}</span>
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-200" />
          </span>
        </button>
      </div>
    );
  }

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 focus-visible:ring-4 focus-visible:ring-offset-4";

  const variants = {
    inline:
      "bg-[#25D366] px-6 py-3 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 focus-visible:ring-green-400",
    hero:
      "gradient-brand px-8 py-4 text-lg text-white shadow-brand hover:shadow-2xl hover:shadow-amber-500/30 focus-visible:ring-amber-400",
    cta:
      "bg-[#25D366] px-10 py-5 text-lg text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/30 focus-visible:ring-green-400",
  };

  return (
    <button
      type="button"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      aria-label={`${label} - Abre WhatsApp`}
      className={cn(baseStyles, variants[variant], className)}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      <MessageCircle className="relative h-5 w-5 fill-current" />
      <span className="relative">{label}</span>
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
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-4 hover:-translate-y-0.5",
        styles[variant],
        className,
      )}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}
