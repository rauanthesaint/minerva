import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuTrigger,
    type DropdownMenuItemProps,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

import styles from "./Menu.module.scss";

type MenuProps = {
    children: React.ReactNode;
    defaultOpen?: boolean;
};

type MenuTriggerProps = {
    children: React.ReactNode;
    asChild?: boolean;
};

type MenuContentProps = {
    children: React.ReactNode;
    className?: string;
    align?: "start" | "center" | "end";
    side?: "bottom" | "right" | "top" | "left";
};

type MenuItemProps = {
    isDestructive?: boolean;
} & DropdownMenuItemProps;

export function Menu({ children, defaultOpen }: MenuProps) {
    return <DropdownMenu defaultOpen={defaultOpen}>{children}</DropdownMenu>;
}

export function MenuTrigger({ asChild, children }: MenuTriggerProps) {
    return <DropdownMenuTrigger asChild={asChild}>{children}</DropdownMenuTrigger>;
}

export function MenuContent({
    children,
    className,
    align = "center",
    side = "bottom",
}: MenuContentProps) {
    return (
        <DropdownMenuPortal>
            <DropdownMenuContent
                sideOffset={8}
                align={align}
                side={side}
                className={clsx(styles.MenuContent, className)}
            >
                {children}
            </DropdownMenuContent>
        </DropdownMenuPortal>
    );
}

export function MenuItem({ children, className, isDestructive, ...rest }: MenuItemProps) {
    return (
        <DropdownMenuItem
            {...rest}
            data-destructive={isDestructive}
            className={clsx(styles.MenuItem, className)}
        >
            {children}
        </DropdownMenuItem>
    );
}
