import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { TrendingUp, Layers, Target, AlertCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const discussionPoints = [
  {
    icon: AlertCircle,
    title: "Limited Macro Sensitivity",
    content: "Aggregate macroeconomic variables (GDP, inflation, rates) have weak explanatory power once sector effects are controlled",
    color: "text-chart-negative",
  },
  {
    icon: Layers,
    title: "Sectoral Heterogeneity Dominates",
    content: "Persistent sector-specific characteristics explain more variation than short-run economic fluctuations",
    color: "text-accent",
  },
  {
    icon: Target,
    title: "Targeted Policies Work",
    content: "Industrial policies (PLI) successfully redirect FDI to manufacturing sectors; GST benefits formal supply chains",
    color: "text-chart-positive",
  },
  {
    icon: TrendingUp,
    title: "Reallocation vs. Expansion",
    content: "Policy reforms primarily reshape FDI distribution across sectors rather than uniformly expanding aggregate inflows",
    color: "text-primary",
  },
];

const Slide12Discussion = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Discussion of Results"
        subtitle="Key insights from the multi-sector analysis"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {discussionPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="data-card"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-secondary ${point.color}`}>
                <point.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.content}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-chart-positive/10 rounded-xl border border-primary/20"
      >
        <p className="text-center text-lg text-foreground">
          <span className="font-display font-semibold text-primary">"</span>
          National FDI totals hide large differences in how sectors react to economic conditions and reforms. 
          Policy based only on aggregates can misread where investment is really responding.
          <span className="font-display font-semibold text-primary">"</span>
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide12Discussion;
