import { ImageResponse } from "next/og";
import { siteIdentity } from "@/content/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at top left, rgba(251, 191, 36, 0.22), transparent 28%), linear-gradient(180deg, #081322 0%, #102744 100%)",
          color: "#f8fbff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "999px",
            color: "#fde68a",
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.24em",
            padding: "14px 22px",
            textTransform: "uppercase",
            width: "auto",
          }}
        >
          Morning Star Ledger Co.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 72,
              lineHeight: 1.05,
            }}
          >
            Bookkeeping that helps your business start the day informed.
          </div>
          <div style={{ color: "#d6e1f0", fontSize: 30, lineHeight: 1.4 }}>
            {siteIdentity.businessTagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
