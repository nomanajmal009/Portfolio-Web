"use client";

import Image from "next/image";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import { useTranslations } from "../context/TranslationsContext";
import ProfilePicture from "../../../public/profile.jpeg";
import { RotatingIconsRing } from "./RotatingIconsRing";
import { motion } from "framer-motion";

export function Profile() {
  const { t } = useTranslations();

  return (
    <section className="py-16 relative bg-gradient-to-br from-background via-background to-primary/5 w-full">
      <RotatingIconsRing circleSize={600} radius={280} duration={20} />
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            <Image
              src={ProfilePicture}
              alt="Profile"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
              priority
            />
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg" />
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
              className="hover:text-primary transition-colors duration-200 hover:underline cursor-pointer"
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
              className="hover:text-primary transition-colors duration-200 hover:underline cursor-pointer"
            >
              {t.header.phone}
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg leading-relaxed text-foreground/80">
            {t.header.description}
          </p>
        </div>

        {/* Let's Connect Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="primary"
              size="large"
              icon={<MessageOutlined />}
              onClick={() => {
                const element = document.getElementById("lets-connect");
                if (element) {
                  const headerHeight = 80;
                  const elementRect = element.getBoundingClientRect();
                  const absoluteElementTop = elementRect.top + window.pageYOffset;
                  const offsetPosition = absoluteElementTop - headerHeight;

                  window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                  });
                }
              }}
              className="h-12 px-8 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-accent-light border-0 shadow-lg"
            >
              Let's Connect
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 