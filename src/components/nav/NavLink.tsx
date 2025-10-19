import { useT } from '@/app/i18n/client'
import Link from 'next/link'

function NavLink({
    href,
    name,
    isActive = false,
    subPage = false,

    section,
}: {
    href: string
    name: string
    isActive?: boolean
    subPage?: boolean

    section?: string
}) {
    const { t } = useT('transition')

    return (
        <li>
            <Link
                className={`text-primary cursor-pointer text-nowrap p-1 transition-opacity duration-300 hover:opacity-90 ${isActive ? 'font-medium opacity-100' : 'font-normal opacity-70'}`}
                href={href}
                onClick={() => {
                    if (subPage) return
                    const el = document.querySelector(`#${section}`)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                scroll={subPage ? true : false}
            >
                {t(`nav.links.${name}`)}
            </Link>
        </li>
    )
}

export default NavLink
