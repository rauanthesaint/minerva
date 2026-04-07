import type { TargetAndTransition, Transition } from "motion/react";

export type AnimationVariants = {
  active: TargetAndTransition;
  inactive: TargetAndTransition;
  transition?: Transition;
};

export const backdropAnimation: AnimationVariants = {
  active: { opacity: 1 },
  inactive: { opacity: 0 },
  transition: { duration: 0.25, ease: "easeOut" },
};

export const contentAnimation: AnimationVariants = {
  active: { opacity: 1, scale: 1, y: 0 },
  inactive: { opacity: 0, scale: 0.92, y: 24 },
  transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
};
