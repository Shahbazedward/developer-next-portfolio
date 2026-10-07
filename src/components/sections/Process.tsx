"use client";

import { motion } from "motion/react";
import {
  Search,
  Workflow,
  Boxes,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import { processSteps } from "@/data/process";

const icons = [
  Search,
  Workflow,
  Boxes,
  Code2,
  ShieldCheck,
  Rocket,
];

export default function Process() {
  return (
    <section
      id="process"
      className="process-section"
      aria-labelledby="process-heading"
    >
      <div className="process-section__header">
        <div>
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            05 / PROCESS
          </motion.p>

          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            FROM FIRST IDEA
            <span>TO FINAL LAUNCH.</span>
          </motion.h2>
        </div>

        <motion.p
          className="process-section__intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Every project follows a structured process designed to
          reduce confusion, improve quality and turn an idea into
          a reliable digital product.
        </motion.p>
      </div>

      <div className="process-track">
        <motion.div
          className="process-track__line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {processSteps.map((step, index) => {
          const Icon = icons[index];

          return (
            <motion.article
              key={step.number}
              className={`process-step ${
                index % 2 === 0
                  ? "process-step--left"
                  : "process-step--right"
              }`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="process-step__node">
                <div className="process-step__node-inner">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
              </div>

              <div className="process-step__card">
                <div className="process-step__top">
                  <span>{step.number}</span>

                  <small>DEVELOPMENT STAGE</small>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="process-step__signal" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}