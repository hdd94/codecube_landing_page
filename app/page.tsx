import Hero from '@/components/Hero'
import Services from '@/components/Services'
import FeaturedProjects from '@/components/FeaturedProjects'
import FeaturedBlog from "@/components/FeaturedBlog";
import Contact from '@/components/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <FeaturedProjects />
            <FeaturedBlog />
            <Contact />
        </>
    )
}