export default function Benefits() {
    return (
        <section id="benefits" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                    Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-md bg-blue-500 flex items-center justify-center">
                                    <span className="text-white">✓</span>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Benefit {item}</h3>
                                <p className="mt-2 text-gray-600">
                                    Detailed explanation of this specific benefit.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}