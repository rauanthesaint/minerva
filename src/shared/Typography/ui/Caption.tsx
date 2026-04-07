import clsx from "clsx";
import type { CaptionProps } from "../model";
import styles from "./Typography.module.scss";

export function Caption({ children, className, align, muted = true }: CaptionProps) {
    return (
        <span style={{ textAlign: align }} className={clsx(styles.Caption, muted && styles.muted, className)}>
            {children}
        </span>
    );
}
