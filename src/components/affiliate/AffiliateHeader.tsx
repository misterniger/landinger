import Image from 'next/image'
import { getT } from '@/app/i18n'
import OpenModalButton from './OpenModalButton'

async function AffiliateHeader() {
    const { t } = await getT('affiliate')
    return (
        <header className="relative max-h-[900px] min-h-[794px] w-full overflow-hidden lg:min-h-[900px]">
            <Image
                alt="light"
                width={514}
                height={678}
                className="pointer-events-none absolute left-1/2 top-0 z-[41] max-h-[650px] min-w-[540px] max-w-[540px] -translate-x-[18%] md:h-full md:max-h-fit md:w-[678px] md:min-w-[514px] md:max-w-[678px]"
                priority
                fetchPriority="high"
                quality={100}
                src="/assets/hero-sub.png"
            />

            <div className="relative z-[1] mx-auto flex w-full max-w-[583px] flex-col px-4 pt-[292px] text-center sm:px-0 md:pt-[359px]">
                <h1 className="font-canela xs:text-[38px] mb-7 text-nowrap text-3xl leading-[100%] md:text-[64px] md:leading-[100%]">
                    {t('header.title.top')} <br />{' '}
                    {t('header.title.bottom')}{' '}
                </h1>
                <p className="text-primary/70 mx-auto mb-8 max-w-[424px] leading-[130%] md:mb-12">
                    {t('header.subTitle')}
                </p>
                <div className="relative z-20 flex justify-center">
                    <OpenModalButton name="Get Started" />
                </div>
            </div>
        </header>
    )
}

export default AffiliateHeader
