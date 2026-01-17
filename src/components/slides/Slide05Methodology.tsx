import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { Database, Calculator, FileText } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const dataSources = [
  { name: "DPIIT", type: "FDI Equity Inflows" },
  { name: "RBI", type: "Macro-financial Data" },
  { name: "World Bank", type: "Economic Indicators" },
  { name: "IMF", type: "Financial Data" },
  { name: "UNCTAD", type: "Investment Statistics" },
];

const variables = [
  { category: "Dependent", items: ["ln(FDI + 1) - Realised FDI equity inflows in USD"] },
  { category: "Independent", items: ["GDP Growth", "Exchange Rate (REER)", "Inflation (CPI)", "Repo Rate"] },
  { category: "Policy Dummies", items: ["GST 2017", "Corporate Tax 2019", "PLI 2020-21"] },
];

const Slide05Methodology = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Data & Methodology"
        subtitle="Analytical framework and econometric approach"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="data-card"
        >
          <Database className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-lg font-display font-semibold text-foreground mb-3">Data Sources</h3>
          <div className="space-y-2">
            {dataSources.map((source, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-primary font-medium">{source.name}</span>
                <span className="text-muted-foreground">{source.type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="data-card"
        >
          <FileText className="w-8 h-8 text-accent mb-4" />
          <h3 className="text-lg font-display font-semibold text-foreground mb-3">Variables</h3>
          <div className="space-y-3">
            {variables.map((v, i) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{v.category}</p>
                {v.items.map((item, j) => (
                  <p key={j} className="text-sm text-foreground">{item}</p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="data-card"
        >
          <Calculator className="w-8 h-8 text-chart-positive mb-4" />
          <h3 className="text-lg font-display font-semibold text-foreground mb-3">Model Features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Sector Fixed Effects</li>
            <li>• Time Fixed Effects</li>
            <li>• Lagged Variables</li>
            <li>• Sector × Policy Interactions</li>
            <li>• Clustered Std. Errors</li>
          </ul>
        </motion.div>
      </div>

      {/* Econometric model */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="data-card bg-secondary/50"
      >
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Econometric Model</h3>
        <p className="font-mono text-sm md:text-base text-foreground overflow-x-auto">
          ln(FDI<sub>it</sub> + 1) = α<sub>i</sub> + β Z<sub>t</sub> + γ Policy<sub>t</sub> + δ (Sector<sub>i</sub> × Policy<sub>t</sub>) + λ Z<sub>t-1</sub> + μ<sub>t</sub> + ε<sub>it</sub>
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide05Methodology;
