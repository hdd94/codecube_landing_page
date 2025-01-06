"use client";

import { Button } from '@/components/ui/button'

const categories = ['Alle', 'Cloud', 'Security', 'AI', 'Development', 'Best Practices']

interface BlogFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export const BlogFilter = ({ selectedCategory, onCategoryChange }: BlogFilterProps) => {
    return (
        <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={category === selectedCategory ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onCategoryChange(category)}
                    className="transition-all"
                >
                    {category}
                </Button>
            ))}
        </div>
    )
}