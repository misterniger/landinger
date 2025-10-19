import Link from 'next/link'
import { IconType } from 'react-icons'

type SocialLinkProps = {
    href: string
    icon: IconType
    label: string
}

export default function SocialLink({
    href,
    icon: Icon,
    label,
}: SocialLinkProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary/70 transition-colors duration-300"
            aria-label={label}
        >
            <Icon className="pointer-events-none size-[28px] shrink-0" />
        </Link>
    )
}
