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

const vifData = [
  { variable: "GDP Growth", vif: "15.23" },
  { variable: "Inflation", vif: "36.61" },
  { variable: "Exchange Rate", vif: "36.75" },
  { variable: "Repo Rate", vif: "30.74" },
];

const correlationData = [
  { var1: "GDP ↔ Inflation", corr: "0.007" },
  { var1: "GDP ↔ Exchange", corr: "0.214" },
  { var1: "GDP ↔ Repo", corr: "-0.357" },
  { var1: "Inflation ↔ Repo", corr: "0.407" },
];

const robustnessChecks = [
  "No significant sign reversals across specifications",
  "Coefficients stable under alternative model structures",
  "Fixed effects specification validated",
  "Clustering addresses heteroskedasticity",
];

const Slide11Robustness = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Robustness Checks"
        subtitle="Lagged effects, VIF diagnostics, and model stability"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {/* Lagged Specifications */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="data-card"
        >
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Table 4: Lagged Specifications
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-xs py-2">Variable</th>
                  <th className="table-header text-right text-xs py-2">Coef.</th>
                  <th className="table-header text-right text-xs py-2">P-val</th>
                </tr>
              </thead>
              <tbody>
                {laggedData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="table-cell text-xs py-2">{row.variable}</td>
                    <td className="table-cell text-right font-mono text-primary text-xs py-2">{row.coef}</td>
                    <td className="table-cell text-right font-mono text-xs py-2">{row.pvalue}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Lagged effects remain statistically weak
          </p>
        </motion.div>

        {/* VIF Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="data-card"
        >
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Appendix Table A4: VIF Diagnostics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-xs py-2">Variable</th>
                  <th className="table-header text-right text-xs py-2">VIF</th>
                </tr>
              </thead>
              <tbody>
                {vifData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <td className="table-cell text-xs py-2">{row.variable}</td>
                    <td className={`table-cell text-right font-mono text-xs py-2 ${parseFloat(row.vif) > 30 ? 'text-primary' : 'text-chart-positive'}`}>
                      {row.vif}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Moderate VIF values; inference based on clustered SE
          </p>
        </motion.div>

        {/* Correlation Matrix */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="data-card"
        >
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Appendix Table A2: Correlations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-xs py-2">Pair</th>
                  <th className="table-header text-right text-xs py-2">ρ</th>
                </tr>
              </thead>
              <tbody>
                {correlationData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <td className="table-cell text-xs py-2">{row.var1}</td>
                    <td className="table-cell text-right font-mono text-xs py-2 text-chart-positive">
                      {row.corr}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            No excessive correlations found
          </p>
        </motion.div>
      </div>

      {/* Stability Checks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 grid md:grid-cols-4 gap-3"
      >
        {robustnessChecks.map((check, index) => (
          <div key={index} className="data-card p-3 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-chart-positive flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground text-xs">{check}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-4 data-card bg-secondary/50 text-center py-3"
      >
        <p className="text-foreground text-sm">
          <span className="text-primary font-semibold">Conclusion:</span> Results robust to alternative specifications — 
          sectoral heterogeneity in policy response is consistent
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide11Robustness;
