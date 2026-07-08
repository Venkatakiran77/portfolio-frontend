// src/sections/Contact/Contact.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

import { Section } from "@/components/layout/Section.jsx";
import { Input } from "@/components/ui/Input.jsx";
import { Textarea } from "@/components/ui/Textarea.jsx";
import { Button } from "@/components/ui/Button.jsx";
import { Card } from "@/components/ui/Card.jsx";

import { Achievements } from "@/sections/Achievements/Achievements.jsx";
import { Testimonials } from "@/sections/Testimonials/Testimonials.jsx";

import { validateContactForm } from "@/utils/validators.js";
import { fadeInUp } from "@/animations/variants.js";

import { portfolioConfig } from "@/config/portfolio.config.js";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { isValid, errors: validationErrors } = validateContactForm(formData);

  setErrors(validationErrors);

  if (!isValid) return;

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch(
      "https://portfolio-backend-fjfj.onrender.com/api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      },
    );

    if (!response.ok) throw new Error("Failed to send");

    setSubmitStatus("success");
    setFormData(initialForm);
  } catch {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
  const socialStyle = {
    color: "var(--color-text-secondary)",
    transition: "color .25s ease",
  };

  return (
    <Section id="contact" stagger={false}>
      {/* Top Cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Achievements />

        <Testimonials />

        <motion.div variants={fadeInUp}>
          <Card padding="lg" className="flex h-full flex-col justify-between">
            <div>
              <h3
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: "var(--color-text-tertiary)",
                }}
              >
                Let's Connect
              </h3>

              <p
                className="text-sm"
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                I'm currently open to new opportunities. Let's build something
                amazing together!
              </p>
            </div>

            <div className="mt-5 flex items-center gap-4">
              {[
                {
                  icon: <Github size={18} />,
                  href: portfolioConfig.social?.github,
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={18} />,
                  href: portfolioConfig.social?.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <Twitter size={18} />,
                  href: portfolioConfig.social?.twitter,
                  label: "Twitter",
                },
                {
                  icon: <Mail size={18} />,
                  href: `mailto:${portfolioConfig.email}`,
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={socialStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-secondary)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <Button
              variant="primary"
              size="md"
              className="mt-5 w-full"
              onClick={() =>
                document.getElementById("contact-form")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Get In Touch →
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        variants={fadeInUp}
        id="contact-form"
        className="mx-auto mt-10 max-w-2xl"
      >
        <Card padding="lg">
          <h3
            className="mb-5 text-lg font-semibold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Send a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            <Input
              label="Name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange("name")}
              error={errors.name}
            />

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange("email")}
              error={errors.email}
            />

            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange("message")}
              error={errors.message}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              className="mt-2"
            >
              Send Message
            </Button>

            {submitStatus === "success" && (
              <p
                className="text-center text-sm"
                style={{
                  color: "var(--color-success)",
                }}
              >
                Message sent! I'll get back to you soon.
              </p>
            )}

            {submitStatus === "error" && (
              <p
                className="text-center text-sm"
                style={{
                  color: "var(--color-error)",
                }}
              >
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </Card>
      </motion.div>
    </Section>
  );
}

export default Contact;
