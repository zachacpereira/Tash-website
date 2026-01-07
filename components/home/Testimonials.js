import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sophie M.',
        location: 'Notting Hill',
        text: 'Sortd transformed my flat after a difficult divorce. They handled everything with such sensitivity and care. I can finally breathe in my own home again.',
        service: 'Full Home Declutter',
    },
    {
        name: 'James & Claire T.',
        location: 'Richmond',
        text: 'Moving with two young children felt impossible. The Sortd team unpacked our entire house in one day. We were cooking dinner in an organised kitchen by 6pm.',
        service: 'Unpacking Service',
    },
    {
        name: 'Dr. Priya S.',
        location: 'Hampstead',
        text: 'As a busy surgeon, I had no time to organise my home office. Now everything has a place, and I\'m more productive than ever. Worth every penny.',
        service: 'Home Office Reorganisation',
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm tracking-[0.2em] text-[#8B9D77]">TESTIMONIALS</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight">
                        What our clients say
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative"
                        >
                            <div className="h-full p-8 rounded-3xl bg-[#F9F7F4] relative">
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-[#8B9D77]/20 absolute top-6 right-6" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#8B9D77] text-[#8B9D77]" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-[#2D2D2D]/70 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="mt-8 pt-6 border-t border-[#E8DDD4]">
                                    <div className="font-medium text-[#2D2D2D]">{testimonial.name}</div>
                                    <div className="text-sm text-[#2D2D2D]/50">{testimonial.location}</div>
                                    <div className="mt-2 inline-block px-3 py-1 bg-[#8B9D77]/10 text-[#8B9D77] text-xs rounded-full">
                                        {testimonial.service}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
