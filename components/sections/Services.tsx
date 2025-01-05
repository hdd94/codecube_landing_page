"use client";

import { Code, Box, Shield } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<Code className="w-6 h-6"/>}
                        title="Custom Development"
                        description="Tailored software solutions built with modern technologies to meet your specific needs."
                    />
                    <ServiceCard
                        icon={<Box className="w-6 h-6"/>}
                        title="App Development"
                        description="Native and cross-platform mobile applications that deliver exceptional user experiences."
                    />
                    <ServiceCard
                        icon={<Shield className="w-6 h-6"/>}
                        title="Technical Consulting"
                        description="Expert guidance on architecture, technology stack, and best practices."
                    />
                </div>
            </div>
        </section>
    )
}