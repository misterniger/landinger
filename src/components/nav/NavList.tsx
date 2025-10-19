'use client'
import { usePathname } from 'next/navigation'
import NavLink from './NavLink'

function NavList({ lng }: { lng: string }) {
    const pathname = usePathname()
    const cleanPath = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/'

    const list = [
        { name: 'home', href: `/${lng}`, page: '/', subPage: true },
        { name: 'how-works', href: `/${lng}`, page: '/#how-works' },
        { name: 'security', href: `/${lng}`, page: '/#security' },
        {
            name: 'affiliate',
            href: `/${lng}/affiliate`,
            page: '/affiliate',
            subPage: true,
        },
        { name: 'ecosystem', href: `/${lng}`, page: '/#ecosystem' },
    ]
    return (
        <ul
            className={`flex flex-col gap-5 md:w-full md:flex-row md:items-center md:justify-center md:gap-3 lg:gap-5 xl:pl-10`}
        >
            {list.map((l) => (
                <NavLink
                    key={l.name}
                    {...l}
                    isActive={cleanPath === l.page}
                    subPage={l.subPage}
                    href={l.href}
                    section={l.name}
                />
            ))}
        </ul>
    )
}

export default NavList
