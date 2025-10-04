import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Amara Hoeve | Boerencamping Bergen',
    description: 'Welkom op de Amara Hoeve! Kom je gezellig kamperen? Boerencamping in Bergen, op nog geen 3 km van Alkmaar. Wonder Yurt verhuur beschikbaar.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="nl">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

