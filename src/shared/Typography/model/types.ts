import type { ReactNode } from "react";

export type TypographyBaseProps = {
    children: ReactNode;
    className?: string;
    align?: "right" | "left" | "center";
    id?: string;
};

const headingLevels = [1, 2, 3, 4] as const;

export type HeadingProps = {
    level?: (typeof headingLevels)[number];
} & TypographyBaseProps;

export type CaptionProps = {
    muted?: boolean;
} & TypographyBaseProps;
