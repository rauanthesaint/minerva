import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from "@/shared/Modal";
import type { FC, ReactNode } from "react";
import { Input, InputAddon } from "@/shared/Input";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { createContext, useContext, useMemo, useState } from "react";
import { usePopover } from "../Popover";
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form";
import styles from "./Select.module.scss";

type SelectOption = {
  key: string;
  title: string;
};

type SelectContextType = {
  value: SelectOption | null;
  setValue: (v: SelectOption) => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export const useSelect = () => {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error("useSelect must be used inside Select");
  return ctx;
};

export const UncontrolledSelect: FC<{
  value?: string;
  onChange?: (v: string) => void;
  children: ReactNode;
}> = ({ value: controlledValue, onChange, children }) => {
  const [options, setOptions] = useState<Map<string, SelectOption>>(new Map());
  const [selected, setSelected] = useState<SelectOption | null>(null);

  const handleChange = (opt: SelectOption) => {
    onChange?.(opt.key);
    setSelected(opt);
  };

  useMemo(() => {
    if (controlledValue && options.has(controlledValue)) {
      setSelected(options.get(controlledValue)!);
    }
  }, [controlledValue, options]);

  const ctx = useMemo(
    () => ({
      value: selected,
      setValue: handleChange,
      registerOption: (opt: SelectOption) => {
        setOptions((prev) => new Map(prev).set(opt.key, opt));
      },
    }),
    [selected],
  );

  return (
    <SelectContext.Provider value={ctx as any}>
      <Modal>{children}</Modal>
    </SelectContext.Provider>
  );
};

export function Select<T extends FieldValues>({
  children,
  ...controllerProps
}: { children: ReactNode } & UseControllerProps<T>) {
  const { field } = useController(controllerProps);
  return <UncontrolledSelect {...field}>{children}</UncontrolledSelect>;
}

export const SelectTrigger: FC<{ placeholder?: string }> = ({ placeholder }) => {
  const { value } = useSelect();
  return (
    <ModalTrigger>
      <Input placeholder={placeholder} readOnly value={value?.title ?? ""}>
        <InputAddon align="end">
          <HugeiconsIcon icon={ArrowDown01Icon} />
        </InputAddon>
      </Input>
    </ModalTrigger>
  );
};

export const SelectContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ModalContent className={styles.SelectContent}>
      <ModalHeader>
        <ModalTitle>Выберите одно из предложенных значений</ModalTitle>
      </ModalHeader>
      <ul className={styles.SelectItemList}>{children}</ul>
    </ModalContent>
  );
};

export const SelectItem: FC<{ value: string; children: string }> = ({ value, children }) => {
  const { setValue, value: currentValue } = useSelect();
  const { close } = usePopover();
  const isSelected = value === currentValue?.key;

  return (
    <li
      className={styles.SelectItem}
      onClick={() => {
        setValue({ key: value, title: children });
        close();
      }}
      data-selected={isSelected}
    >
      {children}
      {isSelected && <HugeiconsIcon icon={Tick02Icon} size={20} />}
    </li>
  );
};
