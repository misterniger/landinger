function Column({
    restClass = '',
    list,
    isTier = false,
}: {
    restClass: string
    list: string[]
    isTier?: boolean
}) {
    return (
        <div
            className={`bg-dark4 flex flex-col rounded-[14px] text-sm transition-colors duration-300 last:border-none hover:bg-[#18191c] lg:w-full lg:max-w-full lg:flex-row lg:justify-between lg:rounded-none lg:border-b lg:border-[#282828] ${restClass}`}
        >
            {list.map((item, idx) => (
                <p
                    className={`nth-[2]:lg:w-[100px] nth-[3]:lg:w-[135px] nth-[3]:xl:w-[156px] nth-[4]:lg:w-[135px] nth-[4]:xl:w-[156px] nth-[5]:lg:w-[135px] nth-[5]:xl:w-[156px] nth-[6]:lg:w-[135px] nth-[6]:xl:w-[156px] nth-[7]:lg:w-[168px] nth-[7]:xl:w-[320px] flex min-h-[64px] items-center border-b border-[#282828] px-5 last:border-0 lg:shrink-0 lg:border-none lg:first-of-type:w-[180px] xl:first-of-type:w-[217px]`}
                    key={idx}
                >
                    {item}
                </p>
            ))}
        </div>
    )
}

export default Column
