"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full">
                        Waste Management Reimagined
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                        Reliable Waste <br />
                        <span className="text-primary">Collection & Management</span> Platform
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-500 italic">
                        “फोहोर र मैलो, सुनको थैलो”
                    </p>
                    <p className="text-lg text-gray-600 md:w-3/4 leading-relaxed">
                        Malaanta is a waste technology company building a smarter, cleaner,
                        and more sustainable waste system for Nepal.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-green-600 transition-all hover:scale-105 shadow-xl shadow-primary/30"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="#about"
                            className="px-8 py-4 bg-white text-gray-800 font-bold border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-gray-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-green-100 flex items-center justify-center p-8"
                >
                    {/* Placeholder for Environmental Illustration */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-90 hover:scale-105 transition-transform duration-700"></div>
                    <div className="relative z-10 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg max-w-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">♻️</div>
                            <div className="font-bold text-gray-800">Smart Collection</div>
                        </div>
                        <p className="text-gray-600 text-sm">Efficient routing and timely pickups for a cleaner city.</p>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        </section>
    );
}
