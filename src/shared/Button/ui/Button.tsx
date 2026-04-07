import styles from "./Button.module.scss";
import type { ButtonProps } from "../model";
import clsx from "clsx";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03Icon } from "@hugeicons/core-free-icons";

export function Button({
    variant = "primary",
    size = "md",
    isLoading,
    isDestructive,
    isIcon,
    children,
    className,
    disabled,
    ...defaultProps
}: ButtonProps) {
    const classes = clsx(styles.Button, styles[variant], styles[size], className);

    return (
        <button
            {...defaultProps}
            data-icon={isIcon}
            data-loading={isLoading}
            disabled={disabled}
            className={classes}
        >
            {isLoading && (
                <div className={styles.overlay}>
                    <HugeiconsIcon icon={Loading03Icon} />
                </div>
            )}
            {children}
        </button>
    );
}
