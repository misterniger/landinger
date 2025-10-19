import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

function ScrollButton({
    onClick,
    disabled,
    variant,
}: {
    onClick: () => void
    disabled: boolean
    variant: 'left' | 'right'
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="my-card-shadow bg-dark4 flex size-11 items-center justify-center rounded-lg transition-opacity duration-300 disabled:opacity-70"
            aria-label={`scroll ${variant} `}
            title={`scroll ${variant} `}
        >
            {variant === 'left' ? (
                <FaArrowLeft className="pointer-events-none size-3" />
            ) : (
                <FaArrowRight className="pointer-events-none size-3" />
            )}
        </button>
    )
}

export default ScrollButton
