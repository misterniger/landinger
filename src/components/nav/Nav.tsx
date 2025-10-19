import { useT } from '@/app/i18n/client'
import Logo from '../icons/Logo'
import StyledLink from '../ui/StyledLink'
import Hamburger from './Hamburger'
import useModalStore from '@/stores/modalStore'

export interface NavProps {
    toogleNav: () => void
    isExpanded: boolean
    children: React.ReactNode
}

function Nav({ toogleNav, isExpanded, children }: NavProps) {
    const { t } = useT('transition')
    const setOpenModal = useModalStore(state=>state.setOpenModal)

    return (
        <div className="relative h-14 w-full md:flex md:items-center md:justify-between md:gap-2">
            <div className="flex items-center justify-between">
                <Logo />
                <Hamburger onClick={toogleNav} isExpanded={isExpanded} />
            </div>
            <div
                className={`text-primary bg-whiteBg sticky z-40 flex h-full w-full flex-col gap-8 py-6 transition-all duration-300 md:w-fit md:flex-row md:items-center md:justify-center md:py-0 ${isExpanded ? '-translate-x-0 opacity-100' : '-translate-x-[120%] opacity-0 md:-translate-x-0 md:opacity-100'} md:gap-2`}
            >
                {children}
                <div className="md:hidden">
                    <StyledLink name={t('header.links.join')} btn onClick={()=>setOpenModal('waitlist-modal')} />
                </div>
            </div>
            <div className="hidden md:block">
                <StyledLink name={t('header.links.join')} btn onClick={()=>setOpenModal('waitlist-modal')} />
            </div>
        </div>
    )
}

export default Nav
