import Image from 'next/image'
import Metal from '@/assets/metal.webp'
import WhyUsInfo from './WhyUsInfo'
// import XCheckIcon from './XCheckIcon'

function WhyUsOffGrid() {
    return (
        <div data-aos="zoom-in" className="w-full">
            <div className="group relative flex w-[205px] shrink-0 flex-col overflow-hidden rounded-[14px] md:max-w-[240px] lg:w-full lg:max-w-[296px] lg:shrink xl:rounded-2xl">
                <Image
                    src={Metal}
                    width={Metal.width}
                    height={Metal.height}
                    alt=""
                    className="absolute z-[-1]"
                    quality={100}
                />
                <p className="text-dark2 relative z-[2] flex h-14 w-full items-center justify-center px-5 font-semibold">
                    Off Grid
                </p>
                <div className="bg-dark4 relative z-[2] w-full rounded-t-[14px] px-5 text-center shadow-[inset_0px_3px_0px_0px_rgba(7,7,8,1)] transition-colors duration-300 group-hover:bg-[#18191c] xl:rounded-t-2xl">
                    {/* {Array.from({ length: 7 }).map((_, idx) => (
                        <XCheckIcon check key={idx} />
                    ))} */}
                    <WhyUsInfo text="None. Ever" />

                    <WhyUsInfo text="Apple Pay, Google Pay, Anywhere" />
                    <WhyUsInfo text="Impossible" />
                    <WhyUsInfo text="24/7, instant" />
                    <WhyUsInfo text="You do. Always." />
                    <WhyUsInfo text="All major chains supported" />
                    <WhyUsInfo text="Plug & Pay" />
                </div>
            </div>
        </div>
    )
}

export default WhyUsOffGrid
