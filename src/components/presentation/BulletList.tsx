import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BulletListProps {
  items: (string | ReactNode)[];
  delay?: number;
}

const BulletList = ({ items, delay = 0 }: BulletListProps) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + index * 0.1 }}
          className="bullet-point"
        >
          <span className="bullet-marker" />
          <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BulletList;
