"use client";

import { Timeline, Card, Tag, Space } from "antd";
import { FileTextOutlined, CalendarOutlined, BankOutlined } from "@ant-design/icons";
import { useTranslations } from "../context/TranslationsContext";
import { motion } from "framer-motion";

export function Experience({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();

  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-gradient">
        {t.experience.title}
      </h2>
      <Timeline
        mode="left"
        items={t.experience.items.map((item, index) => ({
          dot: <FileTextOutlined style={{ fontSize: 16 }} />,
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
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.role}
                      </h3>
                      <Space>
                        <BankOutlined className="text-primary" />
                        <span className="text-primary-light">{item.company}</span>
                      </Space>
                    </div>
                    <Tag icon={<CalendarOutlined />} color="blue">
                      {item.period}
                    </Tag>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="leading-relaxed">{item.description}</p>
                    {item.description_2 && (
                      <p className="leading-relaxed">{item.description_2}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ),
        }))}
      />
    </section>
  );
}
