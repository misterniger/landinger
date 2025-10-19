import Image from 'next/image'

interface PrivacyCardProps {
    imageSrc: string
    title: string
    description: string
    size?: 'large' | 'small'
    idx: number
}

function PrivacyCard({
    imageSrc,
    title,
    description,
    size = 'small',
    idx,
}: PrivacyCardProps) {
    return (
        <div
            className={`bg-dark3 group relative flex max-h-[498px] w-full items-end overflow-hidden rounded-[14px] p-4 sm:rounded-2xl sm:p-6 md:px-4 xl:px-6 ${
                size === 'large'
                    ? 'aspect-[700/498] min-h-[349px] max-w-[700px]'
                    : 'aspect-[524/498] min-h-[328px] md:aspect-[700/498] md:min-h-[349px] xl:aspect-[524/498] xl:max-w-[524px]'
            }`}
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
                <p className="text-primary/70 max-w-[493px] pr-2">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PrivacyCard
