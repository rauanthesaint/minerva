import clsx from "clsx";
import styles from "./Section.module.scss";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

type SectionTitleProps = {
  children: ReactNode;
};

export function Section({ children, className }: SectionProps) {
  return <section className={clsx(styles.Section, className)}>{children}</section>;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <span className={clsx("heading", styles.SectionTitle)}>{children}</span>;
}
