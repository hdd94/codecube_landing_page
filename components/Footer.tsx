import Link from 'next/link'
import { Server } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <Server className="h-6 w-6 text-blue-500" />
                            <span className="ml-2 text-lg font-bold">TechSolutions</span>
                        </div>
                        <p className="text-gray-400">
                            Ihr zuverlässiger Partner für innovative IT-Lösungen und digitale Transformation.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/services#cloud">Cloud Services</Link></li>
                            <li><Link href="/services#security">IT-Sicherheit</Link></li>
                            <li><Link href="/services#development">Softwareentwicklung</Link></li>
                            <li><Link href="/services#consulting">IT-Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Unternehmen</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/about">Über uns</Link></li>
                            <li><Link href="/career">Karriere</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Kontakt</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/impressum">Impressum</Link></li>
                            <li><Link href="/datenschutz">Datenschutz</Link></li>
                            <li><Link href="/agb">AGB</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} TechSolutions GmbH. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer