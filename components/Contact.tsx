import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
                        <p className="text-gray-600">
                            Haben Sie Fragen oder möchten Sie ein Projekt besprechen?
                            Kontaktieren Sie uns - wir sind für Sie da.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-6">Kontaktinformationen</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="font-medium">Adresse</p>
                                            <p className="text-gray-600">Techstraße 123<br />80333 München</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Phone className="h-5 w-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="font-medium">Telefon</p>
                                            <p className="text-gray-600">+49 89 123456789</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Mail className="h-5 w-5 text-blue-600 mt-1" />
                                        <div>
                                            <p className="font-medium">E-Mail</p>
                                            <p className="text-gray-600">info@techsolutions.de</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-6">Nachricht senden</h3>
                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Ihr Name"
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Ihre E-Mail"
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                    <div>
                    <textarea
                        placeholder="Ihre Nachricht"
                        className="w-full p-2 border border-gray-300 rounded h-32"
                    ></textarea>
                                    </div>
                                    <Button className="w-full">Nachricht senden</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact