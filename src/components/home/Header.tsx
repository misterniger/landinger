import Image from 'next/image'
import StyledLinkBox from '../ui/StyledLinkBox'
import MiniCard from '../ui/MiniCard'
import HeaderLogos from './HeaderLogos'
import { getT } from '@/app/i18n'
async function Header() {
    const { t } = await getT('transition')
    return (
        <header className="relative max-h-[1022px] min-h-[794px] w-full overflow-hidden lg:min-h-[1022px]">
            <Image
                src="/assets/hero-bg.webp"
                fill
                alt=""
                className="object-cover object-center 2xl:object-bottom"
                quality={100}
                priority
            />
            <Image
                alt="Off Grid card"
                width={809}
                height={1071}
                className="pointer-events-none absolute -top-[212px] left-1/2 z-[41] max-h-[650px] min-w-[500px] max-w-[500px] -translate-x-1/3 md:-top-[490px] md:h-auto md:max-h-fit md:max-w-full"
                priority
                fetchPriority="high"
                quality={100}
                src="/assets/card.png"
            />

            <div className="relative z-[1] mx-auto flex w-full max-w-[583px] flex-col px-4 pt-[390px] text-center sm:px-0 md:pt-[500px]">
                <h1 className="font-canela xs:text-[38px] mb-7 text-nowrap text-3xl leading-[100%] md:text-[64px] md:leading-[100%]">
                    {t('header.title.top')} <br />{' '}
                    <span className="mt-2.5 inline-flex items-end gap-2">
                        {t('header.title.bottom-left')} <MiniCard />{' '}
                        {t('header.title.bottom-right')}
                    </span>
                </h1>
                <p className="text-primary/70 mx-auto mb-8 max-w-[367px] leading-[130%] md:mb-12">
                    {t('header.subTitle')}
                </p>
                <StyledLinkBox />
            </div>
            <HeaderLogos />
        </header>
    )
}

export default Header
