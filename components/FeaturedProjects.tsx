"use client";

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { projects } from '@/lib/projects'

// Technologie-Icons und Farben Mapping
const techStyles: Record<string, { color: string, icon: string }> = {
    'Next.js': { color: 'bg-black text-white', icon: '⚡' },
    'TypeScript': { color: 'bg-blue-500/10 text-blue-700', icon: '📘' },
    'React': { color: 'bg-blue-400/10 text-blue-600', icon: '⚛️' },
    'AWS': { color: 'bg-orange-500/10 text-orange-700', icon: '☁️' },
    'Docker': { color: 'bg-blue-500/10 text-blue-700', icon: '🐳' },
    'Kubernetes': { color: 'bg-blue-600/10 text-blue-800', icon: '⎈' },
}

const FeaturedProjects = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    // Wähle die ersten 3 Projekte für die Featured-Sektion
    const featuredProjects = projects.slice(0, 3)

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* Header mit verbessertem Styling */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1">
                        <span className="mr-2">🚀</span>
                        Unsere Projekte
                    </Badge>
                    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                        Ausgewählte Referenzen
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Entdecken Sie einige unserer erfolgreich umgesetzten Projekte
                        und überzeugen Sie sich von unserer Expertise.
                    </p>
                </div>

                {/* Projekte Grid mit verbessertem Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featuredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className={`group overflow-hidden border-0 bg-white hover:shadow-xl transition-all duration-500 ${
                                hoveredId === project.id ? 'scale-[1.02]' : ''
                            }`}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Link href={`/projekte/${project.id}`}>
                                        <Button variant="outline" className="bg-white/90 hover:bg-white">
                                            Projekt Details
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => {
                                        const style = techStyles[tech] || {
                                            color: 'bg-gray-100 text-gray-800',
                                            icon: '💻'
                                        }
                                        return (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className={`${style.color} font-medium`}
                                            >
                                                <span className="mr-1">{style.icon}</span>
                                                {tech}
                                            </Badge>
                                        )
                                    })}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <Link
                                        href={`/projekte/${project.id}`}
                                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                                    >
                                        Details ansehen
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link href="/projekte">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 group px-6"
                        >
                            Alle Projekte entdecken
                            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects