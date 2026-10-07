import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:
      "DEVFOLIO — Full-Stack Developer",

    short_name:
      "DEVFOLIO",

    description:
      "Full-stack developer portfolio showcasing websites, web applications, business systems and AI integrations.",

    start_url: "/",

    display: "standalone",

    background_color:
      "#050509",

    theme_color:
      "#050509",

    icons: [
      {
        src:
          "/favicon.ico",

        sizes:
          "any",

        type:
          "image/x-icon",
      },
    ],
  };
}