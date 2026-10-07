"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className="services-section__grid-bg" aria-hidden="true" />

      <div className="services-section__header">
        <div>
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            04 / SERVICES
          </motion.p>

          <motion.h2
            id="services-heading"
            initial={{
              opacity: 0,
              y: 28,
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
            FROM IDEA TO
            <span>DIGITAL PRODUCT.</span>
          </motion.h2>
        </div>

        <motion.div
          className="services-section__intro"
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
            delay: 0.1,
          }}
        >
          <ArrowDownRight size={20} />

          <p>
            I help turn business ideas into polished digital
            products by combining frontend design, backend
            engineering and modern web technologies.
          </p>
        </motion.div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>

      <motion.div
        className="services-marquee"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="services-marquee__track">
          <span>DESIGN</span>
          <i />
          <span>DEVELOPMENT</span>
          <i />
          <span>PERFORMANCE</span>
          <i />
          <span>AI</span>
          <i />
          <span>SCALABILITY</span>
          <i />
          <span>EXPERIENCE</span>
        </div>
      </motion.div>
    </section>
  );
}