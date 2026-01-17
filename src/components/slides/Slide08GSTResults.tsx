import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, ReferenceLine } from "recharts";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const gstData = [
  { sector: "Pharma", coef: 0.797, color: "positive" },
  { sector: "Chemicals", coef: 0.722, color: "positive" },
  { sector: "Electrical", coef: 0.411, color: "positive" },
  { sector: "Construction", coef: 0.378, color: "positive" },
  { sector: "Software", coef: 0.363, color: "positive" },
  { sector: "Auto", coef: 0.301, color: "positive" },
  { sector: "Telecom", coef: 0.032, color: "neutral" },
  { sector: "Services", coef: -0.260, color: "negative" },
  { sector: "Metallurgical", coef: -0.913, color: "negative" },
];

const Slide08GSTResults = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="GST Policy Results (2017)"
        subtitle="Sectoral FDI responses to Goods and Services Tax reform"
      />

      <div className="grid md:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Sector × GST 2017 Interaction Coefficients
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gstData} layout="vertical" margin={{ left: 80 }}>
                <XAxis type="number" domain={[-1.2, 1]} tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="sector" tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 11 }} axisLine={false} tickLine={false} width={75} />
                <ReferenceLine x={0} stroke="hsl(217, 33%, 40%)" strokeWidth={1} />
                <Bar dataKey="coef" radius={[0, 4, 4, 0]}>
                  {gstData.map((entry, index) => (
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
            <h3 className="text-lg font-display font-semibold text-chart-positive mb-3">Winners</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="text-chart-positive font-semibold">Pharma (+0.80)</span> — Highest positive response</li>
              <li><span className="text-chart-positive font-semibold">Chemicals (+0.72)</span> — Strong formal supply chain</li>
              <li><span className="text-chart-positive font-semibold">Electrical (+0.41)</span> — Manufacturing boost</li>
            </ul>
          </div>

          <div className="data-card">
            <h3 className="text-lg font-display font-semibold text-chart-negative mb-3">Challenged</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="text-chart-negative font-semibold">Metallurgical (-0.91)</span> — Sharp decline</li>
              <li><span className="text-chart-negative font-semibold">Services (-0.26)</span> — Limited sensitivity</li>
            </ul>
          </div>

          <div className="data-card bg-primary/10 border-primary/30">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Insight:</span> GST favored sectors integrated into formal supply chains
            </p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide08GSTResults;
