import AffiliateHeader from '@/components/affiliate/AffiliateHeader'
import { Params } from '../layout'
import Footer from '@/components/footer/Footer'
import JoinSection from '@/components/affiliate/JoinSection'
import LevelSection from '@/components/affiliate/LevelSection'

async function Affiliate({ params }: { params: Params }) {
    const { lng } = await params
    return (
        <>
            <AffiliateHeader />
            <main>
                <LevelSection />
                <JoinSection />
            </main>
            <Footer lng={lng} isTitle={false} />
        </>
    )
}

export default Affiliate
