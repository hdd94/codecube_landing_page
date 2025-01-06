import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import { formatDate } from '@/lib/utils'

const FeaturedBlog = () => {
    // Zeige nur die neuesten 3 Blog-Posts
    const latestPosts = blogPosts.slice(0, 3)

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Blog & News</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Entdecken Sie spannende Einblicke in die neuesten Technologietrends
                        und Best Practices aus der IT-Welt.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {latestPosts.map((post) => (
                        <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all">
                            <div className="relative h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge>{post.category}</Badge>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium truncate">{post.author.name}</p>
                                        <p className="text-sm text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                    <span>{formatDate(post.publishedAt)}</span>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        <span>{post.readTime} Min.</span>
                                    </div>
                                </div>

                                <Link href={`/blog/${post.id}`} className="block">
                                    <Button variant="outline" size="sm" className="w-full">
                                        Weiterlesen
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/blog">
                        <Button size="lg">Alle Blogbeiträge ansehen</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedBlog