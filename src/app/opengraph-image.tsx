import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Palitos de Queso Artesanales Congelados en Bogotá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
            marginBottom: "32px",
            boxShadow: "0 24px 48px rgba(217, 119, 6, 0.3)",
          }}
        >
          <span style={{ fontSize: "64px" }}>🧀</span>
        </div>
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#111827",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 16px 0",
          }}
        >
          Palitos de Queso
        </h1>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 600,
            color: "#D97706",
            textAlign: "center",
            margin: "0 0 24px 0",
          }}
        >
          Artesanales Congelados en Bogotá
        </h2>
        <p
          style={{
            fontSize: "28px",
            color: "#4B5563",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Receta familiar de Montería · Queso costeño · 20 unidades $15.000 COP
        </p>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#25D366",
            color: "#FFFFFF",
            padding: "16px 32px",
            borderRadius: "9999px",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          <span>💬</span>
          <span>Pedir por WhatsApp</span>
        </div>
      </div>
    ),
    size,
  );
}
