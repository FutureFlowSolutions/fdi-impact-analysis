import { motion } from "framer-motion";
import SlideLayout from "../presentation/SlideLayout";
import { Mail, MessageCircle } from "lucide-react";

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
}

const Slide16ThankYou = ({ slideNumber, totalSlides }: SlideProps) => {
  return (
    <SlideLayout slideNumber={slideNumber} totalSlides={totalSlides}>
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
            Thank You
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl text-primary font-display mb-12"
        >
          Questions & Discussion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-flex flex-col md:flex-row gap-6 mb-12"
        >
          <div className="data-card flex items-center gap-4 px-6 py-4">
            <Mail className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Pramit Datta</p>
              <p className="text-foreground">dattapramit1@gmail.com</p>
            </div>
          </div>
          <div className="data-card flex items-center gap-4 px-6 py-4">
            <Mail className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Sejal Roy</p>
              <p className="text-foreground">sejalroy123456@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            St. Xavier's College (Autonomous), Mumbai
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Track 1: Redefining Value | Theme: Dialectics of Disruption</span>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent blur-3xl" />
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide16ThankYou;
