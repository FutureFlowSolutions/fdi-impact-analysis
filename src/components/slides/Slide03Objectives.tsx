import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { Target, BarChart3, GitCompare, TrendingUp } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const objectives = [
  {
    icon: Target,
    title: "Primary Objective",
    description: "Examine whether sector-level FDI inflows respond uniformly to macroeconomic conditions and policy reforms, or show systematic differences",
  },
  {
    icon: BarChart3,
    title: "Measure Sensitivity",
    description: "Quantify sectoral FDI elasticities to GDP growth, exchange rates, inflation, interest rates, and major reform episodes",
  },
  {
    icon: GitCompare,
    title: "Compare Responsiveness",
    description: "Compare sensitivity across sectors using a unified multi-sector panel framework with fixed effects",
  },
  {
    icon: TrendingUp,
    title: "Policy Assessment",
    description: "Evaluate heterogeneous effects of GST (2017), Corporate Tax Reform (2019), and PLI Schemes (2020-21)",
  },
];

const Slide03Objectives = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Objectives of the Study"
        subtitle="Key research questions and analytical goals"
        align="center"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {objectives.map((obj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="data-card flex gap-5"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <obj.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {obj.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {obj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default Slide03Objectives;
