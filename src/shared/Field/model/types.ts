import type { ReactNode } from "react";

export type FieldBaseProps = {
  children: ReactNode;
  className?: string;
};

export type FieldErrorProps = {
  children: ReactNode | undefined;
} & Omit<FieldBaseProps, "children">;
