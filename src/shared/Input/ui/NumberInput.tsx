import { useController, type FieldValues } from "react-hook-form";
import type { NumberInputProps } from "../model";
import styles from "./Input.module.scss";
import { Input } from "./Input";
import { type ChangeEvent, type FocusEvent } from "react";

function clearValue(value: string): string {
  let result = value.replace(/[^0-9.\-]/g, "");

  const isNegative = result.startsWith("-");
  result = result.replace(/-/g, "");
  if (isNegative) result = "-" + result;

  const parts = result.split(".");
  if (parts.length > 1) {
    result = parts[0] + "." + parts.slice(1).join("");
  }

  return result;
}

export function NumberInput<T extends FieldValues>({
  children,
  placeholder,
  ...controllerProps
}: NumberInputProps<T>) {
  const { field } = useController(controllerProps);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = clearValue(event.target.value);
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
      inputMode="numeric"
    >
      {children}
    </Input>
  );
}
