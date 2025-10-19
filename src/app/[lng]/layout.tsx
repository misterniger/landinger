import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from '@/components/nav/Navbar'
import AosProvider from '@/components/ui/AosProvider'
import { dir } from 'i18next'
import ModalsControler from '@/components/ui/ModalsControler'
import Toaster from '@/components/ui/Toaster'

const languages = ['en', 'de']

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const canela = localFont({
    src: '../../fonts/canela-trial.woff2',
    variable: '--font-canela',
})

export type Params = Promise<{ lng: string }>

export const metadata: Metadata = {
    title: 'Off Grid',
    description:
        'Privacy-first crypto cards and instant payments. No KYC, no delays, no compromise.',
    keywords:
        'global platform, technology,crypto, business solutions, innovation, networking, international services, off-grid',
    icons: {
        icon: [
            { url: '/favicon.png' },
            { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        ],

        apple: '/favicon-180.png',
    },

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://off-grid-eight.vercel.app/en',
        siteName: 'Off Grid.',
        title: 'Off Grid',
        description:
            'Privacy-first crypto cards and instant payments. No KYC, no delays, no compromise.',
        images: [
            {
                url: 'https://off-grid-eight.vercel.app/en/og-image.png',
                width: 1200,
                height: 400,
                alt: 'Off Grid',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Off Grid',
        description:
            'Privacy-first crypto cards and instant payments. No KYC, no delays, no compromise.',
        images: ['https://off-grid-eight.vercel.app/en/og-image.png'],
    },
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Params
}>) {
    const { lng } = await params
    return (
        <html lang={lng} dir={dir(lng)} className="scroll-smooth">
            <body
                className={`${geistSans.className} ${canela.variable} bg-blackBg text-primary relative flex min-h-screen w-full flex-col overflow-x-hidden antialiased`}
            >
                <AosProvider>
                    <Navbar lng={lng} />
                    {children}
                </AosProvider>
                <ModalsControler />
                <Toaster />
            </body>
        </html>
    )
}
