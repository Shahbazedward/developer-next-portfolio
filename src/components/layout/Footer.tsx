import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="section-eyebrow">
            08 / LET&apos;S CONNECT
          </p>

          <h2>
            BUILD SOMETHING
            <span>WORTH REMEMBERING.</span>
          </h2>
        </div>

        <a href="#contact" className="footer__cta">
          Start a Project
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="footer__middle">
        <div className="footer__brand">
          <span className="footer__brand-mark">
            &lt;/&gt;
          </span>

          <div>
            <strong>DEVFOLIO</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <div className="footer__links">
          <a
            href="mailto:shahbazkhan11092002@gmail.com"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>

          <a
            href="#"
            aria-label="GitHub profile"
          >
            <SiGithub size={18} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Developer Portfolio</span>

        <span>
          Designed &amp; engineered with Next.js
        </span>
      </div>
    </footer>
  );
}