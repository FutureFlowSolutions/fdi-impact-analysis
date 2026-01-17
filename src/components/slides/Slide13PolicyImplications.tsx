import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { Lightbulb, Factory, Building2, BarChart2 } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const implications = [
  {
    icon: BarChart2,
    title: "Move Beyond Aggregates",
    points: [
      "Evaluate FDI policies using sector-level metrics",
      "Monitor distributional impacts across industries",
      "Recognize that aggregate success may hide sectoral failures",
    ],
  },
  {
    icon: Factory,
    title: "Sector-Sensitive Approach",
    points: [
      "Design targeted incentives for strategic sectors",
      "PLI-style interventions show promise for manufacturing",
      "Different sectors require different policy instruments",
    ],
  },
  {
    icon: Building2,
    title: "Structural Considerations",
    points: [
      "Service sectors driven by market size and human capital",
      "Manufacturing responds to fiscal incentives",
      "Capital intensity influences policy responsiveness",
    ],
  },
  {
    icon: Lightbulb,
    title: "Long-Term Strategy",
    points: [
      "Align FDI policy with structural transformation goals",
      "Use elasticity measures for policy evaluation",
      "Consider value creation patterns by sector",
    ],
  },
];

const Slide13PolicyImplications = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Policy Implications"
        subtitle="Recommendations for FDI policy design and evaluation"
      />

      <div className="grid md:grid-cols-2 gap-5">
        {implications.map((impl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="data-card"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <impl.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground">
                {impl.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {impl.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};

export default Slide13PolicyImplications;
