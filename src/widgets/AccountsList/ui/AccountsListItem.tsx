import type { Account } from "@/entities/Account/model";
import styles from "./AccountsList.module.scss";
import { format } from "date-fns";
import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardIcon } from "@hugeicons/core-free-icons";
import { formatAmount } from "@/shared/formatters";

export function AccountsListItem({ data }: { data: Account }) {
  const { name, createdAt, balance } = data;

  return (
    <article className={styles.AccountsListItem}>
      <header className={styles.header}>
        <div className={styles.content}>
          <HugeiconsIcon icon={CreditCardIcon} />
          <span className={styles.title}>{name}</span>
        </div>
        <span>{formatAmount(balance)}</span>
      </header>
      <footer className={styles.footer}>
        <span>{format(createdAt, "dd MMM yyyy")}</span>
      </footer>
    </article>
  );
}
