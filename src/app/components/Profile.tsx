"use client";

import Image from "next/image";
import { useTranslations } from "../context/TranslationsContext";
import ProfilePicture from "../../../public/profile.jpeg";
import { RotatingIconsRing } from "./RotatingIconsRing";

export function Profile() {
  const { t } = useTranslations();

  return (
    <section className="py-16 relative bg-gradient-to-br from-background via-background to-primary/5">
      <RotatingIconsRing />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Image
              src={ProfilePicture}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary shadow-2xl transition-transform hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-background" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          {t.header.name}
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-primary-light mb-6">
          {t.header.title}
        </h2>

        {/* Location and Date of Birth */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{t.header.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{t.header.dob}</span>
          </div>
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a 
              href={`mailto:${t.header.email}`}
              className="hover:text-primary transition-colors"
            >
              {t.header.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a 
              href={`tel:${t.header.phone}`}
              className="hover:text-primary transition-colors"
            >
              {t.header.phone}
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-foreground/80">
            {t.header.description}
          </p>
        </div>
      </div>
    </section>
  );
} 