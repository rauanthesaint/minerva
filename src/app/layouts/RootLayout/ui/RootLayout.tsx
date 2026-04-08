import { Navigation } from "./Navigation";
import styles from "./RootLayout.module.scss";
import { Outlet } from "react-router-dom";
import { Section } from "@/shared/Section";

export function RootLayout() {
  return (
    <div className={styles.RootLayout}>
      <Section className={styles.Header}>{null}</Section>
      <Outlet />
      <Navigation />
    </div>
  );
}
