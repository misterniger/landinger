'use client'

import { HiPlus } from 'react-icons/hi'

interface AccorderonProps {
    onClick: () => void
    isOpen: boolean
    title: string
    answer: string
}

function Accorderon({ onClick, isOpen, title, answer }: AccorderonProps) {
    return (
        <div
            className="bg-dark3 w-full overflow-hidden rounded-[14px] md:rounded-2xl"
            data-aos="zoom-in"
        >
            <h3 className="w-full">
                <button
                    className={`hover:bg-dark2/90 group relative flex w-full cursor-pointer items-center justify-between gap-5 rounded-[14px] p-[14px] text-left transition-colors duration-300 md:rounded-2xl md:px-8 md:py-[32.5px]`}
                    onClick={onClick}
                >
                    <span className="leading-[130%] md:text-2xl md:leading-[130%]">
                        {title}
                    </span>
                    <span className="bg-dark4 accorderon-icon pointer-events-none relative flex size-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105 md:absolute md:right-8 md:top-1/2 md:size-12 md:-translate-y-1/2 md:rounded-[10.5px]">
                        <HiPlus
                            className={`size-5 shrink-0 text-white transition-transform duration-300 md:size-[28px] ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                        />
                        <span className="top-corner absolute inset-0 rounded-lg md:rounded-[10.5px]"></span>
                        <span className="bottom-corner absolute inset-0 rounded-lg md:rounded-[10.5px]"></span>
                    </span>
                </button>
            </h3>
            <p
                className={`text-primary/90 pl-[14px] pr-[70px] text-sm leading-[130%] opacity-70 md:pl-8 md:pr-[120px] md:text-base md:leading-[130%] ${isOpen ? 'visible max-h-[500px] pb-[14px] pt-2.5 md:pb-6 md:pt-0' : 'delay-50 invisible max-h-0'} select-none transition-all duration-300`}
            >
                {answer}
            </p>
        </div>
    )
}

export default Accorderon
