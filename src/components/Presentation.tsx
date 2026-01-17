import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Slide01Title from "./slides/Slide01Title";
import Slide02Background from "./slides/Slide02Background";
import Slide03Objectives from "./slides/Slide03Objectives";
import Slide04Literature from "./slides/Slide04Literature";
import Slide05Methodology from "./slides/Slide05Methodology";
import Slide06Descriptive from "./slides/Slide06Descriptive";
import Slide07BaselineResults from "./slides/Slide07BaselineResults";
import Slide08GSTResults from "./slides/Slide08GSTResults";
import Slide09TaxReformResults from "./slides/Slide09TaxReformResults";
import Slide10PLIResults from "./slides/Slide10PLIResults";
import Slide11Robustness from "./slides/Slide11Robustness";
import Slide12Discussion from "./slides/Slide12Discussion";
import Slide13PolicyImplications from "./slides/Slide13PolicyImplications";
import Slide14Limitations from "./slides/Slide14Limitations";
import Slide15Conclusion from "./slides/Slide15Conclusion";
import Slide16ThankYou from "./slides/Slide16ThankYou";

const slides = [
  Slide01Title,
  Slide02Background,
  Slide03Objectives,
  Slide04Literature,
  Slide05Methodology,
  Slide06Descriptive,
  Slide07BaselineResults,
  Slide08GSTResults,
  Slide09TaxReformResults,
  Slide10PLIResults,
  Slide11Robustness,
  Slide12Discussion,
  Slide13PolicyImplications,
  Slide14Limitations,
  Slide15Conclusion,
  Slide16ThankYou,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "Enter") {
        event.preventDefault();
        goToNextSlide();
      } else if (event.key === "ArrowLeft" || event.key === "Backspace") {
        event.preventDefault();
        goToPrevSlide();
      } else if (event.key === "Home") {
        event.preventDefault();
        goToSlide(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, goToSlide, totalSlides]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        <CurrentSlideComponent
          key={currentSlide}
          slideNumber={currentSlide + 1}
          totalSlides={totalSlides}
        />
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50">
        <button
          onClick={() => goToSlide(0)}
          className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors backdrop-blur-sm"
          aria-label="Go to first slide"
        >
          <Home className="w-4 h-4" />
        </button>
        <button
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide navigation dots */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-6 left-6 text-xs text-muted-foreground/50 hidden md:block">
        Use ← → arrow keys to navigate
      </div>
    </div>
  );
};

export default Presentation;
