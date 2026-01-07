import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Our Approach', href: '#sustainability' },
        { name: 'How It Works', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-[#F9F7F4]">
            <style>{`
                :root {
                    --cream: #F9F7F4;
                    --charcoal: #2D2D2D;
                    --sage: #8B9D77;
                    --blush: #E8DDD4;
                    --warm-grey: #A69F97;
                }
                html {
                    scroll-behavior: smooth;
                }
                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
            `}</style>

            {/* Navigation */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? 'bg-[#F9F7F4]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
            >
                <nav className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        <Link to={createPageUrl('Home')} className="relative z-10">
                            <span className="text-2xl font-light tracking-[0.2em] text-[#2D2D2D]">
                                SORTD
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm tracking-wide text-[#2D2D2D]/70 hover:text-[#2D2D2D] transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="px-6 py-2.5 bg-[#2D2D2D] text-white text-sm tracking-wide rounded-full hover:bg-[#8B9D77] transition-all duration-300"
                            >
                                Book a Consultation
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-[#2D2D2D]"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#F9F7F4] border-t border-[#E8DDD4]"
                        >
                            <div className="px-6 py-8 space-y-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block text-lg text-[#2D2D2D]/80 hover:text-[#2D2D2D]"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="inline-block px-8 py-3 bg-[#2D2D2D] text-white rounded-full"
                                >
                                    Book a Consultation
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-[#2D2D2D] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="md:col-span-2">
                            <span className="text-2xl font-light tracking-[0.2em]">SORTD</span>
                            <p className="mt-4 text-white/60 max-w-sm leading-relaxed">
                                Transforming London homes through thoughtful decluttering, 
                                sustainable practices, and beautiful organisation.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm tracking-wider mb-4 text-white/40">SERVICES</h4>
                            <ul className="space-y-3 text-white/70">
                                <li><a href="#services" className="hover:text-white transition-colors">Decluttering</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Unpacking</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Reorganising</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm tracking-wider mb-4 text-white/40">CONTACT</h4>
                            <ul className="space-y-3 text-white/70">
                                <li>London, UK</li>
                                <li>hello@sortd.co.uk</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/40 text-sm">© 2024 Sortd. All rights reserved.</p>
                        <p className="text-white/40 text-sm">Serving Greater London</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
