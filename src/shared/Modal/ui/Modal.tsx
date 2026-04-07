import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogPortal,
    DialogOverlay,
    DialogTitle,
} from "@radix-ui/react-dialog";
import type { DialogProps, DialogTitleProps } from "@radix-ui/react-dialog";
import clsx from "clsx";

import styles from "./Modal.module.scss";
import { Heading } from "@/shared/Typography";

type ModalProps = Omit<DialogProps, "open" | "onOpenChange" | "modal">;
type ModalContentProps = {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
};
type ModalTriggerProps = { asChild?: boolean; children: React.ReactNode };

export function Modal({ children, defaultOpen }: ModalProps) {
    return <Dialog defaultOpen={defaultOpen}>{children}</Dialog>;
}

export function ModalTitle({ children, ...rest }: DialogTitleProps) {
    return (
        <DialogTitle className={styles.ModalTitle} asChild {...rest}>
            <Heading level={4}>{children}</Heading>
        </DialogTitle>
    );
}

export function ModalContent({ children, asChild, className }: ModalContentProps) {
    return (
        <DialogPortal>
            <DialogOverlay className={styles.ModalOverlay} />
            <DialogContent
                aria-describedby={undefined}
                asChild={asChild}
                className={clsx(styles.ModalContent, className)}
            >
                {children}
            </DialogContent>
        </DialogPortal>
    );
}

export function ModalTrigger({ asChild, children }: ModalTriggerProps) {
    return <DialogTrigger asChild={asChild}>{children}</DialogTrigger>;
}
