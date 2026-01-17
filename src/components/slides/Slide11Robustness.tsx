import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { CheckCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const laggedData = [
  { variable: "GDP Growth (t-1)", coef: "-0.013", stderr: "0.030", pvalue: "0.670" },
  { variable: "Exchange Rate (t-1)", coef: "0.003", stderr: "0.005", pvalue: "0.543" },
  { variable: "Inflation (t-1)", coef: "-0.004", stderr: "0.069", pvalue: "0.959" },
  { variable: "Repo Rate (t-1)", coef: "0.022", stderr: "0.040", pvalue: "0.591" },
];

const robustnessChecks = [
  "No significant sign reversals across specifications",
  "Coefficients stable under alternative model structures",
  "Multicollinearity within acceptable limits (VIF analysis)",
  "Fixed effects specification validated",
  "Clustering at sector level addresses heteroskedasticity",
];

const Slide11Robustness = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Robustness Checks"
        subtitle="Lagged effects and model stability assessment"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Table 4: Lagged Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header">Variable</th>
                  <th className="table-header text-right">Coef.</th>
                  <th className="table-header text-right">P-val</th>
                </tr>
              </thead>
              <tbody>
                {laggedData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <td className="table-cell font-medium text-sm">{row.variable}</td>
                    <td className="table-cell text-right font-mono text-primary text-sm">{row.coef}</td>
                    <td className="table-cell text-right font-mono text-sm">{row.pvalue}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Lagged effects remain statistically weak, confirming that short-run macro fluctuations 
            don't strongly drive sector FDI even with delays.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Stability Assessments
          </h3>
          <div className="space-y-3">
            {robustnessChecks.map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-chart-positive flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{check}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 data-card bg-secondary/50 text-center"
      >
        <p className="text-foreground">
          <span className="text-primary font-semibold">Conclusion:</span> Results are robust to alternative specifications — 
          sectoral heterogeneity in policy response is a consistent finding
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide11Robustness;
