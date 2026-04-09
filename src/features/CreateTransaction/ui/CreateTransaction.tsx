import { Button } from "@/shared/Button";
import { Field, FieldLabel } from "@/shared/Field";
import { InputAddon, NumberInput } from "@/shared/Input";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";
import styles from "./CreateTransaction.module.scss";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/Select";

export function CreateTransaction() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className={styles.CreateTransaction}>
      <Field>
        <FieldLabel>Счет</FieldLabel>
        <Select control={control} name="accountId">
          <SelectTrigger placeholder="Выберите счет" />
          <SelectContent>
            <SelectItem value="1">Very Long Account Name</SelectItem>
            <SelectItem value="2">Kaspi</SelectItem>
            <SelectItem value="3">Jusan</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel>Сумма</FieldLabel>
        <NumberInput control={control} name="amount" placeholder="0.00">
          <InputAddon>
            <span className="muted">&#8376;</span>
          </InputAddon>
        </NumberInput>
      </Field>

      <Button type="submit">
        <span>Создать транзакцию</span>
        <HugeiconsIcon icon={ArrowRight02Icon} />
      </Button>
    </form>
  );
}
