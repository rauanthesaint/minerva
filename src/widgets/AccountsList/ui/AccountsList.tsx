import { accountsMock } from "@/entities/Account/model";
import { AccountsListItem } from "./AccountsListItem";
import styles from "./AccountsList.module.scss";
import { Carousel } from "@/shared/Carousel";
import { Section } from "@/shared/Section";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { Modal, ModalContent, ModalTitle, ModalTrigger } from "@/shared/Modal";
import { CreateAccount } from "@/features";
import { ModalHeader } from "@/shared/Modal/Modal";

export function AccountsList() {
  return (
    <Section className={styles.AccountsList}>
      <Carousel>
        {accountsMock.map((account) => (
          <AccountsListItem data={account} key={account.id} />
        ))}
        <Modal>
          <ModalTrigger>
            <button className={styles.CreateAccountButton}>
              <div className={styles.icon}>
                <HugeiconsIcon icon={PlusSignIcon} />
              </div>
              <span>Новый счет</span>
            </button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Новый счет</ModalTitle>
            </ModalHeader>
            <CreateAccount />
          </ModalContent>
        </Modal>
      </Carousel>
    </Section>
  );
}
