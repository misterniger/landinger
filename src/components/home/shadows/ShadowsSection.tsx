import StyledLinkBox from '@/components/ui/StyledLinkBox'
import ShadowCardsBox from './ShadowCardsBox'

function ShadowsSection() {
    return (
        <section className="relative z-10 w-full overflow-hidden">
            <div className="wrapper">
                <div
                    className="relative z-[2] mb-8 flex flex-col items-center px-4 text-center lg:mb-0 xl:px-0"
                    data-aos="fade-up"
                >
                    <h2 className="section-title mb-[14px]">
                        Trusted in the Shadows
                    </h2>
                    <p className="section-subtitle max-w-[342px]">
                        Whispers from those who live by discretion. Real voices,
                        real freedom.
                    </p>
                </div>
                <ShadowCardsBox />
                <div
                    className="z-[5] w-full px-4 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 xl:px-0"
                    data-aos="zoom-in"
                >
                    <p className="section-subtitle mb-6 mt-[42px] text-center md:mb-8 md:mt-[60px]">
                        <span className="text-primary font-medium">
                            Privacy is the new luxury.
                        </span>{' '}
                        Get yours today.
                    </p>
                    <StyledLinkBox />
                </div>
            </div>
        </section>
    )
}

export default ShadowsSection
