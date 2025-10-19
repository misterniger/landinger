import { getT } from '@/app/i18n'
import Crypto from '@/assets/cards-bg/join-first-lg.png'
import Digital from '@/assets/cards-bg/join-second-lg.png'

import Founders from '@/assets/cards-bg/join-third-lg.png'
import JoinCard from './JoinCard'

const cards = [
    {
        image: Crypto.src,
    },
    {
        image: Digital.src,
    },
    {
        image: Founders.src,
    },
]

async function JoinSection() {
    const { t } = await getT('affiliate')
    return (
        <section className="pt-[80px] lg:pt-[120px]">
            <div className="wrapper">
                <h2 className="section-title mb-10 text-center md:mb-[68px]">
                    Join today
                </h2>
                <div className="flex flex-col items-center gap-4 px-4 lg:flex-row lg:justify-between">
                    {cards.map((card, idx) => (
                        <JoinCard
                            key={idx}
                            imageSrc={card.image}
                            title={t(`join.cards.${idx}.title`)}
                            description={t(`join.cards.${idx}.subTitle`)}
                            idx={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JoinSection
