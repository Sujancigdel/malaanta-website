"use client";

import { motion } from "framer-motion";

export default function ImpactVision() {
    return (
        <section id="impact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 via-gray-900 to-gray-900"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Vision for <span className="text-primary">2030</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We envision a cleaner Kathmandu where zero waste ends up in landfills. By leveraging technology and community participation,
                            we aim to build a robust circular economy model that can be replicated across Nepal.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Reduce landfill usage by 80%",
                                "Create 500+ green jobs in waste sector",
                                "Digital waste tracking for every household",
                                "Fully circular organic waste processing"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
                    >
                        <div className="space-y-8">
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">Commitment to Segregation</div>
                            </div>
                            <div className="h-px bg-gray-700"></div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">Digital Support</div>
                            </div>
                            <div className="h-px bg-gray-700"></div>
                            <div>
                                <div className="text-4xl font-bold text-primary mb-1">Zero</div>
                                <div className="text-gray-400 text-sm uppercase tracking-wider">Tolerance for Illegal Dumping</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
