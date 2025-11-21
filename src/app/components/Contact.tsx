"use client";

import { Card, Space, Button } from "antd";
import { MailOutlined, PhoneOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";

export function Contact({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="contact" className="py-6">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.contact.title}
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card
          className="border-border"
          styles={{
            body: { padding: 32 },
          }}
        >
          <Space direction="vertical" size="large" className="w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                type="link"
                icon={<MailOutlined />}
                href={`mailto:${t.contact.email}`}
                size="large"
                className="text-foreground hover:text-primary"
              >
                {t.contact.email}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                type="link"
                icon={<PhoneOutlined />}
                href={`tel:${t.contact.phone}`}
                size="large"
                className="text-foreground hover:text-primary"
              >
                {t.contact.phone}
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Space size="large">
                <Button
                  type="link"
                  icon={<GithubOutlined />}
                  href={t.contact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  className="text-foreground hover:text-primary"
                />
                <Button
                  type="link"
                  icon={<LinkedinOutlined />}
                  href={t.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  className="text-foreground hover:text-primary"
                />
                <Button
                  type="link"
                  icon={<TwitterOutlined />}
                  href={t.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  className="text-foreground hover:text-primary"
                />
              </Space>
            </motion.div>
          </Space>
        </Card>
      </motion.div>
    </section>
  );
}
