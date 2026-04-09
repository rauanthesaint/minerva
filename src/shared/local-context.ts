import { createContext, useContext } from "react";
import { type StoreApi, createStore, useStore } from "zustand";

export type LocalStoreAPI<T extends object> = StoreApi<T>;

export function createLocalStore<T extends object>(
  state: (
    set: (partial: T | Partial<T> | ((state: T) => T | Partial<T>)) => void,
    get: () => T,
  ) => Partial<T>,
) {
  return createStore<T>((set, get) => state(set, get) as T);
}

export function createLocalContext<T extends object>() {
  const LocalContext = createContext<LocalStoreAPI<T> | null>(null);

  function useLocalStore(): T {
    const store = useContext(LocalContext);
    if (!store) throw new Error("Store hook must be used within provider");
    return useStore(store);
  }

  return { LocalContext, useLocalStore };
}
