// import StyledLink from '@/components/ui/StyledLink'
import FaqQuestions from './FaqQuestions'
import { getT } from '@/app/i18n'

async function FaqSection() {
    const { t } = await getT('transition')
    return (
        <section
            className="wrapper flex flex-col items-center px-4 xl:px-0"
            id="ecosystem"
        >
            <div
                className="flex flex-col items-center text-center"
                data-aos="fade-up"
            >
                <h2 className="section-title mb-[22px]">
                    {t('faq.title.top')} <br />
                    {t('faq.title.bottom')}
                </h2>
                <p className="section-subtitle max-w-[298px] sm:max-w-[438px]">
                    {t('faq.subTitle')}
                </p>
            </div>
            <FaqQuestions />
            {/* <div
                className="flex flex-col items-center text-center"
                data-aos="zoom-in"
            >
                {' '}
                <p className="section-subtitle mb-6 lg:mb-8">
                    {t('faq.bottom-text')}
                </p>
                <StyledLink
                    name={t('faq.linkName')}
                    href="https://x.com/offgridcash"
                    target="_blanc"
                />
            </div> */}
        </section>
    )
}

export default FaqSection
