import { type CreateAccountDTO, CreateAccountSchema } from "@/entities/Account/model";
import { Button } from "@/shared/Button";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/shared/Field";
import { InputAddon, NumberInput, TextInput } from "@/shared/Input";
import { resolver } from "@/shared/resolver";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./CreateAccount.module.scss";

export function CreateAccount() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountDTO>({
    mode: "onChange",
    defaultValues: {
      name: "",
      balance: 0,
    },
    resolver: resolver(CreateAccountSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit = (data: CreateAccountDTO) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form className={styles.CreateAccount} onSubmit={handleSubmit(onSubmit)}>
      {/* <div className={styles.block}> */}
      <Field>
        <FieldLabel>Название</FieldLabel>
        <TextInput control={control} name="name" placeholder="Kaspi, Freedom, Halyk" />
        <FieldDescription>
          Лучше всего подойдет название банка или назначение счета
        </FieldDescription>
        <FieldError>{errors.name?.type}</FieldError>
      </Field>

      <Field>
        <FieldLabel>Баланс</FieldLabel>
        <NumberInput control={control} name="balance" placeholder="0.00">
          <InputAddon>
            <span className="muted">&#8376;</span>
          </InputAddon>
        </NumberInput>
        <FieldError>{errors.balance?.type}</FieldError>
      </Field>
      {/* </div> */}
      <Button isLoading={isSubmitting} type="submit">
        <span>Создать новый счет</span>
        <HugeiconsIcon icon={ArrowRight02Icon} />
      </Button>
    </form>
  );
}
