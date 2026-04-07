import { accountsMock } from "@/entities/Account/model";
import { AccountsListItem } from "./AccountsListItem";
import styles from "./AccountsList.module.scss";
import { Carousel } from "@/shared/Carousel";
import { Button } from "@/shared/Button";
import { Container } from "@/shared/Container";
import { HugeiconsIcon } from "@hugeicons/react";
import { CreditCardAddIcon } from "@hugeicons/core-free-icons";

export function AccountsList() {
  return (
    <section className={styles.AccountsList}>
      <Carousel>
        {accountsMock.map((account) => (
          <AccountsListItem data={account} key={account.id} />
        ))}
      </Carousel>

      <Container className={styles.container}>
        <Button>
          <HugeiconsIcon icon={CreditCardAddIcon} />
          <span>New Account</span>
        </Button>
      </Container>
    </section>
  );
}
