import { accountsMock } from "@/entities/Account/model";
import { AccountsListItem } from "./AccountsListItem";
import styles from "./AccountsList.module.scss";
import { Carousel } from "@/shared/Carousel";
import { Section } from "@/shared/Section";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon } from "@hugeicons/core-free-icons";

export function AccountsList() {
  return (
    <Section className={styles.AccountsList}>
      <Carousel>
        {accountsMock.map((account) => (
          <AccountsListItem data={account} key={account.id} />
        ))}
        <button className={styles.CreateAccountButton}>
          <div className={styles.icon}>
            <HugeiconsIcon icon={PlusSignIcon} />
          </div>
          <span>Новый счет</span>
        </button>
      </Carousel>
    </Section>
  );
}
