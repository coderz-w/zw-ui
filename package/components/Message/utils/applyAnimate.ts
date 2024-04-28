import { Variants } from "framer-motion";

export const applyAnimate: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: Record<string, any> = {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    };
    result.scale = 0.85;
    return result;
  },
};
