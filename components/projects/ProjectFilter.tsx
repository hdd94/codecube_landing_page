"use client";

import { Button } from '@/components/ui/button'

export const categories = ['Alle', 'Web Development', 'Cloud', 'Mobile', 'Security']

interface ProjectFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

export const ProjectFilter = ({ selectedCategory, onCategoryChange }: ProjectFilterProps) => {
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