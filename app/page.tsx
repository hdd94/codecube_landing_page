import Navigation from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </main>
  )
}