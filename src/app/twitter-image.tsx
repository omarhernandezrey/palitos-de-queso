import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

export const alt = "Palitos de Queso Artesanales Congelados en Bogotá";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
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
          gap: "48px",
          background: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
          padding: "56px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src={logoSrc}
          alt="Logo Palitos de Queso"
          width={300}
          height={300}
          style={{
            filter: "drop-shadow(0 20px 40px rgba(217, 119, 6, 0.35))",
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
              fontSize: "56px",
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.1,
              margin: "0 0 12px 0",
            }}
          >
            Palitos de Queso
          </h1>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#D97706",
              margin: "0 0 24px 0",
            }}
          >
            Artesanales Congelados · Bogotá
          </h2>
          <p
            style={{
              fontSize: "26px",
              color: "#374151",
              lineHeight: 1.4,
              maxWidth: "580px",
              margin: 0,
            }}
          >
            Se venden palitos de queso: bandeja de 20 deditos a $15.000
          </p>
        </div>
      </div>
    ),
    size,
  );
}
