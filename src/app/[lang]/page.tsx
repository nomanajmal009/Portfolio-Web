'use client';

import { Header } from '../components/Header';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Certifications } from '../components/Certifications';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { TechnicalSkills } from '../components/TechnicalSkills';
import { Personality } from '../components/Personality';
import { Languages } from '../components/Languages';
import { Hobbies } from '../components/Hobbies';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Education />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Certifications />
        <Skills />
        <Personality />
        <Languages />
        <Hobbies />
        <Contact />
      </div>
    </main>
  );
}