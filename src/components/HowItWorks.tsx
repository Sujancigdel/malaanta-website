"use client";

import { motion } from "framer-motion";
import { Trash2, Truck, RefreshCw, Sprout } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            icon: <Trash2 size={28} />,
            title: "Segregation at Source",
            description: "Separate waste into Red (Hazardous), Blue (Recyclable), and Green (Organic) waste bags.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Truck size={28} />,
            title: "Scheduled Collection",
            description: "Reliable pickups based on a digital schedule you can track.",
            color: "bg-yellow-100 text-yellow-600"
        },
        {
            icon: <RefreshCw size={28} />,
            title: "Smart Processing",
            description: "Waste is sorted at our facility to maximize resource recovery.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <Sprout size={28} />,
            title: "Value Recovery",
            description: "Organics become compost, recyclables are sold, minimizing landfill use.",
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How <span className="text-primary">Malaanta</span> Works
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A simple, transparent process to transform waste management.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`w-24 h-24 ${step.color} rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white`}>
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed px-2">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
