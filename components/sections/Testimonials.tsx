export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                    What Our Customers Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="p-6 bg-gray-50 rounded-lg">
                            <p className="text-gray-600">
                                "Amazing product that has transformed how we work!"
                            </p>
                            <div className="mt-4">
                                <p className="font-medium text-gray-900">Customer Name</p>
                                <p className="text-gray-600">Position, Company</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}