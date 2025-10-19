import { create } from 'zustand'

type ModalStore = {
    openModal: 'waitlist-modal' | null
    setOpenModal: (modalType: 'waitlist-modal' | null) => void
    closeModal: () => void
}

const useModalStore = create<ModalStore>()((set) => ({
    openModal: null,
    setOpenModal: (modalType) => set({ openModal: modalType }),
    closeModal: () => set({ openModal: null }),
}))

export default useModalStore
