import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send the data
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-32 bg-[#F9F7F4]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm tracking-[0.2em] text-[#8B9D77]">GET IN TOUCH</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-light text-[#2D2D2D] tracking-tight">
                            Ready to transform
                            <br />
                            your space?
                        </h2>
                        <p className="mt-6 text-[#2D2D2D]/60 text-lg leading-relaxed max-w-md">
                            Book your free consultation today. We'll visit your home, 
                            understand your needs, and create a bespoke plan just for you.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    <MapPin className="w-5 h-5 text-[#8B9D77]" />
                                </div>
                                <div>
                                    <div className="text-sm text-[#2D2D2D]/50">Service Area</div>
                                    <div className="text-[#2D2D2D]">Greater London, UK</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    <Mail className="w-5 h-5 text-[#8B9D77]" />
                                </div>
                                <div>
                                    <div className="text-sm text-[#2D2D2D]/50">Email</div>
                                    <div className="text-[#2D2D2D]">hello@sortd.co.uk</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                    <Phone className="w-5 h-5 text-[#8B9D77]" />
                                </div>
                                <div>
                                    <div className="text-sm text-[#2D2D2D]/50">Phone</div>
                                    <div className="text-[#2D2D2D]">020 XXXX XXXX</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-[#8B9D77]/20 flex items-center justify-center mx-auto">
                                        <CheckCircle className="w-10 h-10 text-[#8B9D77]" />
                                    </div>
                                    <h3 className="mt-6 text-2xl font-light text-[#2D2D2D]">Thank you!</h3>
                                    <p className="mt-3 text-[#2D2D2D]/60">
                                        We'll be in touch within 24 hours to arrange your free consultation.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[#2D2D2D]/5">
                                <h3 className="text-xl font-light text-[#2D2D2D] mb-8">
                                    Book Your Free Consultation
                                </h3>

                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-[#2D2D2D]/60 mb-2">Your Name</label>
                                            <Input
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Jane Smith"
                                                className="h-12 border-[#E8DDD4] focus:border-[#8B9D77] focus:ring-[#8B9D77]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#2D2D2D]/60 mb-2">Email</label>
                                            <Input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="jane@example.com"
                                                className="h-12 border-[#E8DDD4] focus:border-[#8B9D77] focus:ring-[#8B9D77]"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm text-[#2D2D2D]/60 mb-2">Phone</label>
                                            <Input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="07XXX XXXXXX"
                                                className="h-12 border-[#E8DDD4] focus:border-[#8B9D77] focus:ring-[#8B9D77]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#2D2D2D]/60 mb-2">Service Interest</label>
                                            <Select
                                                value={formData.service}
                                                onValueChange={(value) => setFormData({ ...formData, service: value })}
                                            >
                                                <SelectTrigger className="h-12 border-[#E8DDD4]">
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="decluttering">Decluttering</SelectItem>
                                                    <SelectItem value="unpacking">Unpacking</SelectItem>
                                                    <SelectItem value="reorganising">Reorganising</SelectItem>
                                                    <SelectItem value="multiple">Multiple Services</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-[#2D2D2D]/60 mb-2">Tell us about your project</label>
                                        <Textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Describe your space and what you'd like to achieve..."
                                            className="min-h-[120px] border-[#E8DDD4] focus:border-[#8B9D77] focus:ring-[#8B9D77]"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-[#2D2D2D] hover:bg-[#8B9D77] text-white rounded-full transition-all duration-300"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Enquiry
                                    </Button>

                                    <p className="text-xs text-center text-[#2D2D2D]/40">
                                        We typically respond within 24 hours
                                    </p>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
