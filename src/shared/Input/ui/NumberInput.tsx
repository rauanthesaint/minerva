import { useController, type FieldValues } from "react-hook-form";
import type { NumberInputProps } from "../model";
import styles from "./Input.module.scss";
import { Input } from "./Input";
import { type ChangeEvent, type FocusEvent } from "react";

export function NumberInput<T extends FieldValues>({
  children,
  placeholder,
  ...controllerProps
}: NumberInputProps<T>) {
  const { field } = useController(controllerProps);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    field.onChange(value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    field.onChange(Number(value));
  };

  return (
    <Input
      type="text"
      className={styles.NumberInput}
      placeholder={placeholder}
      {...field}
      onChange={onChange}
      onBlur={onBlur}
    >
      {children}
    </Input>
  );
}
