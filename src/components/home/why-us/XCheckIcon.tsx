import Image from 'next/image'
import Check from '@/assets/check-circle.svg'
import XIcon from '@/assets/x-cirle.svg'

function XCheckIcon({ check = false }: { check?: boolean }) {
    return (
        <div className={`flex h-14 w-full items-center justify-center`}>
            <Image
                src={check ? Check : XIcon}
                width={24}
                height={24}
                alt="x icon"
                quality={100}
            />
        </div>
    )
}

export default XCheckIcon
