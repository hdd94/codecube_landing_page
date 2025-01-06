"use client";

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectFilter } from './ProjectFilter'
import type { Project } from '@/lib/types'

const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Entwicklung einer skalierbaren E-Commerce Plattform mit NextJS und Stripe Integration',
        image: '/app-hand.png',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
        category: 'Web Development',
        challenge: 'Skalierbarkeit und Performance bei hoher Nutzerlast',
        solution: 'Implementierung von Server-Side Rendering und Caching-Strategien'
    },
    {
        id: '2',
        title: 'Cloud Migration',
        description: 'Migration einer Legacy-Infrastruktur zu AWS mit Microservices-Architektur',
        image: '/app-hand.png',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        category: 'Cloud',
        challenge: 'Nahtlose Migration ohne Downtime',
        solution: 'Schrittweise Migration mit Blue-Green Deployment'
    },
    {
        id: '3',
        title: 'Security Dashboard',
        description: 'Entwicklung eines Security Monitoring Dashboards für Enterprise-Kunden',
        image: '/app-hand.png',
        technologies: ['React', 'GraphQL', 'Node.js', 'ElasticSearch'],
        category: 'Security',
        challenge: 'Echtzeitverarbeitung von Sicherheitsdaten',
        solution: 'Event-Driven Architecture mit Redis Pub/Sub'
    }
]

export const ProjectGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState('Alle')
    const filteredProjects = selectedCategory === 'Alle'
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    return (
        <div className="space-y-8">
            <ProjectFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all">
                        <div className="relative h-48">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <Link href={`/projekte/${project.id}`} className="block">
                                <Button variant="outline" size="sm" className="w-full">
                                    Details ansehen
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-600">
                        Keine Projekte in dieser Kategorie gefunden.
                    </p>
                </div>
            )}
        </div>
    )
}