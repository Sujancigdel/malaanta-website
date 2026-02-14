"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What areas do you serve?",
            answer: "We currently serve the Kathmandu Valley, with a primary focus on residential areas in Thali and surrounding neighborhoods. We are expanding rapidly."
        },
        {
            question: "How does waste segregation work?",
            answer: "We provide guidelines for segregating waste into three categories: Organic (Green), Recyclable (Blue), and Hazardous/Reject (Red). Segregation at source is mandatory for our service."
        },
        {
            question: "Do you collect recyclable waste?",
            answer: "Yes! We collect paper, plastics, glass, and metals. These are processed and sent to recycling partners instead of landfills."
        },
        {
            question: "How can businesses partner with Malaanta?",
            answer: "Businesses contribute significantly to waste generation. We offer tailored removal plans and sustainability reports for corporate partners. Contact us to set up a consultation."
        },
        {
            question: "How do I contact Malaanta for service?",
            answer: "You can reach us at 9841278652 or visit our office in Thali. We also have a digital registration form available on this website."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
                            >
                                <span className="font-semibold text-gray-800">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="text-gray-500" />
                                ) : (
                                    <ChevronDown className="text-gray-500" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-5 border-t border-gray-100 bg-gray-50 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
