import Image from 'next/image'

interface JoinCardProps {
    imageSrc: string
    title: string
    description: string
    idx: number
}

function JoinCard({ imageSrc, title, description, idx }: JoinCardProps) {
    return (
        <div
            className={`bg-dark3 group relative flex max-h-[250px] min-h-[216px] w-full max-w-[403px] items-end overflow-hidden rounded-xl p-4 pb-6 sm:min-h-[250px] md:rounded-2xl`}
            data-aos="zoom-in"
        >
            <div className="absolute inset-0 z-[5] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="economy-border absolute inset-0 rounded-xl md:rounded-2xl"></div>

            <Image
                src={imageSrc}
                fill
                className="object-center"
                alt=""
                quality={100}
            />

            <div className="relative z-10 leading-[130%]">
                <h3 className="mb-3 font-medium md:mb-4 md:text-2xl">
                    {title}
                </h3>
                <p
                    className={`text-primary/70 ${idx === 1 ? 'max-[313px]' : 'max-w-[354px]'} `}
                >
                    {description}
                </p>
            </div>
        </div>
    )
}

export default JoinCard
