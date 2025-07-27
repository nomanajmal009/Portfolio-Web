"use client";

import { useTranslations } from "../context/TranslationsContext";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AnimatedContent } from "./AnimatedContent";

export function Contact({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.contact.title}
      </h2>
      <div className="card p-6 hover:border-primary/20 transition-all duration-300">
        <AnimatedContent animationType="fade-in" delay={0} parentVisible={isVisible}>
          <div className="space-y-6">
            <AnimatedContent animationType="slide-left" delay={1} parentVisible={isVisible}>
              <div className="flex items-center gap-3 group">
                <MdEmail className="text-2xl text-primary group-hover:scale-110 transition-transform" />
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t.contact.email}
                </a>
              </div>
            </AnimatedContent>
            <AnimatedContent animationType="slide-left" delay={2} parentVisible={isVisible}>
              <div className="flex items-center gap-3 group">
                <MdPhone className="text-2xl text-primary group-hover:scale-110 transition-transform" />
                <a
                  href={`tel:${t.contact.phone}`}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>
            </AnimatedContent>
            <AnimatedContent animationType="slide-right" delay={3} parentVisible={isVisible}>
              <div className="flex gap-6">
                <a
                  href={t.contact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors group"
                >
                  <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={t.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors group"
                >
                  <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={t.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors group"
                >
                  <FaTwitter className="text-2xl group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </AnimatedContent>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
