
import { useState } from "react";

const expertise = [
  {
    number: "01",
    title: "Programming & Development",
    description:
      "Building programming foundations and exploring application development.",
    topics: ["C", "JavaScript", "TypeScript", "React"],
    status: "DEVELOPING",
    group: "Development",
  },
  {
    number: "02",
    title: "Computer Systems",
    description:
      "Understanding computational models, system architecture, and low-level operations.",
    topics: ["Automata Theory", "MIPS", "Computer Architecture"],
    status: "ACADEMIC FOCUS",
    group: "Systems",
  },
  {
    number: "03",
    title: "Research & Artificial Intelligence",
    description:
      "Investigating machine learning approaches and evolving detection systems.",
    topics: ["Machine Learning", "Phishing Detection", "Concept Drift"],
    status: "RESEARCHING",
    group: "AI",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Exploring information security, ethical hacking, and defensive security practices.",
    topics: ["Security Fundamentals", "Kali Linux", "Security Labs"],
    status: "EXPLORING",
    group: "Security",
  },
];

function Expertise() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Development", "Systems", "AI", "Security"];
  const visibleExpertise = filter === "All"
    ? expertise
    : expertise.filter((item) => item.group === filter);

  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-heading">
        <div>
          <p className="eyebrow">02 — TECHNICAL EXPERTISE</p>
          <h2>
            Areas of
            <br />
            exploration<span>.</span>
          </h2>
        </div>

        <p className="expertise-intro">
          Technology is a continuous learning process.
          These are the disciplines and technical areas
          I am currently studying, developing, and investigating.
        </p>
      </div>

      <div className="filter-bar" aria-label="Filter expertise">
        {filters.map((item) => (
          <button className={filter === item ? "filter-button active" : "filter-button"} type="button" key={item} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="expertise-grid">
        {visibleExpertise.map((item) => (
          <article className="expertise-card" key={item.number}>
            <div className="expertise-card-top">
              <span>{item.number} / DISCIPLINE</span>
              <span className="expertise-status">
                {item.status}
              </span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="expertise-tags">
              {item.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
