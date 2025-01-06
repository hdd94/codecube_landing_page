import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'TechSolutions GmbH',
    description: 'Ihr Partner für innovative IT-Lösungen',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}