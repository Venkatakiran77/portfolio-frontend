// src/pages/HomePage.jsx
import { Hero } from "@/sections/Hero/Hero.jsx";
import { About } from "@/sections/About/About.jsx";
import { WhyHireMe } from "@/sections/WhyHireMe/WhyHireMe.jsx";
import { Experience } from "@/sections/Experience/Experience.jsx";
import { Skills } from "@/sections/Skills/Skills.jsx";
import { Projects } from "@/sections/Projects/Projects.jsx";
import { Process } from "@/sections/Process/Process.jsx";
import { Contact } from "@/sections/Contact/Contact.jsx";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyHireMe />
      <Experience />
      <Skills />
      <Projects />
      <Process />
      <Contact />
    </>
  );
}

export default HomePage;
