'use client'
import StyledLink from '@/components/ui/StyledLink'
import ScrollButton from '../info/ScrollButton'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import Gradient from '@/assets/gradient.png'
import Image from 'next/image'
import MembershipCard from './MembershipCard'
import StandardCard from '@/assets/cards-bg/standard-cart.webp'
import PlatinumCard from '@/assets/cards-bg/platinum-card.webp'
import EliteCard from '@/assets/cards-bg/elite-card.webp'
import SwitchButton from '@/components/ui/SwitchButton'
import { useT } from '@/app/i18n/client'

const cards = [
    {
        imageSrc: StandardCard.src,
        monthPrice: '0',
        yearPrice: '0',
        title: 'Shadow',
        list: [
            'Spend up to $4,000/month with no KYC.',
            '1% cashback on every purchase.',
            '+0.5% extra rewards on transactions over $1,000.',
        ],
        linkHref: '/',
        linkName: 'Get Free, Instantly',
    },
    {
        imageSrc: PlatinumCard.src,
        monthPrice: '99',
        yearPrice: '1099',
        title: 'Phantom',
        list: [
            '2% cashback on every purchase.',
            'Earn yield automatically on your cashback balance.',
            '5% back at select premium retailers.',
            'Extra rewards for holding crypto balances.',
            'For serious movers who want every dollar to work harder, silently.',
        ],
        linkHref: '/',
    },
    {
        imageSrc: EliteCard.src,
        monthPrice: '299',
        yearPrice: '3499',
        title: 'Ghost',
        list: [
            '3% cashback on every purchase.',
            'Exclusive merchant partnerships + insider discounts.',
            'Auto-compound rewards in DeFi protocols',
            'Access to private crypto events + curated meetups.',
            'Concierge service + custom card design.',
            'The ultimate Offgrid status — built for founders, whales, and those who never play by their rules.',
        ],
        linkHref: '/',
    },
]

function MembershipSection() {
    const [isEnabled, setIsEnabled] = useState(false)
    const [per, setPer] = useState<'mth' | 'year'>('mth')
    const { t } = useT('transition')

    useEffect(() => {
        const checkWidth = () => setIsEnabled(window.innerWidth < 1024)
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

    const handleSwitch = () => {
        if (per === 'mth') {
            setPer('year')
        } else {
            setPer('mth')
        }
    }

    return (
        <section
            className="wrapper relative -mt-1 w-full overflow-hidden bg-cover bg-top bg-no-repeat py-20 lg:py-[120px]"
            id="affiliate"
        >
            <Image
                src="/assets/membership-light-sm.webp"
                width={399}
                height={673}
                className={`absolute left-1/2 top-0 z-[1] min-h-[646px] -translate-x-1/2 lg:hidden`}
                alt=""
                quality={100}
                data-aos="zoom-out"
            />
            <Image
                src="/assets/membership-light.png"
                width={1239}
                height={673}
                className={`absolute left-1/2 top-0 z-[1] hidden min-h-[673px] -translate-x-1/2 lg:block`}
                alt=""
                quality={100}
                data-aos="zoom-out"
            />

            <div className="relative z-[2]">
                <div
                    className="mb-[42px] flex flex-col items-center px-4 text-center md:mb-[60px] xl:px-0"
                    data-aos="fade-up"
                >
                    <h2 className="section-title mb-[22px]">
                        {t('membership.title.top')} <br />{' '}
                        {t('membership.title.bottom')}
                    </h2>
                    <p className="section-subtitle max-w-[448px]">
                        {t('membership.subTitle')}
                    </p>
                </div>
                <div
                    className="mb-[26px] mt-8 flex items-center justify-center gap-5 px-4 font-medium md:mb-[46px] md:mt-[60px]"
                    data-aos="zoom-in"
                >
                    <p
                        className={`${per === 'mth' ? 'text-primary' : 'text-primary/70'} transition-colors duration-300`}
                    >
                        {t('membership.monthly')}
                    </p>
                    <SwitchButton
                        isMonth={per === 'mth'}
                        onClick={handleSwitch}
                    />

                    <p
                        className={`${per === 'year' ? 'text-primary' : 'text-primary/70'} transition-colors duration-300`}
                    >
                        {t('membership.yearly')}
                    </p>
                </div>
                <div className="relative pt-2" data-aos="zoom-in">
                    <Image
                        src={Gradient}
                        width={Gradient.width}
                        height={Gradient.height}
                        className={`absolute -top-1.5 left-1/2 -translate-x-1/2`}
                        alt=""
                    />

                    <div
                        className="bg-blackBg relative z-[2] mt-2 w-full overflow-hidden px-4 xl:px-0"
                        ref={isEnabled ? emblaRef : null}
                    >
                        <div className="flex gap-4 lg:justify-between">
                            {cards.map((card, index) => (
                                <MembershipCard
                                    key={index}
                                    index={index}
                                    imageSrc={card.imageSrc}
                                    list={card.list}
                                    per={per}
                                    monthPrice={card.monthPrice}
                                    yearPrice={card.yearPrice}
                                    title={card.title}
                                    linkName={card.linkName}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className="mt-[42px] flex w-full items-center justify-end gap-2 px-4 lg:hidden"
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
                <div
                    className="hidden w-full px-4 lg:block xl:px-0"
                    data-aos="zoom-in"
                >
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        {t('membership.bottom-text.gray')}{' '}
                        <span className="text-primary font-medium">
                            {t('membership.bottom-text.white')}
                        </span>
                    </p>
                    <div className="flex justify-center">
                        <StyledLink
                            name="Explore the Affiliate Program"
                            href="/en/affiliate"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MembershipSection
