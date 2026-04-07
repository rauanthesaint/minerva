import {
    Select,
    SelectContent,
    SelectItem,
    SelectItemText,
    SelectPortal,
    SelectTrigger,
    SelectValue,
    SelectViewport,
} from "@radix-ui/react-select";
import type { UncontrolledSelectProps } from "../model";

import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

import styles from "./Select.module.scss";
import clsx from "clsx";

export function UncontrolledSelect({
    placeholder,
    value,
    onValueChange,
    options,
    defaultValue,
    disabled,
    defaultOpen,
    variant = "item-aligned",
}: UncontrolledSelectProps) {
    const [selected, setSelected] = useState<string | undefined>(value ?? defaultValue);
    const [open, setOpen] = useState<boolean>(Boolean(defaultOpen));

    const onChange = (value: string) => {
        setSelected(value);
        onValueChange?.(value);
    };

    return (
        <Select open={open} onOpenChange={setOpen} value={selected} onValueChange={onChange}>
            <SelectTrigger disabled={disabled} className={styles.SelectTrigger}>
                <SelectValue placeholder={placeholder} />
                <HugeiconsIcon size={16} icon={ArrowDown01Icon} />
            </SelectTrigger>
            <SelectPortal>
                <SelectContent
                    align="center"
                    position={variant}
                    sideOffset={8}
                    className={clsx(styles.SelectContent, styles[variant])}
                >
                    <SelectViewport>
                        {options.map(({ value, title }) => {
                            const isSelected = selected === value;
                            return (
                                <SelectItem
                                    key={value}
                                    disabled={isSelected}
                                    className={styles.SelectItem}
                                    value={value}
                                >
                                    <SelectItemText>{title}</SelectItemText>
                                    {isSelected && <HugeiconsIcon size={16} icon={Tick02Icon} />}
                                </SelectItem>
                            );
                        })}
                    </SelectViewport>
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}
