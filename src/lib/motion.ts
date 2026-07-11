import { Transition } from "framer-motion";

const customEase = [0.22, 1, 0.36, 1] as const;

export const revealProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: customEase }
};

export const staggerContainer = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }
};

export const staggerItem = {
  variants: {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: customEase }
    }
  }
};
