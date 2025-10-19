interface LevelButtonPrips {
    idx: number
    isActive: boolean
    onClick: () => void
}

function LevelButton({ idx, isActive, onClick }: LevelButtonPrips) {
    return (
        <button
            className={`flex h-[40px] w-[83px] shrink-0 cursor-pointer items-center justify-center rounded-full border text-sm transition-colors duration-300 ${isActive ? 'text-primary bg-dark4 border-[#282828]' : 'text-primary/70 border-transparent bg-transparent'}`}
            onClick={onClick}
        >
            Level {idx + 1}
        </button>
    )
}

export default LevelButton
