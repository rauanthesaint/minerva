import { useRef, type ReactNode } from "react";
import { AccordionContext, createAccordionStore, type AccordionStoreAPI } from "./store";
import styles from "./Accordion.module.scss";

type AccordionProps = { children: ReactNode; defaultValue?: string };

export function Accordion({ children, defaultValue }: AccordionProps) {
  const storeRef = useRef<AccordionStoreAPI>(null);

  if (!storeRef.current) {
    storeRef.current = createAccordionStore(defaultValue);
  }

  return (
    <AccordionContext value={storeRef.current}>
      <ul className={styles.Accordion}>{children}</ul>
    </AccordionContext>
  );
}
