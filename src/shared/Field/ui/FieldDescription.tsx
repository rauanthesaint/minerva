import clsx from "clsx";
import type { FieldBaseProps } from "../model";

export function FieldDescription({ children, className }: FieldBaseProps) {
  return <p className={clsx("text sm muted", className)}>{children}</p>;
}
