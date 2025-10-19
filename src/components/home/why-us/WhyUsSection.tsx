import Wallet from '@/assets/wy-us-wallet.webp'
import Lighting from '@/assets/lighting.png'
import StyledLinkBox from '@/components/ui/StyledLinkBox'
import Image from 'next/image'
import WhyUsTable from './WhyUsTable'
import { getT } from '@/app/i18n'
async function WhyUsSection() {
    const { t } = await getT('transition')
    return (
        <section className="relative z-[1] mx-auto w-full max-w-[1920px] overflow-x-clip pb-20 lg:pb-[120px]">
            <Image
                src={Lighting}
                alt=""
                width={Lighting.width}
                height={Lighting.height}
                className="!pointer-events-none absolute -top-[100px] left-0 max-h-[600px] w-full max-w-[350px] sm:-top-[250px] sm:max-w-[600px] lg:-top-[280px] lg:max-h-[800px] lg:max-w-[800px] xl:-top-[450px] xl:max-h-[1200px] xl:max-w-[1200px] 2xl:-top-[550px] 2xl:max-w-[1300px]"
                quality={100}
                data-aos="fade-right"
            />

            <Image
                src={Wallet}
                height={426}
                width={604}
                alt="wallet"
                className="absolute left-1/2 top-0 z-10 min-h-[200px] max-w-[284px] -translate-x-1/2 lg:max-w-full lg:translate-x-[calc(-50%-20px)]"
                quality={100}
                data-aos="zoom-in"
            />

            <div className="wrapper relative z-20 pt-[137px] lg:pt-[305px]">
                <div
                    className="mb-8 flex flex-col items-center px-4 text-center md:mb-[80px] xl:px-0"
                    data-aos="fade-up"
                >
                    <h2 className="section-title mb-[14px] flex items-start gap-2 text-nowrap md:mb-[22px] md:items-center lg:gap-[7px]">
                        {/* <MiniCard whyUs />  */}
                        {t('why-us.title.top')} <br />{' '}
                        {t('why-us.title.bottom')}
                    </h2>
                    <p className="section-subtitle max-w-[462px]">
                        {t('why-us.subTitle')}
                    </p>
                </div>
                <WhyUsTable />
                <div data-aos="zoom-in" className="px-4">
                    <p className="section-subtitle mb-6 mt-8 text-center md:mb-8 lg:mt-[60px]">
                        {t('why-us.bottom-text.gray')}{' '}
                        <span className="text-primary font-medium">
                            {t('why-us.bottom-text.white')}
                        </span>
                    </p>
                    <StyledLinkBox />
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection
