import { CreateTransaction } from "@/features";
import { Button } from "@/shared/Button";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from "@/shared/Modal";
import { Section, SectionTitle } from "@/shared/Section";
import { AccountsCard } from "@/widgets/AccountsCard";
import { AddInvoiceIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function AccountPage() {
  return (
    <main>
      <AccountsCard />
      <Section>
        <SectionTitle>Транзакции по счету</SectionTitle>
        <Modal>
          <ModalTrigger>
            <Button>
              <HugeiconsIcon icon={AddInvoiceIcon} />
              <span>Добавить транзакцию</span>
            </Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Новая транзакция</ModalTitle>
            </ModalHeader>
            <CreateTransaction />
          </ModalContent>
        </Modal>
      </Section>
    </main>
  );
}
