import Image from 'next/image'

interface EconomyCardProps {
    imageSrc: string
    title: string
    description: string
    smallImage?: string | null
}

function EconomyCard({
    imageSrc,
    title,
    description,
    smallImage = null,
}: EconomyCardProps) {
    return (
        <div
            className={`bg-dark3 md-h-[367.5px] group relative flex h-[344px] w-[322px] shrink-0 items-end overflow-hidden rounded-xl p-4 pb-6 md:w-[403px] md:rounded-2xl`}
            data-aos="zoom-in"
        >
            <div className="absolute inset-0 z-[5] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="economy-border absolute inset-0 rounded-xl md:rounded-2xl"></div>
            {!smallImage && (
                <Image
                    src={imageSrc}
                    fill
                    className="object-center md:object-cover"
                    alt=""
                    quality={100}
                />
            )}{' '}
            {smallImage && (
                <>
                    <Image
                        src={smallImage}
                        fill
                        className="object-cover md:hidden"
                        alt=""
                        quality={100}
                    />
                    <Image
                        src={imageSrc}
                        fill
                        className="hidden object-cover md:block"
                        alt=""
                        quality={100}
                    />
                </>
            )}
            <div className="relative z-10 leading-[130%]">
                <h3 className="mb-3 font-medium md:mb-4 md:text-2xl">
                    {title}
                </h3>
                <p className="text-primary/70 md:pr-2">{description}</p>
            </div>
        </div>
    )
}

export default EconomyCard
