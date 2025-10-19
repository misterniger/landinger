// import { FaPinterest, FaLinkedin } from 'react-icons/fa'
import Logo from '../icons/Logo'
import { FaSquareXTwitter } from 'react-icons/fa6'
import SocialLink from './SocialLink'
import { getT } from '@/app/i18n'

async function FooterInfo() {
    const { t } = await getT('transition')
    return (
        <div className="max-w-[390px] text-sm leading-[130%]">
            <div data-aos="zoom-in">
                <Logo />
            </div>
            <div data-aos="fade-up">
                <div className="my-8">
                    <p className="text-primary/70 mb-5">
                        {t('footer.info.info-text')}
                    </p>
                    <p className="inline-flex items-center gap-2">
                        <span className="footer-elipse-shadow size-2 rounded-full border border-black/60 bg-[#60F907]"></span>
                        <span> {t('footer.info.all-systems')}</span>
                    </p>
                </div>
                <div className="flex items-center gap-1.5">
                    {/* <SocialLink
                    href="https://linkedin.com"
                    icon={FaLinkedin}
                    label={t('footer.info.label')}
                    /> */}
                    <SocialLink
                        href="https://x.com/offgridcash"
                        icon={FaSquareXTwitter}
                        label={t('footer.info.label')}
                    />
                    {/* <SocialLink
                    href="https://pinterest.com"
                    icon={FaPinterest}
                    label={t('footer.info.label')}
                /> */}
                </div>
            </div>
        </div>
    )
}

export default FooterInfo
