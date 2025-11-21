"use client";

import { Layout, Row, Col } from "antd";
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
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { AnimatedSection } from "../components/AnimatedSection";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout className="min-h-screen bg-background w-full">
      <Header />
      <Content className="bg-background w-full">
        {/* Hero/Profile Section - Full width for proper centering */}
        <section id="profile" className="min-h-[80vh] flex items-center justify-center w-full pt-28 pb-8">
          <div className="w-full">
            <AnimatedSection animationType="fade-in" delay={0} isInitialLoad={true}>
              {(isVisible) => <Profile />}
            </AnimatedSection>
          </div>
        </section>
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
          {/* Main Content Grid */}
          <Row gutter={[32, 32]}>
            {/* Left Column - Experience */}
            <Col xs={24} lg={14}>
              <div id="experience">
                <AnimatedSection animationType="slide-in-left" delay={0}>
                  {(isVisible) => <Experience isVisible={isVisible} />}
                </AnimatedSection>
              </div>
            </Col>

            {/* Right Column - Technical Skills */}
            <Col xs={24} lg={10}>
              <div id="technical-skills">
                <AnimatedSection animationType="fade-in" delay={0}>
                  {(isVisible) => <TechnicalSkills isVisible={isVisible} />}
                </AnimatedSection>
              </div>
            </Col>
          </Row>

          {/* Projects Section - Full Width */}
          <div id="projects" className="w-full">
            <AnimatedSection animationType="fade-in" delay={0}>
              {(isVisible) => <Projects isVisible={isVisible} />}
            </AnimatedSection>
          </div>

          {/* Education and Certifications Row */}
          <div className="w-full">
            {/* Top Center Icon and Title */}
            <AnimatedSection animationType="scale-in" delay={0}>
              {(isVisible) => (
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Committed to staying updated with the latest technologies and best practices in software development.
                  </p>
                </div>
              )}
            </AnimatedSection>

            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <div id="education">
                  <AnimatedSection animationType="fade-in" delay={0}>
                    {(isVisible) => <Education isVisible={isVisible} />}
                  </AnimatedSection>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div id="certifications">
                  <AnimatedSection animationType="fade-in" delay={0}>
                    {(isVisible) => <Certifications isVisible={isVisible} />}
                  </AnimatedSection>
                </div>
              </Col>
            </Row>
          </div>

          {/* Additional Sections */}
          <div className="space-y-12">
            <div id="skills">
              <AnimatedSection animationType="fade-in" delay={0}>
                {(isVisible) => <Skills />}
              </AnimatedSection>
            </div>
            
            <div id="personality">
              <AnimatedSection animationType="fade-in" delay={0}>
                {(isVisible) => <Personality isVisible={isVisible} />}
              </AnimatedSection>
            </div>

            <div id="languages">
              <AnimatedSection animationType="fade-in" delay={0}>
                {(isVisible) => <Languages />}
              </AnimatedSection>
            </div>

            <div id="hobbies">
              <AnimatedSection animationType="fade-in" delay={0}>
                {(isVisible) => <Hobbies isVisible={isVisible} />}
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animationType="fade-in" delay={0}>
            {(isVisible) => <ContactForm isVisible={isVisible} />}
          </AnimatedSection>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
