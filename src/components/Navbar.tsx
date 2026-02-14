"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Problem", href: "#problem" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Services", href: "#services" },
        { name: "Impact", href: "#impact" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full">
                        <Image
                            src="/logo.png"
                            alt="Malaanta Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-gray-900" : "text-gray-900"}`}>
                        Malaanta
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg shadow-primary/20"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="mt-4 w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
