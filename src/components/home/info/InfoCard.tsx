import Image from 'next/image'

interface InfoCardProps {
    imageSrc: string
    title: string
    description: string
    idx: number
}

function InfoCard({ imageSrc, title, description, idx }: InfoCardProps) {
    return (
        <div
            className={`bg-dark3 group relative flex aspect-[612/500] max-h-[500px] min-h-[328px] w-full max-w-[612px] items-end overflow-hidden rounded-[14px] p-4 sm:rounded-2xl sm:p-6 md:px-4 xl:px-6`}
            data-aos={`${idx % 2 === 0 ? 'fade-right' : 'fade-left'}`}
        >
            <div className="absolute inset-0 z-[5] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <Image
                src={imageSrc}
                fill
                className="object-cover"
                alt=""
                quality={100}
            />
            <div className="relative z-10 leading-[130%]">
                <h3 className="mb-3 font-medium sm:mb-4 sm:text-2xl md:text-base lg:text-2xl">
                    {title}
                </h3>
                <p className="text-primary/70 max-w-[326px] pr-2 sm:max-w-[548px] xl:pr-11">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default InfoCard
