import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const Slide01Title = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm uppercase tracking-widest">
            Track 1 — Redefining Value
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6"
        >
          FDI Sensitivity to Macroeconomic,{" "}
          <br className="hidden md:block" />
          Financial and Policy Variables
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary font-display mb-8"
        >
          A Multi-Sector Econometric Model for India, 2000–2024
        </motion.p>

        {/* Authors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-2"
        >
          <p className="text-lg text-foreground font-medium">
            Pramit Datta & Sejal Roy
          </p>
          <p className="text-muted-foreground">
            St. Xavier's College (Autonomous), Mumbai
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        {/* Study period badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 inline-flex items-center gap-4"
        >
          <span className="text-muted-foreground text-sm">Study Period</span>
          <span className="text-2xl font-display text-primary font-semibold">2000 — 2024</span>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Title;
