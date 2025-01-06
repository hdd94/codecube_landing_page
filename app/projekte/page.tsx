// app/projekte/page.tsx
import { ProjectGrid } from '@/components/projects/ProjectGrid'

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Unsere Projekte</h1>
            <ProjectGrid />
        </div>
    )
}