import {
  AppWindow,
  Code2,
  Database,
  LayoutDashboard,
  ServerCog,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    icon: AppWindow,
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive and modern websites designed around performance, usability and business growth.",
    tags: ["Next.js", "React", "Responsive"],
  },
  {
    icon: LayoutDashboard,
    number: "02",
    title: "Business Web Applications",
    description:
      "Custom dashboards, portals and management systems built around real operational workflows.",
    tags: ["Dashboards", "Admin Panels", "Portals"],
  },
  {
    icon: Code2,
    number: "03",
    title: "Frontend Engineering",
    description:
      "Interactive interfaces with refined motion, accessibility, responsive layouts and modern UI architecture.",
    tags: ["TypeScript", "Motion", "UI / UX"],
  },
  {
    icon: ServerCog,
    number: "04",
    title: "Backend Development",
    description:
      "Secure APIs, authentication, business logic and scalable server-side architecture for modern applications.",
    tags: ["Node.js", "Express", "REST APIs"],
  },
  {
    icon: Database,
    number: "05",
    title: "Database Systems",
    description:
      "Structured relational data models and reliable application databases designed for maintainability and scale.",
    tags: ["MySQL", "PostgreSQL", "Sequelize"],
  },
  {
    icon: Sparkles,
    number: "06",
    title: "AI Integration",
    description:
      "AI-powered assistants and intelligent features integrated directly into websites and web applications.",
    tags: ["Groq", "AI APIs", "Automation"],
  },
];