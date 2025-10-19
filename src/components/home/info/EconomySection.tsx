'use client'
import Crypto from '@/assets/cards-bg/crypto.webp'
import CryptoSm from '@/assets/cards-bg/crypto-sm.webp'
import Digital from '@/assets/cards-bg/digital.webp'
import Founders from '@/assets/cards-bg/founders.webp'
import EconomyCard from './EconomyCard'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import ScrollButton from './ScrollButton'
import { useT } from '@/app/i18n/client'

const cards = [
    {
        smallImage: CryptoSm.src,
        image: Crypto.src,
    },
    {
        image: Digital.src,
    },
    {
        image: Founders.src,
    },
]

function EconomySection() {
    const { t } = useT('transition')
    const [isEnabled, setIsEnabled] = useState(false)

    useEffect(() => {
        const checkWidth = () => setIsEnabled(window.innerWidth < 1280)
        checkWidth()
        window.addEventListener('resize', checkWidth)
        return () => window.removeEventListener('resize', checkWidth)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
    })

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return

        emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (!emblaApi) return

        emblaApi.scrollNext()
    }, [emblaApi])

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        updateScrollButtons()
        emblaApi.on('select', updateScrollButtons)
        emblaApi.on('reInit', updateScrollButtons)
    }, [emblaApi, updateScrollButtons])

    return (
        <section className="relative z-[0] w-full overflow-x-hidden pb-8 xl:pb-[120px]">
            <div className="wrapper">
                <div
                    className="mb-[42px] flex flex-col px-4 text-left sm:items-center sm:text-center md:mb-[84px] 2xl:px-0"
                    data-aos="fade-up"
                >
                    <h2 className="section-title mb-[22px]">
                        {t('economy.title.top')} <br />{' '}
                        {t('economy.title.bottom')}
                    </h2>
                    <p className="section-subtitle max-w-[360px] sm:max-w-[510px]">
                        {t('economy.subTitle')}
                    </p>
                </div>
                <div
                    className="w-full overflow-hidden px-4 xl:px-0"
                    ref={isEnabled ? emblaRef : null}
                >
                    <div className="flex gap-4 xl:justify-between">
                        {cards.map((card, idx) => (
                            <EconomyCard
                                key={idx}
                                imageSrc={card.image}
                                title={t(`economy.cards.${idx}.title`)}
                                description={t(`economy.cards.${idx}.subTitle`)}
                                smallImage={card.smallImage}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="mt-[42px] flex w-full items-center justify-end gap-2 px-4 xl:hidden"
                    data-aos="fade-left"
                >
                    <ScrollButton
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        variant="left"
                    />
                    <ScrollButton
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        variant="right"
                    />
                </div>
            </div>
        </section>
    )
}

export default EconomySection
