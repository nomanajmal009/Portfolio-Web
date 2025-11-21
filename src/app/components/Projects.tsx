"use client";

import { Tag, Button } from "antd";
import { LinkOutlined, CalendarOutlined, EnvironmentOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { useTranslations } from "../context/TranslationsContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Projects({ isVisible = true }: { isVisible?: boolean }) {
  const { t } = useTranslations();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gradient">
        {t.projects.title}
      </h2>
          <p className="text-muted-foreground text-sm">
            Showcasing my recent work and contributions
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="space-y-8">
          {t.projects.items.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const isLast = index === t.projects.items.length - 1;
            
            return (
              <motion.div
            key={index} 
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-0 md:pl-16"
              >
                {/* Timeline line between dots (not for last item) */}
                {!isLast && (
                  <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
                )}
                
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-4 md:left-6 top-2 w-4 h-4 rounded-full border-4 border-background shadow-lg hidden md:block z-10"
                  animate={{
                    backgroundColor: isExpanded ? "var(--primary)" : "var(--primary)",
                    scale: isExpanded ? 1.3 : 1,
                    boxShadow: isExpanded 
                      ? "0 0 0 4px rgba(37, 99, 235, 0.2), 0 0 0 8px rgba(37, 99, 235, 0.1)" 
                      : "0 0 0 0px rgba(37, 99, 235, 0), 0 0 0 0px rgba(37, 99, 235, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: isExpanded ? "var(--primary)" : "rgba(37, 99, 235, 0.5)",
              }}
                />

                <motion.div
                  className="card p-6 transition-all duration-300 cursor-pointer hover:border-primary/50"
                  animate={{
                    borderColor: isExpanded ? "var(--primary)" : "var(--border)",
                    boxShadow: isExpanded 
                      ? "0 10px 40px rgba(37, 99, 235, 0.15)" 
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={() => setExpandedIndex(index)}
                  onMouseLeave={() => setExpandedIndex(null)}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  {/* Header: Project name and View Details button */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">
                    {project.name}
                  </h3>
                    </div>
                    <Button
                      type="primary"
                      icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedIndex(isExpanded ? null : index);
                      }}
                      className="flex-shrink-0"
                    >
                      View Details
                    </Button>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-6 pt-4 border-t border-border/50">
                          {/* Description */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                          >
                            <p className="text-muted-foreground leading-relaxed text-base">
                    {project.description}
                  </p>
                          </motion.div>
                
                          {/* Technologies */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                          >
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Technologies Used:
                            </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                                <motion.div
                      key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 0.25 + techIndex * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <Tag
                      color="blue"
                                    className="text-sm px-3 py-1 transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      {tech}
                    </Tag>
                                </motion.div>
                  ))}
                </div>
                          </motion.div>

                          {/* View Project Link */}
                          {project.link && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                              className="pt-2"
                            >
                  <Button
                                type="default"
                    icon={<LinkOutlined />}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-primary hover:text-primary/80 transition-colors"
                                size="large"
                  >
                    View Project
                  </Button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
              </div>
      </div>
    </section>
  );
}
