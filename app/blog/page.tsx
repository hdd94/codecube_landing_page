import { BlogGrid } from '@/components/blog/BlogGrid'

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Blog & News</h1>
                <p className="text-gray-600">
                    Aktuelle Einblicke in Technologietrends, Best Practices und Innovationen
                    aus der IT-Welt.
                </p>
            </div>
            <BlogGrid />
        </div>
    )
}