import { useController, type FieldValues } from "react-hook-form";
import type { TextInputProps } from "../model";
import { Input } from "./Input";

export function TextInput<T extends FieldValues>({
  children,
  placeholder,
  ...controllerProps
}: TextInputProps<T>) {
  const { field } = useController(controllerProps);
  return (
    <Input autoComplete="off" type="text" placeholder={placeholder} {...field}>
      {children}
    </Input>
  );
}
