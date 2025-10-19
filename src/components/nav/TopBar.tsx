import { useT } from '@/app/i18n/client'

function TopBar() {
    const { t } = useT('transition')
    return (
        <div className="bg-dark w-full text-xs font-medium leading-[130%] backdrop-blur-[18px] lg:text-sm">
            <p className="px-2 py-5 text-center lg:py-4">{t('nav.top')}</p>
        </div>
    )
}

export default TopBar
