import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const literatureItems = [
  {
    author: "Dunning (1988)",
    finding: "Macroeconomic, structural, and institutional factors drive FDI decisions globally",
  },
  {
    author: "Asiedu (2002)",
    finding: "High/volatile inflation and exchange rates increase uncertainty and discourage investment",
  },
  {
    author: "Chakrabarti (2001)",
    finding: "Market size, growth opportunities, and regulatory quality influence FDI choices",
  },
  {
    author: "Shalini (2020)",
    finding: "Service sector leads FDI in India, followed by manufacturing and construction",
  },
  {
    author: "Roy, Roy & Gupta (2021)",
    finding: "Trade openness, market size, and labor cost significantly influence inward FDI",
  },
  {
    author: "UNCTAD (2023)",
    finding: "Post-reform manufacturing FDI rising with Make in India and PLI schemes",
  },
];

const Slide04Literature = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Literature Overview"
        subtitle="Key findings from existing research on FDI determinants"
      />

      <div className="grid md:grid-cols-2 gap-4">
        {literatureItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="data-card group hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-primary font-display font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-foreground font-medium mb-1">
                  {item.author}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.finding}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30"
      >
        <p className="text-center text-accent text-sm">
          <span className="font-semibold">Gap:</span> Limited systematic study of sector-wise FDI responsiveness in a single econometric framework for India
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide04Literature;
