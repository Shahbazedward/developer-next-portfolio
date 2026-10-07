"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`
    radial-gradient(
      330px circle at ${mouseX}px ${mouseY}px,
      rgba(124, 92, 255, 0.14),
      transparent 72%
    )
  `;

  const Icon = service.icon;

  return (
    <motion.article
      className="service-card"
      onMouseMove={handleMouseMove}
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="service-card__spotlight"
        style={{
          background: spotlight,
        }}
        aria-hidden="true"
      />

      <div className="service-card__top">
        <div className="service-card__icon">
          <Icon size={21} strokeWidth={1.6} />
        </div>

        <span>{service.number}</span>
      </div>

      <div className="service-card__content">
        <h3>{service.title}</h3>

        <p>{service.description}</p>
      </div>

      <div className="service-card__tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="service-card__line" aria-hidden="true" />
    </motion.article>
  );
}