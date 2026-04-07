import styles from "./AccountsPage.module.scss";
import { AccountsList } from "@/widgets";

export function AccountsPage() {
  return (
    <main className={styles.AccountsPage}>
      <AccountsList />
    </main>
  );
}
