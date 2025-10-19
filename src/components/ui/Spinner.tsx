function Spinner({ restClass = '' }: { restClass?: string }) {
    return (
        <span
            className={`border-dark4 border-t-primary h-5 w-5 animate-spin rounded-full border-4 ${restClass}`}
        ></span>
    )
}

export default Spinner
