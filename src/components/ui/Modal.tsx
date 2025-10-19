'use client'
import useClickOutside from '@/_hooks/useClickOutside'
import useModalStore from '@/stores/modalStore'
import { RefObject, useEffect } from 'react'

function Modal({
    children,
    modalRef,
    reset,
}: {
    children: React.ReactNode
    modalRef: RefObject<HTMLDivElement | null> | null
    
    reset?: () => void
   
}) {
    const closeModal = useModalStore((state) => state.closeModal)
    useClickOutside(modalRef, closeModal)

    useEffect(() => {
       
        document.body.classList.add('body--modal-open')
        document.documentElement.classList.add('body--modal-open')
        return () => {
            document.body.classList.remove('body--modal-open')
            document.documentElement.classList.remove('body--modal-open')
        }
    }, )

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                if (reset) reset()
                closeModal()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [closeModal, reset])

    return (
        <>
           
                <div
                    className={`bg-dark/40 fixed left-0 top-0 z-[100] flex h-dvh w-full items-end justify-center overflow-hidden backdrop-blur-sm lg:items-center`}
                >
                    <div
                        className={`scrollbar-none max-h-dvh w-full overflow-y-auto sm:w-fit animate-visible`}
                        ref={modalRef}
                    >
                        {children}
                    </div>
                </div>
            
        </>
    )
}

export default Modal
