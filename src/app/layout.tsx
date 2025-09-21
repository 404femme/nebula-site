import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
})

const roboto = Roboto({
    weight: ['300', '400'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Nebula',
    description: 'Only for meow meow enjoyers',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} ${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
