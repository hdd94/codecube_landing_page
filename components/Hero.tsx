'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Code, LineChart, Shield } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
    const features = [
        {
            icon: <Code className="text-white" size={20} />,
            text: 'Moderne Technologien'
        },
        {
            icon: <Shield className="text-white" size={20} />,
            text: 'Höchste Sicherheit'
        },
        {
            icon: <LineChart className="text-white" size={20} />,
            text: 'Skalierbare Lösungen'
        }
    ]

    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
            {/* Hintergrund-Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(150deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(30deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(150deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(60deg,#ffffff77_25%,transparent_25.5%,transparent_75%,#ffffff77_75%,#ffffff77),linear-gradient(60deg,#ffffff77_25%,transparent_25.5%,transparent_75%,#ffffff77_75%,#ffffff77)] bg-[length:80px_140px]" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
                    {/* Linke Spalte - Text und CTAs */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Innovative IT-Lösungen für Ihren Erfolg
                        </h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Wir unterstützen Unternehmen dabei, ihre digitale Transformation
                            erfolgreich zu gestalten. Mit modernsten Technologien und
                            jahrelanger Expertise entwickeln wir maßgeschneiderte Lösungen.
                        </p>

                        {/* Feature Liste */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-center space-x-2 text-white"
                                >
                                    {feature.icon}
                                    <span>{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex gap-4 flex-wrap">
                            <Link href="/projekte">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-medium">
                                    Projekte ansehen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/kontakt">
                                <Button
                                    size="lg"
                                    className="bg-blue-500 text-white hover:bg-blue-400 font-medium"
                                >
                                    Kontakt aufnehmen
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Rechte Spalte - Dekorative Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <svg
                                viewBox="0 0 400 400"
                                className="w-full h-auto max-w-lg mx-auto"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="8" className="opacity-20" />
                                <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="8" className="opacity-40" />
                                <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="8" className="opacity-60" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero