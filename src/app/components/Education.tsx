"use client";

import { Timeline, Card, Tag, Space } from "antd";
import { ReadOutlined, CalendarOutlined, BankOutlined } from "@ant-design/icons";
import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";

export function Education({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="education" className="py-6">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.education.title}
      </h2>
      <Timeline
        mode="left"
        items={t.education.items.map((item, index) => ({
          dot: <ReadOutlined style={{ fontSize: 16 }} />,
          children: (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card
                className="border-border"
                styles={{
                  body: { padding: 20 },
                }}
              >
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.degree}
                      </h3>
                      <Space>
                        <BankOutlined className="text-primary" />
                        <span className="text-primary-light">{item.institution}</span>
                      </Space>
                    </div>
                    <Tag icon={<CalendarOutlined />} color="green">
                      {item.period}
                    </Tag>
                  </div>
                  {item.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ),
        }))}
      />
    </section>
  );
}
