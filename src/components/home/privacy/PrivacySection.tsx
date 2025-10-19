import Question from '@/assets/cards-bg/question.webp'
import Trash from '@/assets/cards-bg/trash.webp'
import Lock from '@/assets/cards-bg/lock.webp'
import Virtual from '@/assets/cards-bg/virtual.webp'
import PrivacyCard from './PrivacyCard'
import { getT } from '@/app/i18n'
import OpenModalButton from '@/components/affiliate/OpenModalButton'

const cards = [
    {
        image: Question.src,
        title: 'Anonymous Spending',
        description:
            'No KYC. No ID. No limits on freedom. Spend up to $5,000/month without submitting personal documents or exposing your identity.',
        size: 'large',
    },
    {
        image: Trash.src,
        title: 'Zero Data Retention',
        description:
            "We can't leak what we don't collect. Off Grid doesn't store or sell your transaction data. Once settled, your history disappears.",
        size: 'small',
    },
    {
        image: Lock.src,
        title: 'Military-Grade Encryption',
        description:
            'Every tap is encrypted end-to-end. From wallet to card to merchant — your data is locked, even from us.',
        size: 'small',
    },
    {
        image: Virtual.src,
        title: 'Dynamic Virtual Cards',
        description:
            'Your numbers, always changing. Generate new virtual cards on demand, giving you rotating credentials to stay ahead of tracking.',
        size: 'large',
    },
]

async function PrivacySection() {
    const { t } = await getT('transition')
    return (
        <section className="w-full overflow-hidden" id="security">
            <div className="wrapper px-4 xl:px-0">
                <div
                    className="mb-[42px] flex flex-col items-center text-center md:mb-[60px]"
                    data-aos="fade-up"
                >
                    <h2 className="section-title lg:!leading-14 mb-[22px] !leading-9">
                        {t('privacy.title.top')} <br />{' '}
                        {t('privacy.title.bottom')}
                    </h2>
                    <p className="section-subtitle max-w-[438px]">
                        {t('privacy.subTitle.gray')}{' '}
                        <span className="text-primary">
                            {t('privacy.subTitle.white')}
                        </span>
                    </p>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 xl:flex xl:flex-wrap">
                    {cards.map((card, idx) => (
                        <PrivacyCard
                            key={idx}
                            idx={idx}
                            imageSrc={card.image}
                            title={t(`privacy.cards.${idx}.title`)}
                            description={t(`privacy.cards.${idx}.subTitle`)}
                            size={card.size as 'large' | 'small'}
                        />
                    ))}
                </div>
                <div className="w-full" data-aos="zoom-in">
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        <span className="text-primary font-medium">
                            {t('privacy.bottom-text.white')}{' '}
                        </span>
                        {t('privacy.bottom-text.gray')}
                    </p>
                    <div className="flex justify-center">
                        <OpenModalButton name="Join the waitlist" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacySection
