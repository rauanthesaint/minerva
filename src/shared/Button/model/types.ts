import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
  isLoading?: boolean;
  isIcon?: boolean;
  isDestructive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
