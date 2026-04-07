import { HugeiconsIcon } from "@hugeicons/react";
import { Input } from "./Input";
import { InputAddon } from "./InputAddon";
import { ViewIcon, ViewOffIcon } from "@hugeicons/core-free-icons";
import { useController, type FieldValues } from "react-hook-form";
import { useState } from "react";
import type { PasswordInputProps } from "../model";

export function PasswordInput<T extends FieldValues>({ children, ...controllerProps }: PasswordInputProps<T>) {
    const [visible, setVisible] = useState<boolean>(false);
    const { field } = useController(controllerProps);
    return (
        <Input type={visible ? "text" : "password"} {...field}>
            {children}
            <InputAddon align="end">
                <button tabIndex={-1} type="button" onClick={() => setVisible((prev) => !prev)}>
                    <HugeiconsIcon icon={ViewIcon} altIcon={ViewOffIcon} showAlt={visible} />
                </button>
            </InputAddon>
        </Input>
    );
}
