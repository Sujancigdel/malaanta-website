"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Truck } from "lucide-react";

export default function TheProblem() {
    const problems = [
        {
            icon: <AlertTriangle size={32} className="text-red-500" />,
            title: "Landfill Dependency",
            description: "Kathmandu Valley generates 1,200+ tons of waste daily, most of which ends up in landfills, causing environmental hazards."
        },
        {
            icon: <Truck size={32} className="text-orange-500" />,
            title: "Inefficient Collection",
            description: "Irregular pickup schedules lead to piled-up garbage, foul odors, and health risks for communities."
        },
        {
            icon: <TrendingUp size={32} className="text-yellow-500" />,
            title: "Lost Value",
            description: "Without proper segregation, valuable resources like compostable organics and recyclables are lost forever."
        }
    ];

    return (
        <section id="problem" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        The <span className="text-primary">Challenge</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Waste management in Nepal faces critical challenges that require immediate and innovative solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{problem.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
