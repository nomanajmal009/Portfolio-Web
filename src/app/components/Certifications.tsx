"use client";

import { useTranslations } from "../context/TranslationsContext";
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

export function Certifications() {
  const { t } = useTranslations();

  return (
    <section id="certifications" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.certifications.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.certifications.items.map((cert, index) => (
          <div
            key={index}
            className="card p-6 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start gap-3 mb-4">
              <FaCertificate className="text-2xl text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {cert.name}
                </h3>
                <p className="text-primary-light">{cert.issuer}</p>
              </div>
            </div>
            {cert.date && (
              <div className="flex items-center gap-2 text-sm text-muted mb-4">
                <FaCalendarAlt className="text-sm" />
                <span>{cert.date}</span>
              </div>
            )}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-sm" />
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
