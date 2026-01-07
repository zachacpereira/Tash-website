import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, PackageOpen, Sparkles, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Recycle,
        title: 'Decluttering',
        subtitle: 'Sustainable Home Clearing',
        description: 'We thoughtfully remove unwanted items from your home, then rework, refurbish, and rehome them. Every piece gets a second chance—reducing waste and combating hyperconsumption.',
        features: ['Full home or room-by-room clearing', 'Items refurbished & resold responsibly', 'Eco-conscious disposal', 'Detailed inventory provided'],
        accent: 'bg-[#8B9D77]',
    },
    {
        icon: PackageOpen,
        title: 'Unpacking',
        subtitle: 'Move-In Architecture',
        description: 'Our unpacking architects transform the chaos of moving into a beautifully organised home. We focus on aesthetics and functionality from box one.',
        features: ['Complete box unpacking', 'Aesthetic placement & styling', 'Kitchen & wardrobe organisation', 'Same-day transformation'],
        accent: 'bg-[#2D2D2D]',
    },
    {
        icon: Sparkles,
        title: 'Reorganising',
        subtitle: 'Space Optimisation',
        description: 'Reimagine your existing space. We analyse how you live and create systems that work for your lifestyle, bringing order and beauty to every corner.',
        features: ['Bespoke storage solutions', 'Room flow optimisation', 'Seasonal wardrobe rotation', 'Ongoing maintenance plans'],
        accent: 'bg-[#E8DDD4]',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm tracking-[0.2em] text-[#8B9D77]">OUR SERVICES</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight">
                        How we can help
                    </h2>
                    <p className="mt-6 text-[#2D2D2D]/60 max-w-2xl mx-auto">
                        From complete home transformations to targeted room refreshes, 
                        we offer bespoke solutions for every space and lifestyle.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="h-full p-8 rounded-3xl bg-[#F9F7F4] border border-transparent hover:border-[#E8DDD4] transition-all duration-500">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl ${service.accent} flex items-center justify-center mb-6`}>
                                    <service.icon className={`w-6 h-6 ${service.accent === 'bg-[#E8DDD4]' ? 'text-[#2D2D2D]' : 'text-white'}`} />
                                </div>

                                {/* Content */}
                                <span className="text-xs tracking-wider text-[#8B9D77]">{service.subtitle}</span>
                                <h3 className="mt-2 text-2xl font-light text-[#2D2D2D]">{service.title}</h3>
                                <p className="mt-4 text-[#2D2D2D]/60 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="mt-6 space-y-3">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-[#2D2D2D]/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B9D77] mt-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    className="mt-8 inline-flex items-center gap-2 text-sm text-[#2D2D2D] group-hover:text-[#8B9D77] transition-colors"
                                >
                                    Learn more
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
