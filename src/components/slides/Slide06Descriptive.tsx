import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import SlideTitle from "../presentation/SlideTitle";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

// Sample trend data for visualization
const softwareData = [
  { year: 2000, fdi: 5.8 }, { year: 2002, fdi: 5.5 }, { year: 2004, fdi: 6.0 },
  { year: 2006, fdi: 6.5 }, { year: 2008, fdi: 7.2 }, { year: 2010, fdi: 7.0 },
  { year: 2012, fdi: 7.5 }, { year: 2014, fdi: 8.0 }, { year: 2016, fdi: 8.3 },
  { year: 2018, fdi: 8.5 }, { year: 2020, fdi: 8.2 }, { year: 2022, fdi: 8.8 },
  { year: 2024, fdi: 9.0 },
];

const autoData = [
  { year: 2000, fdi: 6.0 }, { year: 2002, fdi: 6.3 }, { year: 2004, fdi: 6.8 },
  { year: 2006, fdi: 7.5 }, { year: 2008, fdi: 8.5 }, { year: 2010, fdi: 7.8 },
  { year: 2012, fdi: 8.0 }, { year: 2014, fdi: 8.8 }, { year: 2016, fdi: 8.2 },
  { year: 2018, fdi: 8.5 }, { year: 2020, fdi: 7.0 }, { year: 2022, fdi: 8.0 },
  { year: 2024, fdi: 8.5 },
];

const keyFindings = [
  "Service sectors (Software, Services) show stable, less volatile inflows",
  "Manufacturing sectors (Automobiles) display higher sensitivity to shocks",
  "Global Financial Crisis and COVID-19 created visible disruptions",
  "Recovery patterns differ significantly across sectors",
];

const Slide06Descriptive = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <SlideTitle
        title="Descriptive Analysis"
        subtitle="Sectoral FDI trends reveal substantial heterogeneity (2000-2024)"
      />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Computer Software & Hardware
          </h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={softwareData}>
                <defs>
                  <linearGradient id="colorFdi1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(45, 93%, 58%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 10 }} axisLine={false} tickLine={false} domain={[5, 10]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(222, 47%, 14%)',
                    border: '1px solid hsl(217, 33%, 25%)',
                    borderRadius: '8px',
                  }}
                />
                <Area type="monotone" dataKey="fdi" stroke="hsl(45, 93%, 58%)" fillOpacity={1} fill="url(#colorFdi1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">Stable upward trend, lower volatility</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="data-card"
        >
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Automobile Industry
          </h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={autoData}>
                <defs>
                  <linearGradient id="colorFdi2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(215, 20%, 65%)', fontSize: 10 }} axisLine={false} tickLine={false} domain={[5, 10]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(222, 47%, 14%)',
                    border: '1px solid hsl(217, 33%, 25%)',
                    borderRadius: '8px',
                  }}
                />
                <Area type="monotone" dataKey="fdi" stroke="hsl(199, 89%, 48%)" fillOpacity={1} fill="url(#colorFdi2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">Higher volatility, sharper shock responses</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {keyFindings.map((finding, index) => (
          <div key={index} className="data-card p-4">
            <span className="text-primary font-bold text-lg mr-2">{index + 1}</span>
            <span className="text-sm text-muted-foreground">{finding}</span>
          </div>
        ))}
      </motion.div>
    </SlideLayout>
  );
};

export default Slide06Descriptive;
