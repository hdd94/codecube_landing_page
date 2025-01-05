import {Button} from '@/components/ui/Button';

export default function Hero() {
    return (
        <section id="hero" className="bg-white pb-4 pt-24">
            <div className="bg-teal-100 lg:py-48 pt-8 pb-60 relative mx-4 sm:mx-6 lg:mx-8 rounded-3xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
                            DailyFlow: <br/> Your AI Assistant
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Track you daily habits, set reminders, and more with DailyFlow. Our AI assistant helps you
                            build better habits, stay on track, and achieve your personal goals step by step.
                        </p>
                        <div className="mt-8">
                            <Button variant="primary" size="lg">
                                Get the App →
                            </Button>
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="absolute bottom-0 right-0 z-10">
                        <img
                            src="/app-hand.png"
                            alt="DailyFlow App Screenshot"
                            className="max-w-xs sm:max-w-sm lg:max-w-lg rounded-br-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
//