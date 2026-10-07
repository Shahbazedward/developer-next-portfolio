"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-section__header">
        <div>
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            03 / SELECTED WORK
          </motion.p>

          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            PROJECTS BUILT
            <span>TO SOLVE REAL PROBLEMS.</span>
          </motion.h2>
        </div>

        <motion.p
          className="projects-section__intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          A selection of full-stack systems, operational software
          and digital products engineered with a focus on
          usability, performance and scalable architecture.
        </motion.p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}