import profileImage from "./assets/Profile.jfif";
import { useEffect, useState } from "react";
import "./App.css";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contacts";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isDark, setIsDark] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const sections = ["about", "expertise", "projects", "journey", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setIsCommandOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main id="top" className={isDark ? "dark-theme" : ""}>
      {/* Navigation */}
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#top" className="logo" aria-label="Markjohn Bongcayao home" onClick={closeMenu}>
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" role="img">
              <path d="M8 29V13l8 9 9-9v16M29 13v11c0 3-2 5-5 5" />
            </svg>
          </span>
          <span className="logo-text">MJ<span>.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>

        <div
          className={`nav-links${isMenuOpen ? " nav-links-open" : ""}`}
          id="primary-navigation"
        >
          <a className={activeSection === "about" ? "active" : ""} href="#about" onClick={closeMenu}>About</a>
          <a className={activeSection === "expertise" ? "active" : ""} href="#expertise" onClick={closeMenu}>Expertise</a>
          <a className={activeSection === "projects" ? "active" : ""} href="#projects" onClick={closeMenu}>Projects</a>
          <a className={activeSection === "journey" ? "active" : ""} href="#journey" onClick={closeMenu}>Journey</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setIsDark((dark) => !dark)} aria-label="Toggle color theme">
            {isDark ? "☀" : "☾"}
          </button>
          <a href="#contact" className="contact-button" onClick={closeMenu}>Let's Connect ↗</a>
        </div>
      </nav>

      {isCommandOpen && (
        <div className="command-backdrop" role="presentation" onClick={() => setIsCommandOpen(false)}>
          <div className="command-palette" role="dialog" aria-modal="true" aria-label="Quick navigation" onClick={(event) => event.stopPropagation()}>
            <p className="command-label">QUICK NAVIGATION</p>
            {[
              ["About", "about"],
              ["Expertise", "expertise"],
              ["Projects", "projects"],
              ["Journey", "journey"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setIsCommandOpen(false)}>{label}<span>↗</span></a>
            ))}
            <p className="command-hint">Press <kbd>Esc</kbd> to close</p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true"></div>
        <div className="hero-orbit hero-orbit-two" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            COMPUTER SCIENCE STUDENT
          </div>

          <p className="eyebrow">HELLO, I'M MARKJOHN BONGCAYAO</p>

          <h1>
            Understanding
            <br />
            technology.
            <br />
            <span>Building possibilities.</span>
          </h1>

          <p className="hero-description">
            A Computer Science student and technology researcher
            exploring software development, intelligent systems,
            and cybersecurity.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN THE PHILIPPINES</span>
            <span>CONTINUOUSLY LEARNING</span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-top">
            <span>PERSONAL PROFILE</span>
            <span>001 / 026</span>
          </div>

          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Portrait of Markjohn Bongcayao"
              className="profile-image"
            />
          </div>

          <h2>The Seeker</h2>
          <p>
            Curious by nature. Analytical by mindset.
            Driven by the pursuit of knowledge.
          </p>

          <div className="panel-divider"></div>

          <div className="profile-details">
            <div>
              <span>FIELD</span>
              <strong>Computer Science</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>Technology & Research</strong>
            </div>
            <div>
              <span>INTEREST</span>
              <strong>Software / Security / Systems</strong>
            </div>
          </div>

          <div className="panel-bottom">
            <span>INDEPENDENT THINKER</span>
            <span>PH · 2026</span>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="intro-section" id="about">
        <div>
          <p className="eyebrow">01 — INTRODUCTION</p>
          <h2>
            Learning is not just
            <br />
            acquiring knowledge.
          </h2>
        </div>

        <p className="intro-description">
          It is understanding how things work, questioning
          assumptions, and transforming ideas into meaningful
          solutions. My journey in technology is built around
          curiosity, experimentation, and continuous improvement.
        </p>
      </section>

      {/* Expertise preview */}
      <Expertise />

      <Projects />

      <Experience />
      <Contact />

      <footer>
        <span>© 2026 MARKJOHN BONGCAYAO</span>
        <span>BUILT WITH CURIOSITY AND CODE.</span>
      </footer>

      <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
    </main>
  );
}

export default App;
