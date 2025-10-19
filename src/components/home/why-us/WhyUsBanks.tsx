import WhyUsInfo from './WhyUsInfo'
import XCheckIcon from './XCheckIcon'

function WhyUsBanks() {
    return (
        <div data-aos="zoom-in" className="w-full">
            <div className="bg-dark4 flex w-[205px] shrink-0 flex-col rounded-[14px] px-5 duration-300 hover:bg-[#18191c] hover:transition-colors md:max-w-[240px] lg:w-full lg:max-w-[296px] lg:shrink xl:w-[296px] xl:rounded-2xl">
                <p className="text-primary/70 flex h-14 w-full items-center justify-center text-sm xl:text-base">
                    Traditional Banks
                </p>
                <WhyUsInfo text="Required" />

                <XCheckIcon check />
                <WhyUsInfo text="Often" />
                <WhyUsInfo text="Slow" />
                <WhyUsInfo text="They do" />
                <WhyUsInfo text="N/A" />
                <XCheckIcon />
                {/* <XCheckIcon />
                <XCheckIcon check />
                <XCheckIcon />

                <WhyUsInfo text="Business Hours Only" />
                <WhyUsInfo text="App Only" />
                <XCheckIcon />
                <WhyUsInfo text="N/A" /> */}
            </div>
        </div>
    )
}

export default WhyUsBanks
