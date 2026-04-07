import type { SelectProps } from "@radix-ui/react-select";

export type Option = {
    title: string;
    value: string;
};

export type SharedSelectProps = {
    placeholder?: string;
    options: Option[];
    variant?: "popper" | "item-aligned";
};

export type UncontrolledSelectProps = SharedSelectProps &
    Omit<SelectProps, "children" | "open" | "onOpenChange">;
