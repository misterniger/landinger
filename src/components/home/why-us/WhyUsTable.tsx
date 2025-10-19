'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import ScrollButton from '../info/ScrollButton'
import WhyUsTableFeatures from './WhyUsTableFeatures'
import WhyUsOffGrid from './WhyUsOffGrid'
import WhyUsBanks from './WhyUsBanks'
import WhyUsOther from './WhyUsOther'

function WhyUsTable() {
    const [isEnabled, setIsEnabled] = useState(false)

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

    return (
        <>
            <div
                className="w-full overflow-hidden px-4 xl:px-0"
                ref={isEnabled ? emblaRef : null}
            >
                <div className="flex items-start gap-2">
                    <WhyUsTableFeatures />
                    <WhyUsOffGrid />
                    <WhyUsBanks />
                    <WhyUsOther />
                </div>
            </div>
            <div
                className="mt-8 flex w-full items-center justify-end gap-2 px-4 lg:hidden"
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
        </>
    )
}

export default WhyUsTable
