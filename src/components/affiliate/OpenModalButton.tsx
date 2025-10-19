'use client'

import useModalStore from '@/stores/modalStore'
import StyledLink from '../ui/StyledLink'

function OpenModalButton({ name }: { name: string }) {
    const setOpenModal = useModalStore((state) => state.setOpenModal)
    return (
        <StyledLink
            name={name}
            borderPosition="top"
            btn
            onClick={() => setOpenModal('waitlist-modal')}
        />
    )
}

export default OpenModalButton
