"use client";

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/types'
import { BlogFilter } from './BlogFilter'
import { formatDate } from '@/lib/utils'
import { Clock } from 'lucide-react'

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Die Zukunft der Cloud-Native Entwicklung',
        description: 'Ein Einblick in moderne Architekturen und Best Practices für Cloud-Native Anwendungen.',
        content: '... Ausführlicher Blogpost-Inhalt ...',
        image: '/blog/app-hand.png',
        author: {
            name: 'Dr. Julia Weber',
            avatar: '/team/app-hand.png',
            role: 'Cloud Architect'
        },
        category: 'Cloud',
        tags: ['Kubernetes', 'Microservices', 'DevOps'],
        publishedAt: '2024-01-15',
        readTime: 8
    },
    {
        id: '2',
        title: 'Cybersicherheit im Jahr 2024',
        description: 'Aktuelle Bedrohungen und Schutzmaßnahmen für Unternehmen.',
        content: '... Ausführlicher Blogpost-Inhalt ...',
        image: '/blog/app-hand.png',
        author: {
            name: 'Marcus Schmidt',
            avatar: '/team/app-hand.png',
            role: 'Security Expert'
        },
        category: 'Security',
        tags: ['Cybersecurity', 'Ransomware', 'Zero Trust'],
        publishedAt: '2024-01-10',
        readTime: 6
    },
    {
        id: '3',
        title: 'KI in der Softwareentwicklung',
        description: 'Wie künstliche Intelligenz den Entwicklungsprozess revolutioniert.',
        content: '... Ausführlicher Blogpost-Inhalt ...',
        image: '/blog/app-hand.png',
        author: {
            name: 'Sarah Fischer',
            avatar: '/team/app-hand.png',
            role: 'AI Developer'
        },
        category: 'AI',
        tags: ['Machine Learning', 'AI', 'Automation'],
        publishedAt: '2024-01-05',
        readTime: 10
    }
]

export const BlogGrid = () => {
    const [selectedCategory, setSelectedCategory] = useState('Alle')
    const filteredPosts = selectedCategory === 'Alle'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory)

    return (
        <div className="space-y-8">
            <BlogFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
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
                                <div>
                                    <p className="font-medium">{post.author.name}</p>
                                    <p className="text-sm text-gray-600">{post.author.role}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{post.description}</p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{formatDate(post.publishedAt)}</span>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    <span>{post.readTime} Min. Lesezeit</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <Link
                                href={`/blog/${post.id}`}
                                className="block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Weiterlesen →
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-600">
                        Keine Blog-Beiträge in dieser Kategorie gefunden.
                    </p>
                </div>
            )}
        </div>
    )
}