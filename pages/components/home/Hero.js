import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#F9F7F4]">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#E8DDD4] rounded-full blur-3xl opacity-40" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B9D77] rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="inline-block px-4 py-2 bg-[#8B9D77]/10 text-[#8B9D77] text-sm tracking-wider rounded-full mb-8">
                            SERVING LONDON
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2D2D2D] leading-[1.1] tracking-tight">
                            Create space
                            <br />
                            <span className="text-[#8B9D77]">for what matters</span>
                        </h1>
                        <p className="mt-8 text-lg text-[#2D2D2D]/60 max-w-lg leading-relaxed">
                            Professional decluttering, unpacking, and home organisation services 
                            that transform your space whilst giving unwanted items a second life.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2D] text-white rounded-full hover:bg-[#8B9D77] transition-all duration-300 text-sm tracking-wide"
                            >
                                Book Your Free Consultation
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 border border-[#2D2D2D]/20 text-[#2D2D2D] rounded-full hover:border-[#2D2D2D] transition-all duration-300 text-sm tracking-wide"
                            >
                                Explore Services
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="relative hidden lg:block"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#E8DDD4]">
                                    <img 
                                        src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80"
                                        alt="Organised wardrobe"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square rounded-3xl overflow-hidden bg-[#8B9D77]/20">
                                    <img 
                                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                                        alt="Clean kitchen"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="aspect-square rounded-3xl overflow-hidden bg-[#E8DDD4]">
                                    <img 
                                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
                                        alt="Minimalist living room"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#8B9D77]/20">
                                    <img 
                                        src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&q=80"
                                        alt="Organised shelving"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-5 h-5 text-[#2D2D2D]/40" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
