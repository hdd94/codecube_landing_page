export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    challenge?: string;
    solution?: string;
}

export interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: number;
}