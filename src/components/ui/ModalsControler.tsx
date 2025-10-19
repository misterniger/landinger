'use client'

import useModalStore from '@/stores/modalStore'
import dynamic from 'next/dynamic'


const WaitlistForm = dynamic(() => import('./WaitlistForm'))

function ModalsControler() {
    const openModal = useModalStore((state) => state.openModal)

    const modalMap: Record<string, React.ReactElement> = {
        'waitlist-modal': <WaitlistForm />,
       
    }

    return typeof openModal === 'string' ? modalMap[openModal] || null : null
}

export default ModalsControler
