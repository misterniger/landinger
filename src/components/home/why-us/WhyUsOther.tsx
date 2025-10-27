import WhyUsInfo from './WhyUsInfo'
// import XCheckIcon from './XCheckIcon'

function WhyUsOther() {
    return (
        <div data-aos="zoom-in" className="w-full">
            <div className="bg-dark4 flex w-[205px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors md:max-w-[240px] lg:w-full lg:max-w-[296px] lg:shrink xl:rounded-2xl">
                <p className="text-primary/70 flex h-14 w-full items-center justify-center text-sm xl:text-base">
                    Other Crypto Cards
                </p>
                <WhyUsInfo text="Usually" />

                <WhyUsInfo text="Some" />
                <WhyUsInfo text="Possible" />
                <WhyUsInfo text="Delayed" />
                <WhyUsInfo text="Shared" />
                <WhyUsInfo text="Few" />
                <WhyUsInfo text="Complex" />
                {/* <XCheckIcon />
                <WhyUsInfo text="Limited" />
                <XCheckIcon check />
                <WhyUsInfo text="Limited Hours" />
                <WhyUsInfo text="App Only" />
                <WhyUsInfo text="Limited Chains" />
                <XCheckIcon /> */}
            </div>
        </div>
    )
}

export default WhyUsOther
