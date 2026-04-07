import type { InputHTMLAttributes, ReactNode } from "react";
import type { FieldValues, UseControllerProps } from "react-hook-form";

export type InputProps = {
    children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export type BaseInputProps<T extends FieldValues> = {
    children?: ReactNode;
    placeholder?: string;
} & UseControllerProps<T>;
export type PasswordInputProps<T extends FieldValues> = BaseInputProps<T>;
export type TextInputProps<T extends FieldValues> = BaseInputProps<T>;
export type NumberInputProps<T extends FieldValues> = { min?: number; max?: number } & BaseInputProps<T>;

export type InputAddonProps = {
    children: ReactNode;
    align?: "start" | "end";
};
