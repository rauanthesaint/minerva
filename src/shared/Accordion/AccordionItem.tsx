import { createContext, useContext, type ReactNode } from "react";
import { useAccordion } from "./store";
import styles from "./Accordion.module.scss";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

type AccordionItemProps = {
  children: ReactNode;
  disabled?: boolean;
  value: string;
};

type AccordionItemTriggerProps = {
  children: ReactNode;
};

type AccordionItemContentProps = {
  children: ReactNode;
};

const AccordionItemContext = createContext<{ value: string; disabled?: boolean } | null>(null);
function useAccordionItem() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) throw new Error("useAccordionItem must be used within AccordionItem");
  return ctx;
}

export function AccordionItem({ children, value, disabled }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value, disabled }}>
      <li className={styles.AccordionItem}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

export function AccordionItemTrigger({ children }: AccordionItemTriggerProps) {
  const { value, disabled } = useAccordionItem();
  const { setValue, value: currentValue } = useAccordion();
  const isActive = value === currentValue;

  return (
    <button
      className={styles.AccordionItemTrigger}
      disabled={disabled}
      onClick={() => setValue(value)}
    >
      <div className={clsx(styles.content, isActive && "heading lg")}>{children}</div>
      <HugeiconsIcon size={20} icon={ArrowDown01Icon} data-active={isActive} />
    </button>
  );
}

export function AccordionItemContent({ children }: AccordionItemContentProps) {
  const { value } = useAccordionItem();
  const { value: currentValue } = useAccordion();
  const isActive = value === currentValue;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className={styles.AccordionItemContent}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
