import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Font-Optimierung
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',  // Verbesserte Performance beim Laden
    variable: '--font-inter',
})

// Typen-Definition
interface RootLayoutProps {
    children: React.ReactNode
}

export const metadata = {
    title: {
        default: 'TechSolutions GmbH',
        template: '%s | TechSolutions GmbH'
    },
    description: 'Ihr Partner für innovative IT-Lösungen und digitale Transformation',
    keywords: ['IT-Lösungen', 'Digitalisierung', 'Software-Entwicklung', 'Beratung'],
    robots: 'index, follow',
    // language: 'de',
    viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="de" className={inter.variable}>
        <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900`}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}