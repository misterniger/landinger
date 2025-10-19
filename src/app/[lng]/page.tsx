import FaqSection from '@/components/home/faq/FaqSection'
import Header from '@/components/home/Header'
import EconomySection from '@/components/home/info/EconomySection'
import InfoSection from '@/components/home/info/InfoSection'
import MembershipSection from '@/components/home/membership/MembershipSection'
import PrivacySection from '@/components/home/privacy/PrivacySection'
// import ShadowsSection from '@/components/home/shadows/ShadowsSection'
import WhyUsSection from '@/components/home/why-us/WhyUsSection'
import { Params } from './layout'
import Footer from '@/components/footer/Footer'

const languages = ['en', 'de']

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export default async function Home({ params }: { params: Params }) {
    const { lng } = await params
    return (
        <>
            <Header />
            <main>
                <InfoSection />
                <EconomySection />
                <WhyUsSection />
                <PrivacySection />
                {/* <ShadowsSection /> */}
                <MembershipSection />
                <FaqSection />
            </main>
            <Footer lng={lng} />
        </>
    )
}
