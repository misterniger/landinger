function SwitchButton({
    onClick,
    isMonth,
}: {
    onClick: () => void
    isMonth: boolean
}) {
    return (
        <button
            className="switch bg-dark4 group relative h-7 w-[64px] cursor-pointer rounded-full p-0.5"
            onClick={onClick}
            aria-label="switch"
        >
            <span
                className={`light-btn pointer-events-none relative z-10 block h-6 w-[39px] rounded-full transition-transform duration-500 ease-in-out ${isMonth ? 'translate-x-0' : 'translate-x-[21px]'}`}
            >
                {' '}
                <span className="switch-light pointer-events-none absolute inset-0 block rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </span>
        </button>
    )
}

export default SwitchButton
