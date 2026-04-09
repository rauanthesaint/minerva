import { type Account, accountsMock } from "@/entities/Account";
import { formatAmount } from "@/shared/formatters";
import { useParams } from "react-router-dom";
import styles from "./AccountsCard.module.scss";
import { Section } from "@/shared/Section";

const getAccount = (accountId: string | undefined): Account | undefined => {
  if (!accountId) return undefined;
  return accountsMock.find((account) => account.id === accountId);
};

export function AccountsCard() {
  const { accountId } = useParams();
  const account = getAccount(accountId);

  if (!account) {
    return null;
  }

  const { balance } = account;
  const [balanceDecimal, balanceFraction] = formatAmount(balance);
  return (
    <Section className={styles.AccountCard}>
      <h1 className="heading xxl">
        {balanceDecimal}
        <span className="heading muted">{balanceFraction}</span>
      </h1>
    </Section>
  );
}
