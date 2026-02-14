"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Get in <span className="text-primary">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Have questions or want to sign up for our services? We're here to help!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Visit Us</h3>
                                    <p className="text-gray-600">Thali, Kathmandu, Nepal</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600">
                                        <a href="tel:+9779841278652" className="hover:text-primary transition-colors">9841278652</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Email Us</h3>
                                    <p className="text-gray-600">info@malaanta.com.np</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="mt-8 h-64 w-full rounded-xl overflow-hidden shadow-md border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.84687895286!2d85.399583!3d27.712065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a60156d959f%3A0xe5426189914b1e5!2sThali%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="98XXXXXXXX"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30"
                            >
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
