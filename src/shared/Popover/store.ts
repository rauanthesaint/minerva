import { createLocalContext, createLocalStore, type LocalStoreAPI } from "@/shared/local-context";

type PopoverStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

type PopoverStoreAPI = LocalStoreAPI<PopoverStore>;

function createPopoverStore(defaultOpen?: boolean) {
  return createLocalStore<PopoverStore>((set) => ({
    isOpen: defaultOpen,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  }));
}

const { useLocalStore: usePopover, LocalContext: PopoverContext } =
  createLocalContext<PopoverStore>();

export { type PopoverStoreAPI, createPopoverStore, usePopover, PopoverContext };
