import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const baselineData = [
  { variable: "GDP Growth", coef: "0.0168", stderr: "0.0325", pvalue: "0.606", significance: "" },
  { variable: "Exchange Rate", coef: "0.0023", stderr: "0.0058", pvalue: "0.686", significance: "" },
  { variable: "Inflation", coef: "-0.015", stderr: "0.042", pvalue: "0.72", significance: "" },
  { variable: "Repo Rate", coef: "-0.021", stderr: "0.038", pvalue: "0.58", significance: "" },
];

const Slide07BaselineResults = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Baseline Regression Results"
        subtitle="Fixed effects estimates of macroeconomic sensitivity"
      />

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Table 2: Parameter Estimates
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header">Variable</th>
                  <th className="table-header text-right">Coefficient</th>
                  <th className="table-header text-right">Std. Error</th>
                  <th className="table-header text-right">P-value</th>
                </tr>
              </thead>
              <tbody>
                {baselineData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <td className="table-cell font-medium">{row.variable}</td>
                    <td className="table-cell text-right font-mono text-primary">
                      {row.coef}
                    </td>
                    <td className="table-cell text-right font-mono">{row.stderr}</td>
                    <td className="table-cell text-right font-mono">{row.pvalue}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Notes: Dependent variable = ln(FDI + 1). All models include sector and time fixed effects. 
            Clustered standard errors at sector level.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="data-card">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Finding</h3>
            <p className="text-foreground leading-relaxed">
              Aggregate macroeconomic variables have <span className="text-primary font-semibold">limited explanatory power</span> for sector-level FDI once sector fixed effects are included.
            </p>
          </div>

          <div className="data-card bg-accent/10 border-accent/30">
            <h3 className="text-sm uppercase tracking-wider text-accent mb-3">Interpretation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• GDP growth positive but not significant</li>
              <li>• Inflation and rates show expected negative signs</li>
              <li>• Exchange rate effects ambiguous</li>
              <li>• Sector heterogeneity dominates</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide07BaselineResults;
