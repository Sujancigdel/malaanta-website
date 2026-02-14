import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white p-1">
                                <Image
                                    src="/logo.png"
                                    alt="Malaanta Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Malaanta
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Building a smarter, cleaner, and more sustainable waste system for Nepal.
                            Join us in creating a circular economy.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-4">
                            {["About", "Services", "Impact", "FAQ", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="text-primary flex-shrink-0" size={20} />
                                <span>Thali, Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="text-primary flex-shrink-0" size={20} />
                                <a href="tel:+9779841278652" className="hover:text-white transition-colors">9841278652</a>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="text-primary flex-shrink-0" size={20} />
                                <a href="mailto:info@malaanta.com.np" className="hover:text-white transition-colors">info@malaanta.com.np</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Malaanta. All rights reserved. <br className="md:hidden" />
                        Operated by Malaanta Groups Pvt. Ltd.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
