'use client';

import { motion } from 'framer-motion';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';
import Image from 'next/image';
import { letterReveal, sentenceContainer, fadeInUp } from '@/utils/animations';

interface HeroSectionProps {
    personality: PersonalityType;
}

export default function HeroSection({ personality }: HeroSectionProps) {
    const config = getPersonalityConfig(personality);

    // Split title into letters for animation
    const titleWords = config.title.split(' ');

    return (
        <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="order-2 lg:order-1 relative z-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={sentenceContainer}
                    >
                        {/* Tagline */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl font-medium mb-4"
                            style={{ color: config.accentColor }}
                        >
                            {config.tagline}
                        </motion.p>

                        {/* Title - Character Reveal */}
                        <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight mb-8 leading-none">
                            {titleWords.map((word, i) => (
                                <span key={i} className="inline-block mr-[0.2em] whitespace-nowrap">
                                    {word.split('').map((char, j) => (
                                        <motion.span
                                            key={j}
                                            variants={letterReveal}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className="text-base-text/70 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
                        >
                            {config.description}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-base-text text-base-bg rounded-full font-bold text-lg tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-3"
                            style={{ boxShadow: `0 10px 30px -10px ${config.accentColor}` }}
                            onClick={() => {
                                const projectsSection = document.getElementById('projects');
                                if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Work
                            <span>↓</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Hero Image / Silhouette */}
                <motion.div
                    className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] flex items-center justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {/* Background Blob/Shape behind image */}
                    <div
                        className="absolute inset-0 z-0 rounded-full blur-[100px] opacity-40 mix-blend-multiply"
                        style={{ background: config.accentColor }}
                    />

                    {/* Placeholder Image - The user can replace this with specific silhouette */}
                    <div className="relative z-10 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out flex items-center justify-center">
                        {/* Fallback visual if image missing */}
                        <div className="text-9xl opacity-10 font-black">{config.icon}</div>

                        {/* Actual Image Tag (Commented out until assets exist) */}
                        {/* 
             <Image 
               src={`/images/personalities/${personality}-hero.png`}
               alt={config.name}
               fill
               className="object-contain"
               priority
             /> 
             */}
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-sm font-mono opacity-50 uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
