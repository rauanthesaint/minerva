import type { Transaction } from "@/entities/Transaction";
import styles from "./TransactionsList.module.scss";

type TransactionsListItemProps = {
  data: Transaction;
};

export function TransactionsList() {
  return <ul className={styles.TransactionsList}></ul>;
}

export function TransactionsListItem({ data: _ }: TransactionsListItemProps) {
  // const { account, amount, createdAt } = data;

  return <li className={styles.TransactionsListItem}></li>;
}
