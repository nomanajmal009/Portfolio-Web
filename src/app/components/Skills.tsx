"use client";

import { useTranslations } from "../context/TranslationsContext";
import { useState, useEffect } from "react";

export function Skills() {
  const { t } = useTranslations();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(t.skills.items.length / itemsPerPage);

  const nextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPage = (page: number) => {
    if (isTransitioning || page === currentPage) return;
    setIsTransitioning(true);
    setCurrentPage(page);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getVisibleSkills = () => {
    const startIndex = currentPage * itemsPerPage;
    return t.skills.items.slice(startIndex, startIndex + itemsPerPage);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentPage((prev) => (prev + 1) % totalPages);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages, isTransitioning]);

  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">
        {t.skills.title}
      </h2>

      {/* Carousel Container */}
      <div className="relative px-12">
        {/* Navigation Buttons */}
        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              disabled={isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary hover:bg-primary/80 disabled:bg-primary/50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous page"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextPage}
              disabled={isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary hover:bg-primary/80 disabled:bg-primary/50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next page"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Auto-play toggle button */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-0 right-0 z-10 w-8 h-8 bg-primary/20 hover:bg-primary/30 text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
            >
              {isAutoPlaying ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
          </>
        )}

        {/* Skills Grid with Transition Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getVisibleSkills().map((skill, index) => (
            <div
              key={`${currentPage}-${index}`}
              className={`card p-4 text-center group hover:border-primary/20 transition-all duration-500 ease-in-out hover:scale-105 ${
                isTransitioning
                  ? "opacity-0 scale-95 transform -translate-y-2"
                  : "opacity-100 scale-100 transform translate-y-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl">💡</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-relaxed">
                  {skill}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Page Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                } ${isTransitioning ? "opacity-50" : "opacity-100"}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Page Info (for debugging) */}
        {totalPages > 1 && (
          <div className="text-center mt-4 text-sm text-muted-foreground">
            Page {currentPage + 1} of {totalPages} ({t.skills.items.length}{" "}
            total skills) - Auto-play: {isAutoPlaying ? "ON" : "OFF"}
          </div>
        )}
      </div>
    </section>
  );
}
