"use client";

import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
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
        <div id="profile">
          <AnimatedSection animationType="fade-in" delay={0}>
            {(isVisible) => <Profile />}
          </AnimatedSection>
        </div>
        <div id="education">
          <AnimatedSection animationType="fade-in" delay={1}>
            {(isVisible) => <Education isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="experience">
          <AnimatedSection animationType="slide-in-left" delay={2}>
            {(isVisible) => <Experience isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="projects">
          <AnimatedSection animationType="slide-in-right" delay={3}>
            {(isVisible) => <Projects isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="technical-skills">
          <AnimatedSection animationType="fade-in" delay={4}>
            {(isVisible) => <TechnicalSkills isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="certifications">
          <AnimatedSection animationType="scale-in" delay={5}>
            {(isVisible) => <Certifications isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="skills">
          <AnimatedSection animationType="fade-in" delay={6}>
            {(isVisible) => <Skills />}
          </AnimatedSection>
        </div>
        <div id="personality">
          <AnimatedSection animationType="slide-in-left" delay={7}>
            {(isVisible) => <Personality isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="languages">
          <AnimatedSection animationType="slide-in-right" delay={8}>
            {(isVisible) => <Languages />}
          </AnimatedSection>
        </div>
        <div id="hobbies">
          <AnimatedSection animationType="scale-in" delay={9}>
            {(isVisible) => <Hobbies isVisible={isVisible} />}
          </AnimatedSection>
        </div>
        <div id="contact">
          <AnimatedSection animationType="fade-in" delay={10}>
            {(isVisible) => <Contact isVisible={isVisible} />}
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
