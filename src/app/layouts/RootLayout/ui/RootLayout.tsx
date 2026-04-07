import { UserBadge } from "@/entities/User";
import { Navigation } from "./Navigation";
import styles from "./RootLayout.module.scss";
import { Outlet } from "react-router-dom";
import { Container } from "@/shared/Container";

export function RootLayout() {
  return (
    <div className={styles.RootLayout}>
      <Container as={"header"} className={styles.Header}>
        <UserBadge />
      </Container>
      <Outlet />
      <Navigation />
    </div>
  );
}
