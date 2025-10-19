'use client'
import Image from 'next/image'

import CheckIcon from '@/assets/check-icon.svg'
import StyledLink from '@/components/ui/StyledLink'
import useModalStore from '@/stores/modalStore'

interface CardProps {
    imageSrc: string
    monthPrice: string
    yearPrice: string
    per: 'mth' | 'year'
    title: string
    list: string[]
    index: number
    linkName?: string
}

function MembershipCard({
    imageSrc,
    monthPrice,
    yearPrice,
    per,
    index,
    title,
    list,
    linkName = 'Apply',
}: CardProps) {
    const setOpenModal = useModalStore((state) => state.setOpenModal)
    return (
        <div data-aos="zoom-out">
            <div className="bg-dark4 relative z-[1] flex h-fit w-[322px] shrink-0 flex-col gap-5 rounded-[14px] p-1 pb-4 transition-colors duration-300 hover:bg-[#18191c] lg:shrink xl:w-[403px] xl:gap-6 xl:rounded-2xl xl:p-2 xl:pb-6">
                <div
                    className={`border-gradient-one absolute inset-0 rounded-[14px] xl:rounded-2xl ${index === 0 && 'block sm:hidden'} ${index === 1 && 'hidden sm:block'} ${index === 2 && 'hidden'}`}
                ></div>
                <div
                    className={`border-gradient-two absolute inset-0 rounded-[14px] xl:rounded-2xl ${index === 0 && 'block sm:hidden'} ${index === 1 && 'hidden sm:block'} ${index === 2 && 'hidden'}`}
                ></div>

                <div className="hamburger-shadow overflow-hidden rounded-[10px]">
                    <Image
                        src={imageSrc}
                        width={387}
                        height={242}
                        alt="payment card"
                        quality={100}
                    />
                </div>
                <div className="flex flex-col gap-6 px-3 xl:p-4">
                    <p className="leading-[130%] xl:leading-[130%]">
                        <span className={`} text-xl font-medium xl:text-2xl`}>
                            ${per === 'mth' ? monthPrice : yearPrice}/{per}{' '}
                        </span>{' '}
                        <span className="text-primary/70 text-sm xl:text-base">
                            {title}{' '}
                        </span>{' '}
                    </p>

                    <StyledLink
                        btn
                        onClick={() => setOpenModal('waitlist-modal')}
                        name={linkName}
                        restClass="sm:!w-full lg:hidden"
                        variant={index % 2 === 0 ? 'light' : 'dark'}
                        isEllipse={false}
                    />
                    <StyledLink
                        btn
                        onClick={() => setOpenModal('waitlist-modal')}
                        name={linkName}
                        restClass="sm:!w-full hidden lg:block"
                        variant={index % 2 === 0 ? 'dark' : 'light'}
                        isEllipse={false}
                    />
                    <ul className="space-y-3 text-sm opacity-70">
                        {list.map((item, idx) => (
                            <li
                                className={`items-center gap-2 ${idx > 3 ? 'hidden md:flex' : 'flex'}`}
                                key={item + idx}
                            >
                                <span aria-hidden className="shrink-0">
                                    <Image
                                        src={CheckIcon}
                                        width={22}
                                        height={22}
                                        alt="check icon"
                                        quality={100}
                                    />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MembershipCard
