import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const taxData = [
  { sector: "Telecom", coef: 1.85, color: "positive" },
  { sector: "Metallurgical", coef: 1.62, color: "positive" },
  { sector: "Software", coef: 0.52, color: "positive" },
  { sector: "Services", coef: 0.48, color: "positive" },
  { sector: "Construction", coef: 0.32, color: "positive" },
  { sector: "Chemicals", coef: -0.15, color: "neutral" },
  { sector: "Electrical", coef: -0.82, color: "negative" },
  { sector: "Pharma", coef: -1.45, color: "negative" },
  { sector: "Auto", coef: -2.35, color: "negative" },
];

const Slide09TaxReformResults = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Corporate Tax Reform Results (2019)"
        subtitle="Differential sectoral responses to corporate tax reduction"
      />

      <div className="grid md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Sector × Tax Reform 2019 Interaction Coefficients
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taxData} layout="vertical" margin={{ left: 80 }}>
                <XAxis type="number" domain={[-3, 2.5]} tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="sector" tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 11 }} axisLine={false} tickLine={false} width={75} />
                <ReferenceLine x={0} stroke="hsl(217, 33%, 40%)" strokeWidth={1} />
                <Bar dataKey="coef" radius={[0, 4, 4, 0]}>
                  {taxData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color === 'positive' ? 'hsl(142, 71%, 45%)' : entry.color === 'negative' ? 'hsl(0, 84%, 60%)' : 'hsl(215, 20%, 50%)'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 space-y-4"
        >
          <div className="data-card">
            <h3 className="text-lg font-display font-semibold text-chart-positive mb-3">Strong Responders</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="text-chart-positive font-semibold">Telecom (+1.85)</span> — Capital-intensive sector</li>
              <li><span className="text-chart-positive font-semibold">Metallurgical (+1.62)</span> — Recovery post-GST</li>
              <li><span className="text-chart-positive font-semibold">Software (+0.52)</span> — Continued growth</li>
            </ul>
          </div>

          <div className="data-card">
            <h3 className="text-lg font-display font-semibold text-chart-negative mb-3">Negative Association</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="text-chart-negative font-semibold">Auto (-2.35)</span> — Sector-specific factors</li>
              <li><span className="text-chart-negative font-semibold">Pharma (-1.45)</span> — Different dynamics</li>
            </ul>
          </div>

          <div className="data-card bg-accent/10 border-accent/30">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Insight:</span> Capital-intensive sectors responded more positively to lower corporate tax rates
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide09TaxReformResults;
