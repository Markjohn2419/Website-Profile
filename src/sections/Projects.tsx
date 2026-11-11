
import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "PROGRAMMING LANGUAGE",
    title: "C-Based Programming Language",
    description:
      "An exploration of programming language design, including lexical analysis, syntax rules, tokens, and language interpretation.",
    technologies: ["C", "Compiler Design", "Lexical Analysis"],
    status: "IN DEVELOPMENT",
    year: "2026",
    details:
      "A hands-on study of how source code moves from tokens and grammar rules toward an executable interpretation.",
  },
  {
    number: "02",
    category: "MACHINE LEARNING RESEARCH",
    title: "Phishing URL Detection",
    description:
      "Researching phishing URL detection under evolving URL patterns using continual learning to address concept drift.",
    technologies: ["Python", "Machine Learning", "Continual Learning"],
    status: "RESEARCH IN PROGRESS",
    year: "2026",
    details:
      "An investigation into how continual learning can keep phishing detection useful as malicious URL patterns change over time.",
  },
  {
    number: "03",
    category: "COMPUTER SCIENCE",
    title: "Systems & Architecture Experiments",
    description:
      "Academic experiments involving automata theory, MIPS assembly, computational models, and low-level system concepts.",
    technologies: ["Automata Theory", "MIPS", "Computer Architecture"],
    status: "ACADEMIC WORK",
    year: "2026",
    details:
      "A collection of focused experiments that connect formal models, assembly instructions, and the behavior of computer systems.",
  },
];

function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <div>
          <p className="eyebrow">03 — SELECTED WORK</p>
          <h2>
            Ideas into
            <br />
            implementation<span>.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A collection of academic work, technical experiments,
          and personal development projects documenting my
          journey in computer science.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card${expandedProject === project.number ? " project-card-expanded" : ""}`}
            key={project.number}
          >
            <div className="project-top">
              <span>{project.number} / PROJECT</span>
              <span>{project.year}</span>
            </div>

            <div className="project-category">
              {project.category}
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            {expandedProject === project.number && (
              <p className="project-details">{project.details}</p>
            )}

            <div className="project-technologies">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-bottom">
              <span className="project-status">
                {project.status}
              </span>
              <button
                className="project-action"
                type="button"
                aria-expanded={expandedProject === project.number}
                onClick={() =>
                  setExpandedProject((current) =>
                    current === project.number ? null : project.number,
                  )
                }
              >
                {expandedProject === project.number ? "Hide details" : "View details"}
                <span className="project-arrow" aria-hidden="true">
                  {expandedProject === project.number ? "↑" : "↗"}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
