"use client";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  BrainCircuit,
  MessageSquareText,
  ShieldCheck,
  Zap,
} from "lucide-react";

import PortfolioAssistant from "@/components/ai/PortfolioAssistant";

const features = [
  {
    icon: MessageSquareText,
    title: "Portfolio-aware",
    text: "Ask about projects, services and technologies.",
  },
  {
    icon: Zap,
    title: "Fast responses",
    text: "Powered by high-speed AI inference.",
  },
  {
    icon: ShieldCheck,
    title: "Server protected",
    text: "API credentials never reach the browser.",
  },
];

export default function AIAssistant() {
  return (
    <section
      id="ai"
      className="ai-section"
      aria-labelledby="ai-heading"
    >
      <div
        className="ai-section__background"
        aria-hidden="true"
      />

      <div className="ai-section__grid">
        <div className="ai-section__content">
          <motion.p
            className="section-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            06 / AI ASSISTANT
          </motion.p>

          <motion.h2
            id="ai-heading"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            DON&apos;T JUST
            <span>BROWSE. ASK.</span>
          </motion.h2>

          <motion.p
            className="ai-section__description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.08,
            }}
          >
            This portfolio includes an intelligent assistant
            that can answer questions about my work,
            technologies, services and development approach.
          </motion.p>

          <div className="ai-section__features">
            {features.map(
              (feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    className="ai-feature"
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        0.12 +
                        index * 0.08,
                    }}
                  >
                    <div className="ai-feature__icon">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <strong>
                        {feature.title}
                      </strong>

                      <span>
                        {feature.text}
                      </span>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>

          <motion.a
            href="#contact"
            className="ai-section__cta"
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            Have a project in mind?
            <ArrowUpRight size={17} />
          </motion.a>
        </div>

        <motion.div
          className="ai-section__terminal"
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="ai-section__terminal-glow"
            aria-hidden="true"
          />

          <div className="ai-section__terminal-label">
            <BrainCircuit size={14} />

            LIVE PORTFOLIO INTELLIGENCE
          </div>

          <PortfolioAssistant />
        </motion.div>
      </div>
    </section>
  );
}