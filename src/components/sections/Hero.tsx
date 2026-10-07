"use client";

import dynamic from "next/dynamic";

import { motion, useMotionValue, useSpring } from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Sparkles,
} from "lucide-react";

const EnergyCore = dynamic(() => import("@/components/three/EnergyCore"), {
  ssr: false,

  loading: () => (
    <div className="hero-core-loading" aria-hidden="true">
      <div />
    </div>
  ),
});

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <section
      id="home"
      className="hero"
      onPointerMove={handlePointerMove}
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="hero__cursor-glow"
        style={{
          left: smoothX,
          top: smoothY,
        }}
        aria-hidden="true"
      />

      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="hero__content">
        <motion.div
          className="hero__eyebrow"
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
        >
          <span className="hero__status-dot" />
          AVAILABLE FOR CREATIVE PROJECTS
          <Sparkles size={14} />
        </motion.div>

        <motion.h1
          id="hero-heading"
          className="hero__title"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          BUILDING DIGITAL
          <span>EXPERIENCES</span>
          THAT FEEL ALIVE.
        </motion.h1>

        <motion.p
          className="hero__description"
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          I&apos;m a full-stack developer building modern websites, scalable web
          applications, business management systems and AI-powered digital
          products where clean engineering meets bold creative direction.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.42,
          }}
        >
          <motion.a
            href="#work"
            className="button button--primary"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            Explore my work
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            href="#capabilities"
            className="button button--ghost"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            What I build
            <ArrowDownRight size={17} />
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__capabilities"
          id="capabilities"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.62,
          }}
        >
          <div className="hero__capability">
            <Braces size={17} />

            <div>
              <span>Frontend</span>
              <strong>Next.js / React</strong>
            </div>
          </div>

          <div className="hero__capability">
            <Cpu size={17} />

            <div>
              <span>Backend</span>
              <strong>Node.js / APIs</strong>
            </div>
          </div>

          <div className="hero__capability">
            <Sparkles size={17} />

            <div>
              <span>Intelligence</span>
              <strong>AI Integration</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__visual"
        initial={{
          opacity: 0,
          scale: 0.87,
          x: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1.1,
          delay: 0.22,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-hidden="true"
      >
        <div className="hero__visual-label hero__visual-label--top">
          <span>CREATIVE</span>
          <strong>DEVELOPMENT</strong>
        </div>

        <div className="hero__visual-label hero__visual-label--bottom">
          <span>FULL-STACK</span>
          <strong>ENGINEERING</strong>
        </div>

        <div className="hero__core-glow" />

        <EnergyCore />
      </motion.div>

      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>

        <div className="hero__scroll-line">
          <div />
        </div>
      </div>
    </section>
  );
}
