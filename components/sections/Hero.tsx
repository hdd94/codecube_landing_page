import {Button} from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-gray-900 text-5xl md:text-7xl font-bold mb-6">
                    Code. Cube. Create.
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
                    Transforming ideas into applications through innovative development solutions.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                        Start Project
                    </button>
                    <button className="text-gray-900 border border-gray-300 px-8 py-3 rounded-lg font-semibold">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}