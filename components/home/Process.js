import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList, Sparkles, Home } from 'lucide-react';

const steps = [
    {
        icon: MessageCircle,
        number: '01',
        title: 'Free Consultation',
        description: 'We visit your home to understand your space, lifestyle, and goals. No obligation, just a friendly chat.',
    },
    {
        icon: ClipboardList,
        number: '02',
        title: 'Bespoke Plan',
        description: 'You receive a tailored proposal with clear pricing, timelines, and exactly what we\'ll achieve together.',
    },
    {
        icon: Sparkles,
        number: '03',
        title: 'Transformation',
        description: 'Our team works their magic—decluttering, organising, and styling your space to perfection.',
    },
    {
        icon: Home,
        number: '04',
        title: 'Enjoy Your Space',
        description: 'Walk into a home that feels lighter, works better, and brings you joy every single day.',
    },
];

export default function Process() {
    return (
        <section id="process" className="py-32 bg-[#F9F7F4]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm tracking-[0.2em] text-[#8B9D77]">HOW IT WORKS</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight">
                        Simple steps to serenity
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8DDD4] to-transparent" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative text-center lg:text-left"
                            >
                                {/* Icon Circle */}
                                <div className="relative inline-flex lg:block">
                                    <div className="w-20 h-20 rounded-full bg-white shadow-lg shadow-[#2D2D2D]/5 flex items-center justify-center mx-auto lg:mx-0">
                                        <step.icon className="w-8 h-8 text-[#8B9D77]" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2D2D2D] text-white text-xs flex items-center justify-center font-medium">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="mt-6 text-xl font-light text-[#2D2D2D]">{step.title}</h3>
                                <p className="mt-3 text-[#2D2D2D]/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
