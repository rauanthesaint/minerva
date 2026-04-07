import type { ElementType } from "react";
import type { HeadingProps } from "../model";
import clsx from "clsx";
import styles from "./Typography.module.scss";

export function Heading({ className, children, level = 1, align, id }: HeadingProps) {
    const Component: ElementType = `h${level}`;

    return (
        <Component
            id={id}
            style={{ textAlign: align }}
            data-level={level}
            className={clsx(styles.Heading, className)}
        >
            {children}
        </Component>
    );
}
