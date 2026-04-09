import { cloneElement, useEffect, useRef, type FC, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { createPopoverStore, PopoverContext, usePopover, type PopoverStoreAPI } from "./store";
import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";

import type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverTriggerChildrenProps,
  PopoverPortalProps,
  PopoverContentProps,
} from "./types";

/** Popover */
export const Popover: FC<PopoverProps> = ({ children, defaultOpen }) => {
  const ref = useRef<PopoverStoreAPI>(null);
  if (!ref.current) {
    ref.current = createPopoverStore(defaultOpen);
  }

  return <PopoverContext value={ref.current}>{children}</PopoverContext>;
};

/** Popover Portal */
export const PopoverPortal: FC<PopoverPortalProps> = ({ children }) => {
  const container = document.getElementById("portal") ?? document.body;
  return createPortal(children, container);
};

/** Popover Trigger */
export const PopoverTrigger: FC<PopoverTriggerProps> = ({ children }) => {
  const { toggle } = usePopover();

  return cloneElement(children as ReactElement<PopoverTriggerChildrenProps>, {
    onClick: toggle,
  });
};

/** Popover Content */
export const PopoverContent: FC<PopoverContentProps & HTMLMotionProps<"div">> = ({
  children,
  ...rest
}) => {
  const { isOpen, close } = usePopover();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div ref={ref} {...rest}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const PopoverOverlay: FC = () => {
  const { isOpen } = usePopover();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={{
            position: "fixed",
            inset: "0",
            backgroundColor: "rgba(0, 0, 0, .3)",
            zIndex: "var(--lvl-1) - 1",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </AnimatePresence>
  );
};
