import LevelBox from './LevelBox'

function LevelSection() {
    return (
        <section className="w-full">
            <div className="wrapper px-4 xl:px-0">
                <div className="mb-8 w-full lg:mb-[60px]" data-aos="fade-up">
                    <h2 className="section-title mb-[22px] text-center md:text-left">
                        Card affiliate levels
                    </h2>
                    <p className="section-subtitle max-w-[438px] text-center md:text-left">
                        Plus, earn an extra 10% from Tier-2 referrals (when your
                        referrals refer others).
                    </p>
                </div>
                <LevelBox />
            </div>
        </section>
    )
}

export default LevelSection
