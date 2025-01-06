import { Card, CardContent } from '@/components/ui/card'
import { Shield, Server, Cloud, Users, Monitor, Cpu } from 'lucide-react'

const services = [
    {
        icon: <Cloud className="h-12 w-12 text-blue-600" />,
        title: 'Cloud Services',
        description: 'Migration und Verwaltung Ihrer Systeme in der Cloud mit AWS, Azure oder Google Cloud.'
    },
    {
        icon: <Shield className="h-12 w-12 text-blue-600" />,
        title: 'IT-Sicherheit',
        description: 'Umfassende Sicherheitslösungen zum Schutz Ihrer Unternehmensdaten und Systeme.'
    },
    {
        icon: <Monitor className="h-12 w-12 text-blue-600" />,
        title: 'Softwareentwicklung',
        description: 'Entwicklung maßgeschneiderter Softwarelösungen mit modernsten Technologien.'
    },
    {
        icon: <Server className="h-12 w-12 text-blue-600" />,
        title: 'Infrastruktur',
        description: 'Planung und Implementierung skalierbarer IT-Infrastrukturen.'
    },
    {
        icon: <Users className="h-12 w-12 text-blue-600" />,
        title: 'IT-Consulting',
        description: 'Strategische Beratung für Ihre digitale Transformation und IT-Prozesse.'
    },
    {
        icon: <Cpu className="h-12 w-12 text-blue-600" />,
        title: 'Managed Services',
        description: '24/7 Überwachung und Wartung Ihrer IT-Systeme und Anwendungen.'
    }
]

const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Unsere Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Wir bieten ein breites Spektrum an IT-Dienstleistungen,
                        die perfekt auf Ihre Anforderungen zugeschnitten sind.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services