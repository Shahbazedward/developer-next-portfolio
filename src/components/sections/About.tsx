"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import {
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const TechMonolith = dynamic(
  () => import("@/components/three/TechMonolith"),
  {
    ssr: false,
  },
);

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "5+",
    label: "Core Technologies",
  },
  {
    value: "100%",
    label: "Responsive Builds",
  },
];

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "MySQL",
  "PostgreSQL",
  "AI APIs",
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-section__grid">
        <div className="about-section__content">
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            02 / ABOUT
          </motion.p>

          <motion.h2
            id="about-heading"
            className="about-section__title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            I BUILD PRODUCTS
            <span>THAT FEEL INTENTIONAL.</span>
          </motion.h2>

          <motion.p
            className="about-section__lead"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            I am a full-stack developer focused on building
            modern, scalable and visually refined digital
            products. I combine frontend creativity with backend
            architecture to create experiences that are fast,
            usable and built around real business needs.
          </motion.p>

          <div className="about-section__features">
            <motion.div
              className="about-feature"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Code2 size={20} />

              <div>
                <strong>Clean Engineering</strong>
                <span>
                  Maintainable code, scalable architecture and
                  strong development structure.
                </span>
              </div>
            </motion.div>

            <motion.div
              className="about-feature"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <Layers3 size={20} />

              <div>
                <strong>Full-Stack Thinking</strong>
                <span>
                  Frontend, backend, databases and APIs designed
                  as one complete system.
                </span>
              </div>
            </motion.div>

            <motion.div
              className="about-feature"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
            >
              <Rocket size={20} />

              <div>
                <strong>Built for Impact</strong>
                <span>
                  Every interaction is designed around usability,
                  performance and conversion.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="about-visual"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="about-visual__glow" />

          <div className="about-visual__canvas">
            <TechMonolith />
          </div>

          <div className="about-tech about-tech--one">
            NEXT.JS
          </div>

          <div className="about-tech about-tech--two">
            NODE.JS
          </div>

          <div className="about-tech about-tech--three">
            TYPESCRIPT
          </div>

          <div className="about-tech about-tech--four">
            AI
          </div>

          <div className="about-visual__badge">
            <Sparkles size={15} />
            CREATIVE DEVELOPMENT
          </div>
        </motion.div>
      </div>

      <div className="about-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="about-stat"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.09,
            }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="about-stack">
        <span>TECHNOLOGY STACK</span>

        <div className="about-stack__items">
          {technologies.map((technology) => (
            <div key={technology}>{technology}</div>
          ))}
        </div>
      </div>
    </section>
  );
}