import { getT } from '@/app/i18n'
import Link from 'next/link'

const lists = [
    {
        title: 'title',
        list: [
            { name: 'crypto-card', href: '' },
            { name: 'mobile-app', href: '' },
            { name: 'web-dashboard', href: '' },
            { name: 'api', href: '' },
            { name: 'multi-chain', href: '' },
        ],
    },
    {
        title: 'title',
        list: [
            { name: 'about-us', href: '' },
            { name: 'careers', href: '' },
            { name: 'press-kit', href: '' },
            { name: 'blog', href: '' },
            { name: 'contact', href: '' },
        ],
    },
    {
        title: 'title',
        list: [
            { name: 'help-center', href: '' },
            { name: 'privacy-policy', href: '' },
            { name: 'terms-of-service', href: '' },
            { name: 'security', href: '' },
            { name: 'status-page', href: '' },
        ],
    },
]

async function FooterLists({ lng }: { lng: string }) {
    const { t } = await getT('transition')
    return (
        <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:justify-evenly lg:justify-end lg:gap-20 xl:gap-[100px]">
            {lists.map((list, idx) => (
                <div
                    className="sm:min-w-1/5 flex flex-col gap-4 lg:gap-5 xl:min-w-[183px]"
                    key={idx}
                >
                    <h2
                        className="text-sm font-medium leading-[130%]"
                        data-aos="fade-up"
                    >
                        {t(`footer.links.${idx}.${list.title}`)}
                    </h2>
                    <ul className="flex flex-col gap-3" data-aos="fade-up">
                        {list.list.map((l) => (
                            <li
                                key={l.name}
                                className="flex h-[18px] items-center"
                            >
                                <Link
                                    href={`/${lng}/${l.href}`}
                                    className="text-primary/70 hover:text-primary text-sm leading-[130%] transition-colors duration-300"
                                >
                                    {t(`footer.links.${idx}.${l.name}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterLists
