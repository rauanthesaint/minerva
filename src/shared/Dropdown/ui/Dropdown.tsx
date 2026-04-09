import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useClickOutside,
  usePopover,
  type PopoverContentProps,
  type PopoverProps,
} from "@/shared/Popover";
import clsx from "clsx";
import { useCallback, useState, type FC, type ReactNode } from "react";

import styles from "./Dropdown.module.scss";

export const Dropdown: FC<PopoverProps> = ({ children, defaultOpen }) => {
  return (
    <Popover defaultOpen={defaultOpen}>
      <DropdownWrapper>{children}</DropdownWrapper>
    </Popover>
  );
};

const DropdownWrapper = ({ children }: { children: ReactNode }) => {
  const { close } = usePopover();
  const ref = useClickOutside(close);
  return (
    <div className={styles.Dropdown} ref={ref}>
      {children}
    </div>
  );
};

export const DropdownTrigger = PopoverTrigger;

export const DropdownContent: FC<PopoverContentProps> = ({ className, children }) => {
  const [width, setWidth] = useState<number>(0);

  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    setWidth(node.offsetWidth);
  }, []);

  return (
    <PopoverContent
      ref={ref}
      style={{ top: "100%", left: `calc(50% - ${width / 2}px)` }}
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      exit={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      className={clsx(styles.DropdownContent, className)}
    >
      {children}
    </PopoverContent>
  );
};
