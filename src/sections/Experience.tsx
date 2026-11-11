
const journey = [
  {
    number: "01",
    category: "EDUCATION",
    title: "Bachelor of Science in Computer Science",
    organization: "Caraga State University",
    description:
      "Developing a foundation in programming, computational thinking, algorithms, computer systems, and software development.",
    status: "CURRENTLY STUDYING",
  },
  {
    number: "02",
    category: "TECHNICAL DEVELOPMENT",
    title: "Programming & Software Development",
    organization: "Independent Learning",
    description:
      "Practicing C programming, exploring React and TypeScript, and studying the principles behind programming language design.",
    status: "ONGOING",
  },
  {
    number: "03",
    category: "COMPUTER SCIENCE FOUNDATIONS",
    title: "Systems & Computational Thinking",
    organization: "Academic & Technical Learning",
    description:
      "Studying automata theory, formal languages, MIPS assembly, and the underlying behavior of computational systems.",
    status: "ONGOING",
  },
  {
    number: "04",
    category: "PROFESSIONAL DIRECTION",
    title: "Software Engineering & Cybersecurity",
    organization: "Long-term Development",
    description:
      "Working toward becoming a capable software developer while building knowledge in cybersecurity and ethical security practices.",
    status: "LONG-TERM GOAL",
  },
];

function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="journey-section" id="journey">
      <div className="journey-heading">
        <div>
          <p className="eyebrow">04 — EDUCATION & DEVELOPMENT</p>
          <h2>
            Growth is a
            <br />
            continuous process<span>.</span>
          </h2>
        </div>

        <p className="journey-intro">
          Every skill begins with curiosity, practice,
          and the willingness to understand something
          more deeply. This section documents my
          academic background and development journey.
        </p>
      </div>

      <div className="journey-timeline">
        {journey.map((item) => (
          <article className={`journey-item${expanded === item.number ? " journey-item-expanded" : ""}`} key={item.number}>
            <div className="journey-marker">
              {item.number}
            </div>

            <div className="journey-content">
              <div className="journey-meta">
                <span>{item.category}</span>
                <span>{item.status}</span>
              </div>

              <h3>{item.title}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>
              <button className="journey-toggle" type="button" aria-expanded={expanded === item.number} onClick={() => setExpanded((current) => current === item.number ? null : item.number)}>
                {expanded === item.number ? "Show less" : "Explore this step"} <span>{expanded === item.number ? "↑" : "↓"}</span>
              </button>
              {expanded === item.number && (
                <div className="journey-extra">
                  <strong>What this means</strong>
                  <p>This stage is an active part of my development, supported by consistent practice, documentation, and small experiments.</p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
import { useState } from "react";
