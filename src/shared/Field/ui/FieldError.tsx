import clsx from "clsx";
import type { FieldErrorProps } from "../model";
import styles from "./Field.module.scss";
import { Caption } from "@/shared/Typography";

export function FieldError({ children, className }: FieldErrorProps) {
    return children ? (
        <Caption muted={false} className={clsx(styles.FieldError, className)}>
            {children}
        </Caption>
    ) : null;
}
