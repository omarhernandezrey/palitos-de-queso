import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export const alt = "Palitos de Queso Artesanales Congelados en Bogotá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoData = readFileSync(
    join(process.cwd(), "public/images/logo-removebg-preview.png"),
  ).toString("base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "56px",
          background: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src={logoSrc}
          alt="Logo Palitos de Queso"
          width={340}
          height={340}
          style={{
            filter: "drop-shadow(0 24px 48px rgba(217, 119, 6, 0.35))",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
            }}
          >
            Palitos de Queso
          </h1>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#D97706",
              margin: "0 0 28px 0",
            }}
          >
            Artesanales Congelados en Bogotá
          </h2>
          <p
            style={{
              fontSize: "30px",
              color: "#374151",
              lineHeight: 1.4,
              margin: "0 0 32px 0",
              maxWidth: "620px",
            }}
          >
            Se venden palitos de queso: bandeja de 20 deditos a $15.000
          </p>
          <div
            style={{
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
      </div>
    ),
    size,
  );
}
