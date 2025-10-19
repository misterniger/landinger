'use client'
import Link from 'next/link'

interface StyledLinkProps {
    name: string
    variant?: 'light' | 'dark'
    borderPosition?: 'top' | 'bottom'
    restClass?: string
    href?: string
    isEllipse?: boolean
    target?: string
    btn?: boolean,
    onClick?: ()=>void
    scroll?:boolean
}

function StyledLink({
    name,
    href = '/',
    variant = 'light',
    borderPosition = 'bottom',
    restClass,
    btn= false,
    onClick=()=>{},
    isEllipse = true,
    target = '_self',
    scroll= true
}: StyledLinkProps) {

  


if(btn) return (<button
            
            className={`${restClass ? restClass : ''} my-shadow group relative flex w-full shrink-0 cursor-pointer items-center justify-center overflow-hidden text-nowrap rounded-[18px] p-1.5 mix-blend-plus-lighter transition-colors duration-300 sm:w-fit ${borderPosition === 'top' ? 'border-linear-top' : 'border-linear-bottom'}`} onClick={onClick} 
        >
            <p
                className={`flex w-full items-center justify-center gap-2.5 rounded-xl px-4 pb-[15.5px] pt-[12.5px] text-sm leading-4 mix-blend-plus-lighter transition-colors duration-300 lg:px-5 lg:pb-[17.5px] lg:pt-[14.5px] lg:text-base ${variant === 'light' ? 'light-btn text-dark2 group-hover:text-dark2/80 font-semibold' : 'dark-btn font-medium text-white group-hover:text-white/80'}`}
            >
                {variant === 'dark' && isEllipse && (
                    <span className="elipse-shadow size-3 shrink-0 rounded-full border border-black/15 bg-white"></span>
                )}{' '}
                {name}
            </p>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
            </div>
        </button>)

if(!btn) return (
        
        (<Link
            rel="noopener noreferrer"
            target={target}
            href={href}
            scroll={scroll}
            onClick={onClick}
            className={`${restClass ? restClass : ''} my-shadow group relative flex w-full shrink-0 cursor-pointer items-center justify-center overflow-hidden text-nowrap rounded-[18px] p-1.5 mix-blend-plus-lighter transition-colors duration-300 sm:w-fit ${borderPosition === 'top' ? 'border-linear-top' : 'border-linear-bottom'}`}
        >
            <p
                className={`flex w-full items-center justify-center gap-2.5 rounded-xl px-4 pb-[15.5px] pt-[12.5px] text-sm leading-4 mix-blend-plus-lighter transition-colors duration-300 lg:px-5 lg:pb-[17.5px] lg:pt-[14.5px] lg:text-base ${variant === 'light' ? 'light-btn text-dark2 group-hover:text-dark2/80 font-semibold' : 'dark-btn font-medium text-white group-hover:text-white/80'}`}
            >
                {variant === 'dark' && isEllipse && (
                    <span className="elipse-shadow size-3 shrink-0 rounded-full border border-black/15 bg-white"></span>
                )}{' '}
                {name}
            </p>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
            </div>
        </Link>)
    )
}

export default StyledLink
