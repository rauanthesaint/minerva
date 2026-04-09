import clsx from "clsx";
import type { FieldBaseProps } from "../model";

export function FieldLabel({ children, className }: FieldBaseProps) {
  return <span className={clsx("text sm bold", className)}>{children}</span>;
}
