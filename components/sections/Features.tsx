"use client";

export default function Features() {
    return (
        <section
            id="features"
            className="py-16 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="p-6 border rounded-lg">
                            <h3 className="text-lg font-medium text-gray-900">Feature {item}</h3>
                            <p className="mt-2 text-gray-600">
                                Description of feature and its benefits to the user.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}