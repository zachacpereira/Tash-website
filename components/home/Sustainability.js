import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, RefreshCw, Heart, TrendingDown } from 'lucide-react';

const stats = [
    { icon: RefreshCw, value: '85%', label: 'Items rehomed or recycled' },
    { icon: Leaf, value: '0', label: 'Items sent to landfill' },
    { icon: TrendingDown, value: '2T+', label: 'CO₂ emissions saved' },
];

export default function Sustainability() {
    return (
        <section id="sustainability" className="py-32 bg-[#2D2D2D] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm tracking-[0.2em] text-[#8B9D77]">OUR APPROACH</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight leading-tight">
                            Decluttering that
                            <br />
                            <span className="text-[#8B9D77]">gives back</span>
                        </h2>
                        <p className="mt-8 text-white/60 leading-relaxed text-lg">
                            Every item we remove from your home is treated with intention. 
                            We don't just clear—we curate, restore, and find new homes for 
                            your unwanted possessions.
                        </p>
                        <p className="mt-6 text-white/60 leading-relaxed">
                            In a world of hyperconsumption, we believe in circular living. 
                            Your pre-loved furniture becomes someone's first sofa. Your 
                            outgrown clothes find their way to someone who needs them. 
                            Nothing is wasted.
                        </p>

                        {/* Values */}
                        <div className="mt-12 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#8B9D77]/20 flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-5 h-5 text-[#8B9D77]" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Refurbish & Rehome</h4>
                                    <p className="mt-1 text-sm text-white/50">
                                        We restore and resell quality pieces, with proceeds often supporting local charities.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#8B9D77]/20 flex items-center justify-center flex-shrink-0">
                                    <Leaf className="w-5 h-5 text-[#8B9D77]" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Zero-Waste Philosophy</h4>
                                    <p className="mt-1 text-sm text-white/50">
                                        What can't be rehomed is responsibly recycled. We partner with certified facilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-[#8B9D77]/10 rounded-[3rem] blur-2xl" />
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                            <h3 className="text-xl font-light mb-8">Our Impact</h3>
                            <div className="space-y-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-[#8B9D77]/20 flex items-center justify-center">
                                            <stat.icon className="w-6 h-6 text-[#8B9D77]" />
                                        </div>
                                        <div>
                                            <div className="text-4xl font-light text-[#8B9D77]">{stat.value}</div>
                                            <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-sm text-white/40 italic">
                                    "True sustainability isn't just about recycling—it's about 
                                    consuming less and valuing more."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
