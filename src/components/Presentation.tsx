import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Maximize, 
  Minimize,
  Download,
  FileText,
  Presentation as PresentationIcon,
  Menu,
  X
} from "lucide-react";
import { useFullscreen } from "@/hooks/useFullscreen";
import { useExport } from "@/hooks/useExport";
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
  const [showMenu, setShowMenu] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const totalSlides = slides.length;
  
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const { exportToPPTX, exportToPDF, isExporting, exportProgress } = useExport(totalSlides);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setShowMenu(false);
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
      } else if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        toggleFullscreen();
      } else if (event.key === "Escape") {
        setShowMenu(false);
        setShowExportMenu(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, goToSlide, totalSlides, toggleFullscreen]);

  // Touch swipe handling for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goToNextSlide, goToPrevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  const slideNames = [
    "Title",
    "Background",
    "Objectives",
    "Literature",
    "Methodology",
    "Descriptive",
    "Baseline Results",
    "GST Results",
    "Tax Reform",
    "PLI Results",
    "Robustness",
    "Discussion",
    "Policy",
    "Limitations",
    "Conclusion",
    "Thank You",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background touch-pan-y">
      <div data-slide-content>
        <AnimatePresence mode="wait">
          <CurrentSlideComponent
            key={currentSlide}
            slideNumber={currentSlide + 1}
            totalSlides={totalSlides}
          />
        </AnimatePresence>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-4 left-4 p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors backdrop-blur-sm md:hidden z-50"
        aria-label="Menu"
      >
        {showMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile slide menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-64 bg-background/95 backdrop-blur-lg z-40 p-4 pt-16 overflow-y-auto md:hidden"
          >
            <h3 className="text-sm font-semibold text-primary mb-4">Slides</h3>
            <div className="space-y-1">
              {slideNames.map((name, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    index === currentSlide
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  {index + 1}. {name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation controls - responsive */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 flex items-center gap-1 md:gap-2 z-50">
        {/* Export dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            disabled={isExporting}
            className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors backdrop-blur-sm disabled:opacity-50"
            aria-label="Export"
          >
            <Download className="w-4 h-4" />
          </button>
          
          <AnimatePresence>
            {showExportMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-12 right-0 bg-secondary/95 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden min-w-[160px]"
              >
                <button
                  onClick={() => {
                    exportToPPTX();
                    setShowExportMenu(false);
                  }}
                  disabled={isExporting}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-primary/20 transition-colors"
                >
                  <PresentationIcon className="w-4 h-4 text-primary" />
                  Export to PPTX
                </button>
                <button
                  onClick={() => {
                    exportToPDF();
                    setShowExportMenu(false);
                  }}
                  disabled={isExporting}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-primary/20 transition-colors"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  Export to PDF
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Fullscreen toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors backdrop-blur-sm hidden md:block"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        <button
          onClick={() => goToSlide(0)}
          className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors backdrop-blur-sm hidden md:block"
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

      {/* Export progress indicator */}
      {isExporting && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="bg-secondary rounded-xl p-6 shadow-2xl">
            <p className="text-foreground mb-3 text-center">Exporting...</p>
            <div className="w-48 h-2 bg-background rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${exportProgress}%` }}
              />
            </div>
            <p className="text-muted-foreground text-sm text-center mt-2">{exportProgress}%</p>
          </div>
        </div>
      )}

      {/* Slide navigation dots - hidden on mobile */}
      <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 md:gap-2 z-50 hidden md:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            title={slideNames[index]}
          />
        ))}
      </div>

      {/* Mobile slide indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground md:hidden z-50 bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Keyboard hint - only on desktop */}
      <div className="fixed bottom-6 left-6 text-xs text-muted-foreground/50 hidden lg:block">
        ← → navigate • F fullscreen • Swipe on mobile
      </div>
    </div>
  );
};

export default Presentation;