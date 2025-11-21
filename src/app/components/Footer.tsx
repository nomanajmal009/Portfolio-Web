"use client";

import { Button, Space, Divider } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaAddressCard
} from "react-icons/fa";
import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer id="contact" className="relative mt-20 border-t border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gradient mb-4">
              {t.contact.title}
            </h3>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-[#EA4335] group-hover:scale-110 transition-transform text-xl" />
                <span>{t.contact.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${t.contact.phone}`}
                className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors duration-300 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhoneAlt className="text-[#10B981] group-hover:scale-110 transition-transform text-xl" />
                <span>{t.contact.phone}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gradient mb-4">
              Connect With Me
            </h3>
            <Space size="large" className="flex flex-wrap">
              <motion.a
                href={t.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-[#333] dark:hover:border-[#f5f5f5] hover:bg-[#333]/10 dark:hover:bg-[#f5f5f5]/10 transition-all duration-300 group"
              >
                <FaGithub className="text-xl text-foreground group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={t.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300 group"
              >
                <FaLinkedin className="text-xl text-[#0077B5] group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a
                href={t.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all duration-300 group"
              >
                <FaTwitter className="text-xl text-[#1DA1F2] group-hover:scale-110 transition-transform" />
              </motion.a>
            </Space>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gradient mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <motion.a
                href="#profile"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaUser className="text-[#3B82F6]" />
                <span>Profile</span>
              </motion.a>
              <motion.a
                href="#experience"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaBriefcase className="text-[#10B981]" />
                <span>Experience</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaProjectDiagram className="text-[#8B5CF6]" />
                <span>Projects</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaAddressCard className="text-[#F59E0B]" />
                <span>Contact</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <Divider className="border-border/50 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-foreground/80 text-sm flex items-center justify-center gap-2">
            <span>© 2025</span>
            <span className="text-primary">Muhammad Noman Ajmal</span>
            <span>All Rights Reserved</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-red-500"
            >
              <HeartOutlined />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

