import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Palitos de Queso Artesanales Congelados en Bogotá";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          padding: "48px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)",
            marginBottom: "24px",
            boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)",
          }}
        >
          <span style={{ fontSize: "56px" }}>🧀</span>
        </div>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: 800,
            color: "#111827",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 12px 0",
          }}
        >
          Palitos de Queso
        </h1>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#D97706",
            textAlign: "center",
            margin: "0 0 20px 0",
          }}
        >
          Artesanales Congelados · Bogotá
        </h2>
        <p
          style={{
            fontSize: "26px",
            color: "#4B5563",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Receta familiar · Queso costeño · 20 unidades $15.000
        </p>
      </div>
    ),
    size,
  );
}
