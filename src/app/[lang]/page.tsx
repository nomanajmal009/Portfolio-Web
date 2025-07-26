"use client";

import { Header } from "../components/Header";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Certifications } from "../components/Certifications";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { TechnicalSkills } from "../components/TechnicalSkills";
import { Personality } from "../components/Personality";
import { Languages } from "../components/Languages";
import { Hobbies } from "../components/Hobbies";
import { AnimatedSection } from "../components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-16 pt-24">
        <AnimatedSection animationType="fade-in" delay={1}>
          <Education />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-left" delay={2}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-right" delay={3}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in" delay={4}>
          <TechnicalSkills />
        </AnimatedSection>
        <AnimatedSection animationType="scale-in" delay={5}>
          <Certifications />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in" delay={6}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-left" delay={7}>
          <Personality />
        </AnimatedSection>
        <AnimatedSection animationType="slide-in-right" delay={8}>
          <Languages />
        </AnimatedSection>
        <AnimatedSection animationType="scale-in" delay={9}>
          <Hobbies />
        </AnimatedSection>
        <AnimatedSection animationType="fade-in" delay={10}>
          <Contact />
        </AnimatedSection>
      </div>
    </main>
  );
}
