import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import BulletList from "../presentation/BulletList";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const Slide02Background = ({ slideNumber, totalSlides }: SlideProps) => {
  const roleOfFDI = [
    "FDI entails long-term managerial participation, unlike volatile portfolio flows",
    "Brings technology transfer, global value chain integration, and productivity enhancement",
    "India's FDI rose significantly post-1991 liberalization reforms",
    "Key sectors: Services, Telecommunications, Construction, Manufacturing, Digital",
  ];

  const researchGap = [
    "Most studies analyze aggregate national FDI inflows",
    "Aggregate measures hide significant sectoral heterogeneity",
    "Limited research on sector-wise responsiveness in a unified econometric framework",
    "Policy effects often modeled with broad liberalization indicators",
  ];

  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Background & Research Gap"
        subtitle="Understanding the role of FDI in India's development"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="data-card"
        >
          <h3 className="text-xl font-display font-semibold text-primary mb-6">
            Role of FDI in India
          </h3>
          <BulletList items={roleOfFDI} delay={0.2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="data-card"
        >
          <h3 className="text-xl font-display font-semibold text-accent mb-6">
            Research Gap
          </h3>
          <BulletList items={researchGap} delay={0.4} />
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Background;
