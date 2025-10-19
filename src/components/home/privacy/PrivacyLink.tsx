'use client'
import StyledLink from "@/components/ui/StyledLink"

function PrivacyLink() {
    return (
         <StyledLink name="Learn About Our Security"    href='/en/#security'
                scroll={false} onClick={() => {
  const el = document.querySelector('#security');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}}/>)
}

export default PrivacyLink
