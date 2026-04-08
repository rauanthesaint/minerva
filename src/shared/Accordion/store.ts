import { createContext, useContext } from "react";
import { createStore, useStore } from "zustand";

type AccordionStore = {
  value: string | undefined;
  setValue: (value: string) => void;
  clearValue: () => void;
};

export const createAccordionStore = (defaultValue?: string) =>
  createStore<AccordionStore>((set) => ({
    value: defaultValue,
    setValue: (value) =>
      set((state) => ({
        value: state.value === value ? undefined : value,
      })),
    clearValue: () => set({ value: undefined }),
  }));

export type AccordionStoreAPI = ReturnType<typeof createAccordionStore>;

export const AccordionStoreContext = createContext<AccordionStoreAPI | null>(null);

export function useAccordion(): AccordionStore {
  const store = useContext(AccordionStoreContext);
  if (!store) throw new Error("useAccordion must be used within AccordionStoreProvider");
  return useStore(store);
}
