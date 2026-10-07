import {
  ImageResponse,
} from "next/og";

export const alt =
  "Full-Stack Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType =
  "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",

          display: "flex",

          position: "relative",

          overflow: "hidden",

          background:
            "linear-gradient(135deg,#050509,#090816)",

          color: "white",

          fontFamily:
            "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",

            width: 650,
            height: 650,

            right: -150,
            top: -120,

            borderRadius: "50%",

            background:
              "radial-gradient(circle,rgba(112,78,255,.36),rgba(30,210,255,.08),transparent 70%)",
          }}
        />

        <div
          style={{
            width: "100%",

            display: "flex",

            flexDirection: "column",

            justifyContent:
              "space-between",

            padding: "70px",
          }}
        >
          <div
            style={{
              display: "flex",

              alignItems:
                "center",

              gap: 16,
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                borderRadius: 16,

                background:
                  "linear-gradient(135deg,#7654ff,#28d3ff)",

                fontSize: 17,
              }}
            >
              &lt;/&gt;
            </div>

            <div
              style={{
                fontSize: 19,

                letterSpacing:
                  "0.15em",
              }}
            >
              DEVFOLIO
            </div>
          </div>

          <div
            style={{
              maxWidth: 900,

              display: "flex",

              flexDirection:
                "column",
            }}
          >
            <div
              style={{
                fontSize: 74,

                fontWeight: 700,

                lineHeight: 0.95,

                letterSpacing:
                  "-0.055em",
              }}
            >
              FULL-STACK
              DEVELOPER
            </div>

            <div
              style={{
                marginTop: 24,

                fontSize: 25,

                color:
                  "#9292a0",
              }}
            >
              Websites • Web Apps •
              Business Systems • AI
            </div>
          </div>

          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              fontSize: 14,

              color:
                "#6f6f7c",

              letterSpacing:
                "0.09em",
            }}
          >
            <span>
              NEXT.JS • REACT • NODE.JS
            </span>

            <span>
              KARACHI • PAKISTAN
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}