import { Section, SectionTitle } from "@/shared/Section";
import { AccountsCard } from "@/widgets/AccountsCard";

export function AccountPage() {
  return (
    <main>
      <AccountsCard />
      <Section>
        <SectionTitle>Транзакции по счету</SectionTitle>
      </Section>
    </main>
  );
}
