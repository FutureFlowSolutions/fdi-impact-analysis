import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { CheckCircle, AlertTriangle } from "lucide-react";

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
  { variable: "GDP Growth", vif: "1.82" },
  { variable: "Exchange Rate (REER)", vif: "2.45" },
  { variable: "Inflation (CPI)", vif: "3.12" },
  { variable: "Repo Rate", vif: "2.87" },
  { variable: "GST Dummy", vif: "1.56" },
  { variable: "Tax Reform Dummy", vif: "1.89" },
];

const robustnessChecks = [
  "No significant sign reversal across specifications",
  "Estimated coefficients are generally relatively stable",
  "Clustered standard errors address heteroskedasticity",
  "Fixed effects specification validated",
  "Policy interaction terms remain primary focus",
];

const Slide11Robustness = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Robustness Checks"
        subtitle="Alternative specifications, VIF diagnostics and model stability"
      />

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Table 5: Alternative Specifications */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="data-card"
        >
          <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-3">
            Table 5: Alternative Specifications (Lagged)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-xs">Variable</th>
                  <th className="table-header text-right text-xs">Coef.</th>
                  <th className="table-header text-right text-xs">P-val</th>
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
                    <td className="table-cell font-medium text-xs">{row.variable}</td>
                    <td className="table-cell text-right font-mono text-primary text-xs">{row.coef}</td>
                    <td className="table-cell text-right font-mono text-xs">{row.pvalue}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Lagged effects remain statistically weak, confirming short-run macro fluctuations 
            don't strongly drive sector FDI.
          </p>
        </motion.div>

        {/* VIF Diagnostics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="data-card"
        >
          <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-3">
            Table A4: Variance Inflation Factor (VIF)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="table-header text-xs">Variable</th>
                  <th className="table-header text-right text-xs">VIF</th>
                </tr>
              </thead>
              <tbody>
                {vifData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                  >
                    <td className="table-cell font-medium text-xs">{row.variable}</td>
                    <td className="table-cell text-right font-mono text-primary text-xs">{row.vif}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            All VIF values are below 5, indicating acceptable multicollinearity levels. This confirms that multicollinearity does not undermine the stability of fixed-effects estimates.
          </p>
        </motion.div>
      </div>

      {/* Stability Assessments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 md:mt-6 data-card"
      >
        <h3 className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-3">
          Model Stability Assessments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {robustnessChecks.map((check, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-2"
            >
              <CheckCircle className="w-4 h-4 text-chart-positive flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground text-xs md:text-sm">{check}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-4 data-card bg-secondary/50 text-center"
      >
        <p className="text-foreground text-xs md:text-sm">
          <span className="text-primary font-semibold">Conclusion:</span> Results are robust across specifications — 
          sectoral heterogeneity in policy response is a consistent finding
        </p>
      </motion.div>
    </SlideLayout>
  );
};

export default Slide11Robustness;