import Image from 'next/image'
import FooterLists from './FooterLists'
import FooterInfo from './FooterInfo'
import { getT } from '@/app/i18n'
import StyledLinkBox from '../ui/StyledLinkBox'

async function Footer({
    lng,
    isTitle = false,
}: {
    lng: string
    isTitle?: boolean
}) {
    const { t } = await getT('transition')
    return (
        <footer className="relative overflow-hidden">
            {isTitle && (
                <>
                    <div className="mb-8 px-4 text-center" data-aos="fade-up">
                        <h2 className="section-title pb-[22px]">
                            {t('footer.title.top')} <br />{' '}
                            {t('footer.title.bottom')}
                        </h2>
                        <p className="section-subtitle">
                            {t('footer.subTitle.top')} <br />{' '}
                            <span className="lg:text-primary/90 lg:font-medium">
                                {' '}
                                {t('footer.subTitle.bottom')}
                            </span>
                        </p>
                    </div>
                    <div className="px-4" data-aos="zoom-in">
                        <StyledLinkBox revolution />
                    </div>
                </>
            )}
            <div className="wrapper relative -mt-2 flex flex-col justify-end px-4 pt-[260px] sm:-mt-3 sm:aspect-[1170/780] md:max-h-[780px] xl:px-0">
                <Image
                    src="/assets/footer-hero-sm.png"
                    width={439}
                    height={390}
                    alt=""
                    className="pointer-events-none absolute left-2 top-0 z-10 max-h-[780px] w-full object-contain md:hidden"
                    quality={100}
                    data-aos="zoom-in"
                />
                <Image
                    src="/assets/footer-hero.png"
                    width={1170}
                    height={780}
                    alt=""
                    className="pointer-events-none absolute -right-6 top-0 z-10 hidden max-h-[780px] w-full max-w-[1170px] object-contain md:block"
                    quality={100}
                    data-aos="zoom-out"
                />
                <div className="relative z-20 flex flex-col gap-12 border-b border-white/15 pb-12 md:mb-[13px] md:flex-row md:items-center md:gap-3 md:pb-10 xl:gap-[100px]">
                    <FooterInfo />
                    <FooterLists lng={lng} />
                </div>
            </div>
            <p className="text-primary/70 px-4 pb-2 pt-5 text-center text-xs leading-[130%] md:pb-5 md:pt-[7px]">
                {t('footer.terms')}
            </p>
        </footer>
    )
}

export default Footer
