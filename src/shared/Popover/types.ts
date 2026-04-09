import type { MouseEventHandler, ReactNode } from "react";

export type PopoverProps = {
  children: ReactNode;
  defaultOpen?: boolean;
};

export type PopoverPortalProps = {
  children: ReactNode;
};

export type PopoverTriggerProps = {
  children: ReactNode;
};

export type PopoverTriggerChildrenProps = {
  onClick: MouseEventHandler<HTMLElement>;
};

export type PopoverContentProps = {
  children: ReactNode;
  className?: string;
};

export type PopoverOverlayProps = {
  className?: string;
};
