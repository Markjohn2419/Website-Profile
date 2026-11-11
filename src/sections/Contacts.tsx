
import { useState } from "react";
import type { FormEvent } from "react";

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const email = "nhojkram.bongcayao@gmail.com";

  const copyEmail = async () => {
    setCopyFailed(false);
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch (error) {
      setCopyFailed(true);
      console.error("Unable to copy email address.", error);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\nReply to: ${form.get("email")}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p className="eyebrow">05 — CONTACT & CONNECT</p>

        <h2>
          Let's build
          <br />
          something meaningful<span>.</span>
        </h2>

        <p className="contact-description">
          Have a project, an idea, or an opportunity?
          I'm open to meaningful conversations,
          collaboration, and learning experiences.
        </p>
      </div>

      <div className="contact-main">
        <div className="contact-message">
          <span className="contact-label">GET IN TOUCH</span>
          <h3>Have something in mind?</h3>
          <p>
            Feel free to reach out. I'd be glad to connect
            and explore opportunities to learn, create,
            and grow.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-button" href={`mailto:${email}`}>
            Send me an email <span>↗</span>
          </a>
          <button className="copy-email-button" type="button" onClick={copyEmail}>
            {emailCopied ? "Email copied" : copyFailed ? "Copy unavailable" : "Copy email"}
          </button>
        </div>
      </div>

      <div className="contact-links">
        <a
          href="https://github.com/Markjohn2419"
          target="_blank"
          rel="noreferrer"
        >
          <span>GITHUB</span>
          <span>github.com/Markjohn2419 ↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/markjohn-bongcayao-27617432a/"
          target="_blank"
          rel="noreferrer"
        >
          <span>LINKEDIN</span>
          <span>Professional Profile ↗</span>
        </a>

        <a href={`mailto:${email}`}>
          <span>EMAIL</span>
          <span>{email} ↗</span>
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <p className="contact-label">SEND A MESSAGE</p>
          <h3>Start a conversation.</h3>
        </div>
        <label>
          Name
          <input required name="name" type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input required name="email" type="email" placeholder="you@example.com" />
        </label>
        <label className="message-field">
          Message
          <textarea required name="message" rows={4} placeholder="Tell me what you are working on." />
        </label>
        <button className="contact-button form-submit" type="submit">
          {formSent ? "Opening email app..." : "Prepare message ↗"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
