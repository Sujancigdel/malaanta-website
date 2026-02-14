"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        About <span className="text-primary">Malaanta</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Malaanta is a Kathmandu-based waste technology company dedicated to reducing landfill dependency and creating a
                        circular economy in Nepal. We believe that waste is not just refuse, but a resource waiting to be recovered.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            { title: "Technology Driven", desc: "Using digital tools to optimize collection and processing." },
                            { title: "Source Segregation", desc: "Empowering households to sort waste at the source." },
                            { title: "Circular Economy", desc: "Turning organic waste into compost and recyclables into raw materials." }
                        ].map((item, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
