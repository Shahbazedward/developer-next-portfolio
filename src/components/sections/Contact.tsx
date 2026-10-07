"use client";

import { FormEvent, useState } from "react";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  preferredContact: "Email",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send inquiry.");
      }

      setStatus("success");
      setStatusMessage(data.message);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");

      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-section__glow" aria-hidden="true" />

      <div className="contact-section__header">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          07 / CONTACT
        </motion.p>

        <motion.h2
          id="contact-heading"
          initial={{
            opacity: 0,
            y: 30,
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
          HAVE AN IDEA?
          <span>LET&apos;S BUILD IT.</span>
        </motion.h2>
      </div>

      <div className="contact-section__layout">
        <motion.div
          className="contact-info"
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
        >
          <p className="contact-info__intro">
            Tell me what you want to build, what problem you&apos;re trying to
            solve and what kind of experience you want to create. The more
            detail you provide, the better I can understand your project.
          </p>

          <div className="contact-info__items">
            <a
              href="mailto:shahbazkhan11092002@gmail.com"
              className="contact-info__item"
            >
              <div>
                <Mail size={19} />
              </div>

              <span>
                <small>EMAIL</small>
                <strong>shahbazkhan11092002@gmail.com</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <a href="tel:+923142259128" className="contact-info__item">
              <div>
                <Phone size={19} />
              </div>

              <span>
                <small>PHONE</small>
                <strong>+92 314 2259128</strong>
              </span>

              <ArrowUpRight size={17} />
            </a>

            <div className="contact-info__item">
              <div>
                <MapPin size={19} />
              </div>

              <span>
                <small>LOCATION</small>
                <strong>Karachi, Pakistan</strong>
              </span>
            </div>
          </div>

          <div className="contact-info__availability">
            <i />

            <div>
              <strong>Available for selected projects</strong>

              <span>
                Freelance websites, applications and business systems.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.75,
          }}
        >
          <div className="contact-form__heading">
            <div>
              <span>PROJECT BRIEF</span>

              <strong>Tell me about your project.</strong>
            </div>

            <div className="contact-form__status-dot">
              <i />
              OPEN
            </div>
          </div>

          <div className="contact-form__grid">
            <label>
              <span>
                Your Name
                <i>*</i>
              </span>

              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="John Smith"
              />
            </label>

            <label>
              <span>
                Email Address
                <i>*</i>
              </span>

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="john@company.com"
              />
            </label>

            <label>
              <span>Phone / WhatsApp</span>

              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+92 300 0000000"
              />
            </label>

            <label>
              <span>Company / Brand</span>

              <input
                type="text"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder="Company name"
              />
            </label>

            <label>
              <span>
                What do you need?
                <i>*</i>
              </span>

              <select
                required
                value={form.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
              >
                <option value="">Select project type</option>

                <option>Business Website</option>

                <option>Full-Stack Web Application</option>

                <option>Management System</option>

                <option>E-Commerce Website</option>

                <option>Dashboard / Admin Panel</option>

                <option>AI Integration</option>

                <option>Frontend Development</option>

                <option>Backend / API Development</option>

                <option>Existing Website Improvement</option>

                <option>Something Else</option>
              </select>
            </label>

            <label>
              <span>Estimated Budget</span>

              <select
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
              >
                <option value="">Select budget</option>

                <option>Under $300 / Under PKR 85,000</option>

                <option>$300 – $750 / PKR 85,000 – 210,000</option>

                <option>$750 – $1,500 / PKR 210,000 – 420,000</option>

                <option>$1,500 – $3,000 / PKR 420,000 – 840,000</option>

                <option>$3,000+ / PKR 840,000+</option>

                <option>Let&apos;s discuss</option>
              </select>
            </label>

            <label>
              <span>Desired Timeline</span>

              <select
                value={form.timeline}
                onChange={(e) => updateField("timeline", e.target.value)}
              >
                <option value="">Select timeline</option>

                <option>As soon as possible</option>

                <option>1 – 2 weeks</option>

                <option>2 – 4 weeks</option>

                <option>1 – 2 months</option>

                <option>2+ months</option>

                <option>Flexible</option>
              </select>
            </label>

            <label>
              <span>Preferred Contact</span>

              <select
                value={form.preferredContact}
                onChange={(e) =>
                  updateField("preferredContact", e.target.value)
                }
              >
                <option>Email</option>
                <option>WhatsApp</option>
                <option>Phone Call</option>
              </select>
            </label>
          </div>

          <label className="contact-form__message">
            <span>
              Project Details
              <i>*</i>
            </span>

            <textarea
              required
              rows={7}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Describe the project, required features, target users, references, current website if you have one, and anything else that would help me understand what you want to build..."
            />
          </label>

          {status !== "idle" && (
            <div
              className={`contact-form__notice contact-form__notice--${status}`}
            >
              {status === "success" && <CheckCircle2 size={17} />}

              {statusMessage}
            </div>
          )}

          <button
            type="submit"
            className="contact-form__submit"
            disabled={loading}
          >
            {loading ? (
              "Sending project brief..."
            ) : (
              <>
                Send Project Inquiry
                <Send size={17} />
              </>
            )}
          </button>

          <p className="contact-form__privacy">
            Your information is used only to respond to your project inquiry.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
