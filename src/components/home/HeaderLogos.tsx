'use client'
import Axiom from '@/assets/logos/axiom.svg'
import Solana from '@/assets/logos/solana.svg'
import Jupiter from '@/assets/logos/jupiter.svg'
import DexScreener from '@/assets/logos/dexscreener.svg'
import Binance from '@/assets/logos/binance.svg'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useT } from '@/app/i18n/client'

const logos = [Axiom, Solana, Jupiter, DexScreener, Binance]

function HeaderLogos() {
    const { t } = useT('transition')
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
        },
        [
            AutoScroll({
                speed: 0.5,
                stopOnInteraction: false,
            }),
        ]
    )

    return (
        <div className="mt-[80px] flex max-w-[2000px] flex-col gap-8 overflow-x-hidden text-center lg:mt-32 lg:flex-row lg:items-center lg:pl-4 xl:ml-[calc((100vw-1240px)/2)] xl:w-[calc(100vw-((100vw-1240px)/2))] xl:pl-0">
            <p
                className="text-primary/70 font-medium leading-[130%] lg:shrink-0 lg:text-left lg:text-2xl lg:leading-[130%] xl:w-[357px]"
                data-aos="fade-right"
            >
                {t('header.logos')}
            </p>
            <div
                className="header-logos pointer-events-none relative w-full overflow-hidden"
                data-aos="fade-left"
                ref={emblaRef}
            >
                <div className="flex items-center">
                    {[...logos, ...logos].map((logo, idx) => (
                        <Image
                            key={idx}
                            alt="cooperate company logo"
                            src={logo.src}
                            width={logo.width}
                            height={logo.height}
                            className="mx-[20px] shrink-0"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeaderLogos
