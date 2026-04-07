import { createLocalContext, createLocalStorage } from "@/shared/local-context";

const { Context: ModalContext, useLocalStorage: useModal } =
  createLocalContext();

export const createModalStorage = () => createLocalStorage();
export { ModalContext, useModal };
