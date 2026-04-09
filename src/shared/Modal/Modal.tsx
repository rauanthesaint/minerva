import {
  Popover,
  PopoverContent,
  PopoverOverlay,
  PopoverPortal,
  PopoverTrigger,
  usePopover,
  type PopoverContentProps,
} from "@/shared/Popover";
import { useEffect, type FC, type ReactNode } from "react";

import styles from "./Modal.module.scss";
import clsx from "clsx";
import { animate } from "motion/react";

export const Modal = Popover;

export const ModalTrigger = PopoverTrigger;

export const ModalContent: FC<PopoverContentProps> = ({ children, className }) => {
  const { close, isOpen } = usePopover();

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    animate(root, isOpen ? { scale: 0.95, borderRadius: 16 } : { scale: 1, borderRadius: 0 });
  }, [isOpen]);

  return (
    <PopoverPortal>
      <PopoverOverlay />
      <PopoverContent
        className={clsx(styles.ModalContent, className)}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        drag="y"
        dragElastic={{ top: 0, bottom: 0.2 }}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 200 || info.velocity.y > 500) close();
        }}
      >
        {children}
      </PopoverContent>
    </PopoverPortal>
  );
};

export const ModalTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="text sm bold">{children}</span>;
};

export const ModalHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <header className={styles.ModalHeader}>{children}</header>;
};
