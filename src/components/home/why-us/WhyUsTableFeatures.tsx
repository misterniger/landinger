// const features = [
//     'No KYC Required',
//     'Apple Pay / Google Pay',
//     'No Transaction Declining',
//     'Instant Top-Up Anytime',
//     'App and Web Interface',
//     'Multi-Chain Support',
//     'No Wallet Connect Required',
// ]
const features = [
    'Identity Checks',
    'Payment Freedom',
    'Blocked payments and frozen funds',
    'Top-Up Speed',
    'Control',
    'Multi-Chain Access',
    'Set-Up Process',
]

function WhyUsTableFeatures() {
    return (
        <div data-aos="zoom-in" className="w-full">
            <div className="bg-dark4 flex w-[310px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors lg:max-w-[328px] xl:w-[328px] xl:rounded-2xl">
                <p className="text-primary/70 flex h-14 w-full items-center text-sm">
                    What They Call a “Feature”
                </p>
                {features.map((item) => (
                    <p className="flex h-14 w-full items-center" key={item}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default WhyUsTableFeatures
