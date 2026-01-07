import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Sustainability from '../components/home/Sustainability';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <Sustainability />
            <Process />
            <Testimonials />
            <Contact />
        </div>
    );
}
