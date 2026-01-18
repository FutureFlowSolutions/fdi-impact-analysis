import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { Database, Calculator, FileText, TrendingUp } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const dataSources = [
  { name: "DPIIT", type: "FDI Equity Inflows", period: "2000-2024" },
  { name: "RBI", type: "Macro-financial Data", period: "Exchange Rate, Repo" },
  { name: "World Bank", type: "WDI Indicators", period: "GDP, Inflation" },
  { name: "IMF", type: "Financial Statistics", period: "IFS Database" },
  { name: "UNCTAD", type: "Investment Stats", period: "Global FDI Flows" },
];

const variableDescriptions = [
  { variable: "ln(FDI + 1)", description: "Log of realised FDI equity inflows (USD millions)", type: "Dependent" },
  { variable: "GDP Growth", description: "Annual GDP growth rate (%)", type: "Macro" },
  { variable: "REER", description: "Real Effective Exchange Rate Index", type: "Macro" },
  { variable: "CPI Inflation", description: "Consumer Price Index annual change (%)", type: "Macro" },
  { variable: "Repo Rate", description: "RBI policy interest rate (%)", type: "Financial" },
  { variable: "GST (2017)", description: "Goods & Services Tax implementation dummy", type: "Policy" },
  { variable: "Tax Reform (2019)", description: "Corporate tax rate reduction dummy", type: "Policy" },
  { variable: "PLI (2020-21)", description: "Production Linked Incentive scheme dummy", type: "Policy" },
];

const methodologyPoints = [
  "Panel Fixed Effects (FE) model with sector and time fixed effects",
  "Sector × Policy interaction terms to capture heterogeneous responses",
  "Clustered standard errors at sector level for robust inference",
  "Lagged specifications (t-1) for robustness testing",
];

const Slide05Methodology = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Data & Methodology"
        subtitle="Data sources, variable definitions and econometric framework"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 mb-4">
        {/* Data Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="data-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h3 className="text-sm md:text-base font-display font-semibold text-foreground">Data Sources</h3>
          </div>
          <div className="space-y-2">
            {dataSources.map((source, i) => (
              <motion.div 
                key={i} 
                className="flex justify-between text-xs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-primary font-medium">{source.name}</span>
                <span className="text-muted-foreground text-right">{source.type}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pt-2 border-t border-border/30">
            Panel: 17 sectors × 25 years (2000-2024)
          </p>
        </motion.div>

        {/* Variable Descriptions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="data-card lg:col-span-2"
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            <h3 className="text-sm md:text-base font-display font-semibold text-foreground">Variable Definitions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-xs">Variable</th>
                  <th className="table-header text-xs">Description</th>
                  <th className="table-header text-xs text-right">Type</th>
                </tr>
              </thead>
              <tbody>
                {variableDescriptions.map((v, i) => (
                  <motion.tr 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.03 }}
                  >
                    <td className="table-cell font-mono text-primary text-xs">{v.variable}</td>
                    <td className="table-cell text-xs text-muted-foreground">{v.description}</td>
                    <td className={`table-cell text-right text-xs ${
                      v.type === 'Dependent' ? 'text-chart-positive' : 
                      v.type === 'Policy' ? 'text-accent' : 'text-muted-foreground'
                    }`}>
                      {v.type}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Econometric Model & Methodology */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="data-card bg-secondary/50"
        >
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 md:w-6 md:h-6 text-chart-positive" />
            <h3 className="text-sm md:text-base font-display font-semibold text-foreground">Econometric Model</h3>
          </div>
          <div className="bg-background/50 rounded-lg p-3 overflow-x-auto">
            <p className="font-mono text-xs md:text-sm text-foreground whitespace-nowrap">
              ln(FDI<sub>it</sub> + 1) = α<sub>i</sub> + β Z<sub>t</sub> + γ Policy<sub>t</sub> + δ (Sector<sub>i</sub> × Policy<sub>t</sub>) + λ Z<sub>t-1</sub> + μ<sub>t</sub> + ε<sub>it</sub>
            </p>
          </div>
          <div className="mt-3 text-xs text-muted-foreground space-y-1">
            <p><span className="text-primary">α<sub>i</sub></span> = Sector fixed effects</p>
            <p><span className="text-primary">μ<sub>t</sub></span> = Time fixed effects</p>
            <p><span className="text-primary">δ</span> = Differential sector-policy response</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="data-card"
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h3 className="text-sm md:text-base font-display font-semibold text-foreground">Methodology</h3>
          </div>
          <ul className="space-y-2">
            {methodologyPoints.map((point, i) => (
              <motion.li 
                key={i}
                className="text-xs text-muted-foreground flex items-start gap-2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.08 }}
              >
                <span className="text-primary">•</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide05Methodology;