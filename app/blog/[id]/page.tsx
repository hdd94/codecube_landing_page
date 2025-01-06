import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { blogPosts } from '@/lib/blog-data'
import { formatDate } from '@/lib/utils'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

async function getBlogPost(id: string) {
    const post = blogPosts.find(p => p.id === id)
    if (!post) return null
    return post
}

export default async function BlogPostPage({
                                               params
                                           }: {
    params: { id: string }
}) {
    const post = await getBlogPost(params.id)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück zum Blog
                </Link>

                <div className="relative h-96 mb-8">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                <div className="mb-8">
                    <Badge className="mb-4">{post.category}</Badge>
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center justify-between py-4 border-y border-gray-200">
                        <div className="flex items-center space-x-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-medium">{post.author.name}</p>
                                <p className="text-sm text-gray-600">{post.author.role}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-600">
                            <span>{formatDate(post.publishedAt)}</span>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{post.readTime} Min. Lesezeit</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none">
                    {post.content}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h2 className="text-xl font-bold mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}