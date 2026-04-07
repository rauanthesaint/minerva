import {
    Popover,
    PopoverContent,
    PopoverPortal,
    PopoverTrigger,
    type PopoverProps,
} from "@radix-ui/react-popover";
// import {
//     DropdownMenuItem as RDropdownMenuItem,
//     type DropdownMenuItemProps,
// } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

import styles from "./Dropdown.module.scss";

type DropdownProps = Omit<PopoverProps, "open" | "onOpenChange" | "modal">;
type DropdownTriggerProps = {
    children: React.ReactNode;
    asChild?: boolean;
};
type DropdownContentProps = {
    children: React.ReactNode;
    className?: string;
    align?: "start" | "center" | "end";
    side?: "top" | "right" | "bottom" | "left";
};

export function Dropdown({ children, defaultOpen }: DropdownProps) {
    return <Popover defaultOpen={defaultOpen}>{children}</Popover>;
}

export function DropdownTrigger({ children, asChild }: DropdownTriggerProps) {
    return <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>;
}

export function DropdownContent({
    children,
    className,
    align = "center",
    side = "bottom",
}: DropdownContentProps) {
    return (
        <PopoverPortal>
            <PopoverContent
                side={side}
                align={align}
                sideOffset={8}
                className={clsx(styles.DropdownContent, className)}
            >
                {children}
            </PopoverContent>
        </PopoverPortal>
    );
}

// export function DropdownMenu({
//     children,
//     className,
//     align = "center",
//     side = "bottom",
// }: DropdownContentProps) {
//     return (
//         <PopoverPortal>
//             <PopoverContent
//                 side={side}
//                 align={align}
//                 sideOffset={8}
//                 className={clsx(styles.DropdownMenu, className)}
//             >
//                 {children}
//             </PopoverContent>
//         </PopoverPortal>
//     );
// }

// export function DropdownMenuItem({ children, className, ...rest }: DropdownMenuItemProps) {
//     return (
//         <RDropdownMenuItem className={clsx(styles.DropdownMenuItem, className)} {...rest}>
//             {children}
//         </RDropdownMenuItem>
//     );
// }
