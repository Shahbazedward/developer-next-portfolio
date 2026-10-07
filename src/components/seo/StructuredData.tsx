import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const data = {
    "@context":
      "https://schema.org",

    "@type":
      "ProfessionalService",

    name:
      siteConfig.name,

    url:
      siteConfig.url,

    email:
      siteConfig.email,

    telephone:
      siteConfig.phone,

    description:
      siteConfig.description,

    address: {
      "@type":
        "PostalAddress",

      addressLocality:
        "Karachi",

      addressCountry:
        "PK",
    },

    areaServed: {
      "@type":
        "Place",

      name:
        "Worldwide",
    },

    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Web Applications",
      "AI Integration",
      "Frontend Development",
      "Backend Development",
    ],

    serviceType: [
      "Website Development",
      "Full-Stack Development",
      "Web Application Development",
      "Frontend Development",
      "Backend Development",
      "AI Integration",
      "Business Management Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(data),
      }}
    />
  );
}