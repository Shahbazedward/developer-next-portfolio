"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { MouseEvent } from "react";

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 120,
    damping: 18,
  });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  function resetTilt() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      className="project-card"
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
      }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="project-card__media">
        <div className="project-card__shine" />

        <Image
  src={project.image}
  alt={`${project.title} interface preview`}
  fill
  quality={95}
  sizes={
    index === 2
      ? "(max-width: 900px) 100vw, (max-width: 1500px) 95vw, 1400px"
      : "(max-width: 900px) 100vw, 50vw"
  }
  className="project-card__image"
/>

        <div className="project-card__overlay" />

        <div className="project-card__index">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="project-card__category">
          {project.category}
        </div>
      </div>

      <div className="project-card__body">
        <div>
          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </div>

        <div className="project-card__tech">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            href={project.liveUrl}
            aria-label={`Open ${project.title} live project`}
          >
            Live Project
            <ArrowUpRight size={17} />
          </a>

          <a
            href={project.githubUrl}
            aria-label={`Open ${project.title} GitHub repository`}
          >
            <SiGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}