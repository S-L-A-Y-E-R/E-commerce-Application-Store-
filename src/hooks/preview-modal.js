import { create } from "zustand";

const usePreview = create((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({ isOpen: true, data }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreview;