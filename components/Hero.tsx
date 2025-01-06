import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Innovative IT-Lösungen für Ihren Erfolg
                    </h1>
                    <p className="text-xl mb-8 text-blue-100">
                        Wir unterstützen Unternehmen dabei, ihre digitale Transformation erfolgreich zu gestalten.
                        Mit modernsten Technologien und jahrelanger Expertise.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Button className="bg-white text-blue-600 hover:bg-blue-50">
                            Projekte ansehen
                        </Button>
                        <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                            Kontakt aufnehmen
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero