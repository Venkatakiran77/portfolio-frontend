// src/sections/Experience/Experience.jsx

import { ExperienceCard } from "@/components/cards/ExperienceCard.jsx";
import { Section } from "@/components/layout/Section.jsx";
import { experienceData } from "@/data/experience.data.js";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="My Professional Journey"
    >
      {/* <div className="mb-2 flex justify-end">
        <a
          href="#"
          className="text-sm font-medium transition-colors duration-300 hover:opacity-80 hover:underline"
          style={{
            color: "var(--color-accent-primary)",
          }}
        >
          View Full Experience →
        </a>
      </div> */}

      <div className="flex flex-col">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
