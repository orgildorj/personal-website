import { motion } from "motion/react";

export const motionProps = {
  fromLeft: {
    component: motion.div,
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: undefined,
    transition: { duration: 2, ease: "easeOut" },
  },

  fromRight: {
    component: motion.div,
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: undefined,
    transition: { duration: 2, ease: "easeOut" },
  },
  appear: {
    component: motion.div,
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: undefined,
    transition: { duration: 2, ease: "easeOut" },
  },
};
