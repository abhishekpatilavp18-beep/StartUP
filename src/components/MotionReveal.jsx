import React from 'react';
import { motion } from 'framer-motion';

export default function MotionReveal({
  children,
  delay = 0,
  y = 55,
  duration = 1.1,
  className = "",
  once = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
