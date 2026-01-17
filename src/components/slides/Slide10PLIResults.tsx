import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const pliData = [
  { sector: "Auto", coef: 2.68, color: "positive" },
  { sector: "Electrical", coef: 0.95, color: "positive" },
  { sector: "Services", coef: 0.72, color: "positive" },
  { sector: "Pharma", coef: 0.65, color: "positive" },
  { sector: "Metallurgical", coef: 0.12, color: "neutral" },
  { sector: "Software", coef: 0.08, color: "neutral" },
  { sector: "Telecom", coef: -0.05, color: "neutral" },
  { sector: "Chemicals", coef: -0.28, color: "negative" },
  { sector: "Construction", coef: -0.95, color: "negative" },
];

const Slide10PLIResults = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="PLI Scheme Results (2020-21)"
        subtitle="Production Linked Incentive scheme's impact on sectoral FDI"
      />

      <div className="grid md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Sector × PLI 2020 Interaction Coefficients
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pliData} layout="vertical" margin={{ left: 80 }}>
                <XAxis type="number" domain={[-1.5, 3]} tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="sector" tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 11 }} axisLine={false} tickLine={false} width={75} />
                <ReferenceLine x={0} stroke="hsl(217, 33%, 40%)" strokeWidth={1} />
                <Bar dataKey="coef" radius={[0, 4, 4, 0]}>
                  {pliData.map((entry, index) => (
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
            <h3 className="text-lg font-display font-semibold text-chart-positive mb-3">PLI Beneficiaries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="text-chart-positive font-semibold">Auto (+2.68)</span> — Strongest response</li>
              <li><span className="text-chart-positive font-semibold">Electrical (+0.95)</span> — Manufacturing boost</li>
              <li><span className="text-chart-positive font-semibold">Pharma (+0.65)</span> — Targeted incentives</li>
            </ul>
          </div>

          <div className="data-card">
            <h3 className="text-lg font-display font-semibold text-muted-foreground mb-3">Limited Response</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Service sectors show minimal sensitivity</li>
              <li>PLI designed for manufacturing</li>
              <li>Construction shows negative association</li>
            </ul>
          </div>

          <div className="data-card bg-chart-positive/10 border-chart-positive/30">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Key Success:</span> PLI effectively redirected FDI toward targeted manufacturing sectors
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide10PLIResults;
