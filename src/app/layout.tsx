import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d97706",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://palitos-de-queso.vercel.app");
const title = "Palitos de Queso Artesanales Congelados en Bogotá";
const description =
  "Palitos de queso artesanales congelados, hechos con queso costeño y receta familiar de Montería. Crujientes por fuera, suaves por dentro. Entregas en Bogotá coordinadas por WhatsApp. Bandeja de 20 unidades por $15.000 COP.";
const ogImage = `${siteUrl}/opengraph-image`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Palitos de Queso Bogotá",
  },
  description,
  keywords: [
    "palitos de queso Bogotá",
    "deditos de queso",
    "palitos congelados",
    "desayunos rápidos",
    "pasabocas",
    "queso costeño",
    "palitos artesanales",
    "comida congelada",
    "pasabocas Bogotá",
    "loncheras",
    "cumpleaños",
    "reuniones",
    "merienda",
    "snack congelado",
    "palitos de queso artesanales",
  ],
  authors: [{ name: "Palitos de Queso Bogotá" }],
  creator: "Palitos de Queso Bogotá",
  publisher: "Palitos de Queso Bogotá",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Palitos de Queso Bogotá",
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Palitos de queso artesanales congelados en Bogotá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  category: "food",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Palitos de Queso Bogotá",
      url: siteUrl,
      telephone: "+57-313-611-4707",
      description:
        "Palitos de queso artesanales congelados hechos con queso costeño y receta familiar tradicional de Montería.",
      areaServed: {
        "@type": "City",
        name: "Bogotá",
        addressCountry: "CO",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+57-313-611-4707",
        contactType: "sales",
        availableLanguage: ["Spanish"],
        areaServed: "CO",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Palitos de Queso Bogotá",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CO",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CO",
    },
    {
      "@type": "Product",
      name: "Palitos de Queso Artesanales Congelados",
      image: ogImage,
      description:
        "Palitos de queso artesanales congelados elaborados con queso costeño. Bandeja de 20 unidades. Crujientes por fuera y suaves por dentro.",
      brand: { "@type": "Brand", name: "Palitos de Queso Bogotá" },
      offers: {
        "@type": "Offer",
        priceCurrency: "COP",
        price: "15000",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Product",
          name: "Bandeja de Palitos de Queso Artesanales Congelados",
        },
        seller: { "@id": `${siteUrl}/#organization` },
        areaServed: {
          "@type": "City",
          name: "Bogotá",
          addressCountry: "CO",
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory:
            "https://schema.org/MerchantReturnNotPermitted",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "COP",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "CO",
            addressLocality: "Bogotá",
          },
          doesNotShip: "false",
          transitTimeLabel: "Coordinado por WhatsApp",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuántas unidades trae la bandeja?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cada bandeja contiene 20 palitos de queso artesanales congelados.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es el precio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El precio por bandeja de 20 unidades es de $15.000 COP.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se preparan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No necesitan descongelarse. Saca los palitos del congelador y llévalos directamente al aceite caliente. Fríe hasta dorar y disfruta.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto duran congelados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Manteniendo la cadena de frío, los palitos de queso pueden durar entre 6 meses y hasta 1 año congelados.",
          },
        },
        {
          "@type": "Question",
          name: "¿Realizan domicilios en toda Bogotá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las entregas se coordinan previamente por WhatsApp. Podemos encontrarnos en estaciones de TransMilenio o acordar un punto cercano según tu ubicación y horario.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className={`${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
