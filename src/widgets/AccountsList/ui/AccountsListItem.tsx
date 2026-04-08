import type { Account } from "@/entities/Account/model";
import styles from "./AccountsList.module.scss";
import { format } from "date-fns";
import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardIcon } from "@hugeicons/core-free-icons";
import { formatAmount } from "@/shared/formatters";
import { Link } from "react-router-dom";
import clsx from "clsx";

export function AccountsListItem({ data }: { data: Account }) {
  const { name, createdAt, balance, id } = data;

  return (
    <Link to={id}>
      <article className={styles.AccountsListItem}>
        <header className={styles.header}>
          <span className={clsx("heading lg", styles.title)}>{name}</span>
          <span>{formatAmount(balance)}</span>
        </header>
        <span className="text muted">{format(createdAt, "dd MMM yyyy")}</span>
      </article>
    </Link>
  );
}
