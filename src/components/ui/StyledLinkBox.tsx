'use client'
import { useT } from '@/app/i18n/client'
import StyledLink from './StyledLink'
import useModalStore from '@/stores/modalStore'

function StyledLinkBox({ revolution = false }: { revolution?: boolean }) {
    const { t } = useT('transition')
    const setOpenModal = useModalStore((state) => state.setOpenModal)
    return (
        <div className="relative z-20 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <StyledLink
                name={
                    revolution
                        ? t('footer.ctaLinkName')
                        : t('header.links.join')
                }
                borderPosition="top"
                btn
                onClick={() => setOpenModal('waitlist-modal')}
            />
            <StyledLink
                name={t('header.links.how-works')}
                variant="dark"
                borderPosition="bottom"
                btn
                scroll={false}
                onClick={() => {
                    const el = document.querySelector('#how-works')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
            />
        </div>
    )
}

export default StyledLinkBox
