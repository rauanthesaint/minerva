import { AccountsList } from "@/widgets";
import { Section, SectionTitle } from "@/shared/Section";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "@/shared/Accordion";

export function AccountsPage() {
  return (
    <main>
      <AccountsList />
      <Section>
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>
        <Accordion>
          <AccordionItem value="question-1">
            <AccordionItemTrigger>
              {/* Что такое счет? */}
              Далеко-далеко за словесными горами в стране.
            </AccordionItemTrigger>
            <AccordionItemContent>
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
              Использовало текст ты лучше путь буквоград пояс диких запятой имени возвращайся речью,
              над его жизни толку пор, большой грустный? Раз.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionItemTrigger>Могу ли я пополнить счет?</AccordionItemTrigger>
            <AccordionItemContent>
              Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты.
              Переписывается алфавит, свое семантика силуэт пор собрал предложения своего страну
              если толку! До парадигматическая языком города власти переписали меня алфавит.
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionItemTrigger>Могу ли я пополнить счет?</AccordionItemTrigger>
            <AccordionItemContent>
              Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты.
              Переписывается алфавит, свое семантика силуэт пор собрал предложения своего страну
              если толку! До парадигматическая языком города власти переписали меня алфавит.
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
      </Section>
    </main>
  );
}
