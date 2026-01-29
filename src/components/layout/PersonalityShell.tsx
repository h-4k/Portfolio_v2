'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PersonalityType } from '@/types';
import IMAGE from 'next/image';
import { getPersonalityConfig } from '@/utils/personality';
import Footer from './Footer';
import ContactForm from '../sections/ContactForm';

interface PersonalityShellProps {
    personalityId: PersonalityType;
    children: React.ReactNode;
}

export default function PersonalityShell({ personalityId, children }: PersonalityShellProps) {
    const router = useRouter();
    const config = getPersonalityConfig(personalityId);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`min-h-screen w-full relative overflow-hidden ${config.id}-theme`}>
            {/* Background Layer with Theme Color */}
            <div
                className="fixed inset-0 z-0 transition-colors duration-500"
                style={{ backgroundColor: `var(--${config.id}-bg)` }}
            />

            {/* Navigation Bar with Blur on Scroll */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center justify-between px-8 md:px-12 mix-blend-difference text-white transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-white/5' : ''
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
                <button
                    onClick={() => router.push('/hero')}
                    className="flex items-center gap-2 font-mono text-sm tracking-widest hover:opacity-70 transition-opacity uppercase group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Back to Hub
                </button>

                <div className="flex items-center gap-2 font-mono text-xs tracking-widest opacity-60">
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    SYSTEM: {config.name.toUpperCase()}
                </div>
            </motion.nav>

            {/* Main Content Layout */}
            <main className="relative z-10 w-full h-full flex flex-col md:flex-row">

                {/* Left Side: Scrollable Content */}
                <div className="w-full md:w-1/2 min-h-screen p-8 md:p-20 pt-32 md:pt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {children}

                        {/* Global Sections for detailed pages */}
                        <div className="mt-20 border-t border-black/5 pt-12">
                            <ContactForm />
                            <Footer />
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Fixed Character Viz */}
                <div className="hidden md:block w-1/2 fixed right-0 top-0 h-screen pointer-events-none z-0">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Platform / Background Element */}
                        <motion.div
                            className="absolute w-[600px] h-[600px] opacity-20 blur-3xl rounded-full"
                            style={{ background: config.accentColor }}
                            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        {/* Character Figure */}
                        <motion.div
                            className="relative z-10 w-full h-[85vh] max-w-[800px] flex items-end justify-center pb-0"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            {/* Dark Mode Image */}
                            <div className="show-only-dark w-full h-full relative">
                                <Image
                                    src={`/images/figures/${personalityId === 'aerospace' ? 'aero' : personalityId}_figure_dark.png`}
                                    alt={`${config.name} Character Dark`}
                                    fill
                                    className="object-contain object-bottom drop-shadow-2xl"
                                    priority
                                    sizes="50vw"
                                />
                            </div>

                            {/* Light Mode Image */}
                            <div className="show-only-light w-full h-full relative">
                                <Image
                                    src={`/images/figures/${personalityId === 'aerospace' ? 'aero' : personalityId}_figure_light.png`}
                                    alt={`${config.name} Character Light`}
                                    fill
                                    className="object-contain object-bottom drop-shadow-2xl"
                                    priority
                                    sizes="50vw"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </main>
        </div>
    );
}
