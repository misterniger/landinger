'use client'

import { useState } from 'react'
import Accorderon from './Accorderon'
import { useT } from '@/app/i18n/client'

function FaqQuestions() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)
    const { t } = useT('transition')

    const toggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    return (
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-2 pt-8 lg:pt-[60px]">
            {Array.from({ length: 6 }).map((_, idx) => (
                <Accorderon
                    key={idx}
                    isOpen={activeIndex === idx}
                    onClick={() => toggleAccordion(idx)}
                    answer={t(`faq.questions.${idx}.answer`)}
                    title={t(`faq.questions.${idx}.title`)}
                />
            ))}
        </div>
    )
}

export default FaqQuestions
