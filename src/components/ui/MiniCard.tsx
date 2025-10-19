import Image from 'next/image'
import SmallCard from '@/assets/mini-card.svg'
function MiniCard({ whyUs = false }: { whyUs?: boolean }) {
    return (
        <span
            className={`bg-dark4 my-card-shadow relative flex -rotate-6 items-center justify-center rounded-[10px] border-[0.5px] border-white/10 md:top-2 md:rounded-[14px] ${whyUs ? 'size-10 md:size-14' : 'size-11 md:size-16'}`}
        >
            <Image
                src={SmallCard}
                alt="small card"
                width={72}
                height={72}
                quality={100}
                priority
                className="shrink-0 rotate-6"
            />
            <span
                className={`${whyUs ? 'top-corner-why-us' : 'top-corner'} absolute inset-0 rounded-[10px] md:rounded-[14px]`}
            ></span>
            <span
                className={`${whyUs ? 'bottom-corner-why-us' : 'bottom-corner'} absolute inset-0 rounded-[10px] md:rounded-[14px]`}
            ></span>
        </span>
    )
}

export default MiniCard
