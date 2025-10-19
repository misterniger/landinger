import Image from 'next/image'
import Avatar from '@/assets/shadow-avatar.webp'
import Verified from '@/assets/verified-icon.svg'

function formatDescription(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g)

    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const content = part.slice(2, -2)
            return (
                <span key={index} className="text-primary font-medium">
                    {content}
                </span>
            )
        }
        return part
    })
}

function ShadowCard({
    name,
    description,
}: {
    name: string
    description: string
}) {
    return (
        <div className="bg-dark3 mx-2 flex h-[176px] w-[322px] shrink-0 flex-col gap-5 rounded-[14px] p-6 lg:mx-0 lg:my-2 lg:w-full lg:max-w-[403px] lg:shrink lg:rounded-2xl">
            <div className="flex items-center gap-3">
                <Image
                    src={Avatar}
                    height={Avatar.height}
                    width={Avatar.width}
                    className="block shrink-0"
                    alt="Avatar"
                />
                <p className="inline-flex items-center gap-1.5 text-nowrap font-medium">
                    {name}
                    <Image
                        src={Verified}
                        height={Verified.height}
                        width={Verified.width}
                        className="block shrink-0"
                        alt="verified icon"
                    />
                </p>
            </div>
            <p className="text-primary/70 text-sm leading-[130%]">
                {formatDescription(description)}
            </p>
        </div>
    )
}

export default ShadowCard
