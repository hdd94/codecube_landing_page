import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/lib/projects'

async function getProject(id: string) {
    const project = projects.find(p => p.id === id)
    if (!project) return null
    return project
}

export default async function ProjectDetailPage({
                                                    params
                                                }: {
    params: { id: string }
}) {
    const project = await getProject(params.id)

    if (!project) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="relative h-96 mb-8">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="prose max-w-none">
                    <h2>Projektbeschreibung</h2>
                    <p>{project.description}</p>

                    {project.challenge && (
                        <>
                            <h2>Herausforderung</h2>
                            <p>{project.challenge}</p>
                        </>
                    )}

                    {project.solution && (
                        <>
                            <h2>Lösung</h2>
                            <p>{project.solution}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}