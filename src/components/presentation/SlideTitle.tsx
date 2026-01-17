import { motion } from "framer-motion";

interface SlideTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SlideTitle = ({ title, subtitle, align = 'left' }: SlideTitleProps) => {
  return (
    <div className={`mb-8 ${align === 'center' ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="slide-title"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="slide-subtitle mt-2"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SlideTitle;
