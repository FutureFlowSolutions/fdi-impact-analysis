import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { CheckCircle2 } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const conclusions = [
  "Aggregate macroeconomic variables have limited explanatory power for sector-level FDI once sector fixed effects are controlled",
  "Major policy reforms (GST, Corporate Tax, PLI) generate heterogeneous sectoral effects rather than uniform responses",
  "Industrial incentive-based policies (PLI) successfully redirect FDI toward targeted manufacturing sectors",
  "Service sectors show limited sensitivity to industrial reforms, driven more by market size and human capital",
  "Sectoral reallocation is a better lens for understanding FDI dynamics than aggregate expansion models",
  "A sector-sensitive policy approach is essential for effective FDI strategy aligned with structural transformation goals",
];

const Slide15Conclusion = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Conclusion"
        subtitle="Key takeaways from the multi-sector FDI analysis"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid gap-4">
          {conclusions.map((conclusion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="data-card flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{conclusion}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-lg text-foreground font-display">
          <span className="text-primary font-semibold">Theme Alignment:</span> This study demonstrates how 
          <span className="text-accent"> economic shocks and reforms reshape value creation</span> patterns 
          across India's industrial sectors.
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide15Conclusion;
