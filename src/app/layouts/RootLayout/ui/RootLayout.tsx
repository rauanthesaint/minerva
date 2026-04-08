import { Navigation } from "./Navigation";
import styles from "./RootLayout.module.scss";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className={styles.RootLayout}>
      <header className={styles.Header}>{null}</header>
      <Outlet />
      <Navigation />
    </div>
  );
}
