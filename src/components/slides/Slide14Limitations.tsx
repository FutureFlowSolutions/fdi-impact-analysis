import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { AlertTriangle, ArrowRight } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const limitations = [
  "Aggregate sector-level data may mask firm-level and regional heterogeneity",
  "Discrete policy dummies don't capture continuous policy intensity",
  "Limited post-reform period for assessing long-term PLI effects",
  "Observational nature limits strict causal interpretation",
  "Exchange rate effects remain ambiguous in the model",
];

const futureDirections = [
  { current: "Sector-level panel", future: "Firm-level or state-level data" },
  { current: "Policy dummies", future: "Continuous policy intensity measures" },
  { current: "Fixed effects", future: "Dynamic panel or structural models" },
  { current: "Traditional sectors", future: "Digital economy and emerging sectors" },
  { current: "Domestic focus", future: "Global tariff and sentiment impacts" },
];

const Slide14Limitations = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Limitations & Future Scope"
        subtitle="Acknowledging constraints and identifying research opportunities"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="data-card"
        >
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold text-foreground">
              Study Limitations
            </h3>
          </div>
          <div className="space-y-4">
            {limitations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary font-mono font-bold text-sm mt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="data-card"
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-5">
            Future Research Directions
          </h3>
          <div className="space-y-4">
            {futureDirections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-muted-foreground text-sm flex-1">{item.current}</span>
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-accent text-sm font-medium flex-1">{item.future}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide14Limitations;
