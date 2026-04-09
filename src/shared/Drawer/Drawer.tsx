import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  usePopover,
  type PopoverContentProps,
} from "@/shared/Popover";
import { useEffect, type FC } from "react";

import styles from "./Drawer.module.scss";
import clsx from "clsx";
import { animate } from "motion/react";

export const Drawer = Popover;

export const DrawerTrigger = PopoverTrigger;

export const DrawerContent: FC<PopoverContentProps> = ({ className, children }) => {
  const { close, isOpen } = usePopover();

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    animate(root, isOpen ? { x: "-50%" } : { x: 0 }, { damping: 100 });
  }, [isOpen]);

  return (
    <PopoverPortal>
      <PopoverContent
        className={clsx(styles.DrawerContent, className)}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        drag="x"
        dragElastic={{ left: 0, right: 0.2 }}
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x > 200 || info.velocity.x > 500) close();
        }}
      >
        {children}
      </PopoverContent>
    </PopoverPortal>
  );
};
