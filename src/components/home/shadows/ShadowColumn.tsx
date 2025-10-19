'use client'
import useEmblaCarousel from 'embla-carousel-react'
import ShadowCard from './ShadowCard'
import AutoScroll from 'embla-carousel-auto-scroll'

interface ColumnProps {
    cards: {
        name: string
        description: string
    }[]
    isCenter?: boolean
    restClass?: string
}

function ShadowColumn({ cards, isCenter = false, restClass }: ColumnProps) {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            axis: 'x',
            breakpoints: { '(min-width: 1024px)': { axis: 'y' } },
        },
        [
            AutoScroll({
                speed: 0.3,
                direction: isCenter ? 'backward' : 'forward',
                stopOnInteraction: false,
            }),
        ]
    )

    return (
        <div
            className="pointer-events-none w-full select-none overflow-hidden lg:w-fit"
            ref={emblaRef}
        >
            <div
                className={`flex flex-row items-center lg:h-[1024px] lg:flex-col lg:items-stretch ${isCenter ? 'lg:mt-[84px]' : ''} ${restClass ?? ''}`}
            >
                {cards.map((card, idx) => (
                    <ShadowCard
                        key={idx}
                        name={card.name}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShadowColumn
