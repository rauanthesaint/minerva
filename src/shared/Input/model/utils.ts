import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { InputAddonProps } from "./types";
import { InputAddon } from "../ui/InputAddon";

function isInputAddon(child: unknown): child is ReactElement<InputAddonProps> {
  return (
    isValidElement(child) &&
    (child.type === InputAddon ||
      (child.type as { displayName?: string }).displayName === "InputAddon")
  );
}

export function sortAddons(children: ReactNode): [ReactNode[], ReactNode[]] {
  return Children.toArray(children).reduce<[ReactNode[], ReactNode[]]>(
    (acc, child) => {
      if (!isInputAddon(child)) return acc;

      const align = child.props.align ?? "start";
      acc[align === "start" ? 0 : 1].push(child);

      return acc;
    },
    [[], []],
  );
}
