import type { Account } from "@/entities/Account/model";
import styles from "./AccountsList.module.scss";
import { format } from "date-fns";
import { formatAmount } from "@/shared/formatters";
import { Link } from "react-router-dom";
import clsx from "clsx";

export function AccountsListItem({ data }: { data: Account }) {
  const { name, createdAt, balance, id } = data;
  const [balanceDecimal, balanceFraction] = formatAmount(balance);

  return (
    <Link to={id}>
      <article className={styles.AccountsListItem}>
        <header className={styles.header}>
          <span className={clsx("heading lg", styles.title)}>{name}</span>
          <span>
            {balanceDecimal}
            <span className="text sm muted">{balanceFraction}</span>
          </span>
        </header>
        <span className="text sm muted">{format(createdAt, "dd MMM yyyy")}</span>
      </article>
    </Link>
  );
}
