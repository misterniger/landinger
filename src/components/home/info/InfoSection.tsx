import InfoCard from './InfoCard'
import Apple from '@/assets/cards-bg/apple.webp'
import Kyc from '@/assets/cards-bg/kyc.webp'
import Instant from '@/assets/cards-bg/instant.webp'
import Dashboard from '@/assets/cards-bg/dashboard.webp'
import StyledLinkBox from '@/components/ui/StyledLinkBox'
import { getT } from '@/app/i18n'

const cards = [
    {
        image: Apple.src,
    },
    {
        image: Kyc.src,
    },
    {
        image: Instant.src,
    },
    {
        image: Dashboard.src,
    },
]

async function InfoSection() {
    const { t } = await getT('transition')
    return (
        <section className="overflow-hidden py-20 lg:py-[120px]" id="how-works">
            <div className="wrapper px-4 xl:px-0">
                <div
                    className="mb-[42px] flex flex-col items-center text-center md:mb-[60px]"
                    data-aos="fade-up"
                >
                    <h2 className="section-title mb-[22px]">
                        {t('how-works.title')}
                    </h2>
                    <p className="section-subtitle max-w-[438px]">
                        {t('how-works.subTitle')}
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
                    {cards.map((card, idx) => (
                        <InfoCard
                            key={idx}
                            idx={idx}
                            imageSrc={card.image}
                            title={t(`how-works.cards.${idx}.title`)}
                            description={t(`how-works.cards.${idx}.subTitle`)}
                        />
                    ))}
                </div>
                <div data-aos="zoom-in">
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        {t('how-works.bottom-text.gray')}{' '}
                        <span className="text-primary font-medium">
                            {t('how-works.bottom-text.white')}
                        </span>
                    </p>
                    <StyledLinkBox />
                </div>
            </div>
        </section>
    )
}

export default InfoSection
