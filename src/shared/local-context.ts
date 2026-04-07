import { createContext, useContext } from "react";
import { create, useStore, type StoreApi } from "zustand";

type LocalStorage = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
};

type LocalStorageApi<T extends LocalStorage = LocalStorage> = StoreApi<T>;

export function createLocalStorage<T extends LocalStorage>(
  extendStorage?: (
    set: (partial: Partial<T>) => void,
    get: () => T,
  ) => Partial<T>,
) {
  return create<T>(
    (set, get) =>
      ({
        isOpen: false,
        open: () => set({ isOpen: true } as Partial<T>),
        close: () => set({ isOpen: false } as Partial<T>),
        toggle: () => set((state) => ({ isOpen: !state.isOpen }) as Partial<T>),
        ...extendStorage?.(set, get),
      }) as T,
  );
}

export function createLocalContext<T extends LocalStorage>() {
  const Context = createContext<LocalStorageApi<T> | null>(null);

  function useLocalStorage(): T {
    const storage = useContext(Context);
    if (!storage) throw new Error("Storage hook must be used within provider");
    return useStore(storage);
  }

  return { Context, useLocalStorage };
}
