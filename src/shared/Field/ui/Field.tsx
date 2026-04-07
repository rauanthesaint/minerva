import clsx from "clsx";
import type { FieldBaseProps } from "../model";
import styles from "./Field.module.scss";

export function Field({ children, className }: FieldBaseProps) {
  return <div className={clsx(styles.Field, className)}>{children}</div>;
}
