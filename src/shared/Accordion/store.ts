import { createLocalContext, createLocalStore, type LocalStoreAPI } from "../local-context";

type AccordionStore = {
  value: string | undefined;
  setValue: (value: string) => void;
  clearValue: () => void;
};

export type AccordionStoreAPI = LocalStoreAPI<AccordionStore>;

export const createAccordionStore = (defaultValue?: string) =>
  createLocalStore<AccordionStore>((set) => ({
    value: defaultValue,
    setValue: (value) =>
      set((state) => ({
        value: state.value === value ? undefined : value,
      })),
    clearValue: () => set({ value: undefined }),
  }));

export const { useLocalStore: useAccordion, LocalContext: AccordionContext } =
  createLocalContext<AccordionStore>();
