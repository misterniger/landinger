import { HiBars3 } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'

function Hamburger({
    onClick,
    isExpanded,
}: {
    onClick: () => void
    isExpanded: boolean
}) {
    return (
        <button
            className="my-shadow hamburger-linear hover:bg-dark/70 relative z-[40] flex size-14 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[14px] mix-blend-plus-lighter transition-colors duration-300 md:hidden"
            aria-label="open menu"
            onClick={onClick}
        >
            <p className="hamburger-shadow hamburger flex size-11 items-center justify-center rounded-lg mix-blend-plus-lighter">
                {' '}
                {isExpanded ? (
                    <AiOutlineClose
                        className={`fade-in-animation pointer-events-none size-6`}
                    />
                ) : (
                    <HiBars3 className="fade-in-animation pointer-events-none size-6" />
                )}
            </p>
        </button>
    )
}

export default Hamburger
