"use client";

import { useTranslations } from "../context/TranslationsContext";
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export function Certifications({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="certifications" className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.certifications.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.certifications.items.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="card p-6 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start gap-3 mb-4">
              <FaCertificate className="text-2xl text-primary mt-1" />
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl font-semibold text-foreground"
                >
                  {cert.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="text-primary-light"
                >
                  {cert.issuer}
                </motion.p>
              </div>
            </div>
            {cert.date && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-sm text-muted mb-4"
              >
                <FaCalendarAlt className="text-sm" />
                <span>{cert.date}</span>
              </motion.div>
            )}
            {cert.link && (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.25, ease: [0.22, 1, 0.36, 1] }}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <FaExternalLinkAlt className="text-sm" />
                View Certificate
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
