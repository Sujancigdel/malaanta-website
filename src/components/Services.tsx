"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Truck, Leaf, Recycle, Users } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Home size={24} />,
            title: "Household Collection",
            description: "Regular scheduled pickups for reliable home waste management."
        },
        {
            icon: <Briefcase size={24} />,
            title: "Business Solutions",
            description: "Customized waste plans for offices, restaurants, and hotels."
        },
        {
            icon: <Truck size={24} />,
            title: "On-Demand Pickup",
            description: "Request an extra pickup anytime via our digital platform."
        },
        {
            icon: <Leaf size={24} />,
            title: "Composting Support",
            description: "We help you turn organic waste into nutrient-rich compost."
        },
        {
            icon: <Recycle size={24} />,
            title: "Recycling Coordination",
            description: "Ensuring paper, plastic, and glass get recycled properly."
        },
        {
            icon: <Users size={24} />,
            title: "Training & Education",
            description: "Workshops on segregation and sustainable practices."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive waste management solutions aimed at Households, Businesses, and Institutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
