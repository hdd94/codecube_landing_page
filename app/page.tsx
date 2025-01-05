import Navigation from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Benefits from '@/components/sections/Benefits'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
  )
}