'use client';

import { motion } from 'framer-motion';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';
import Link from 'next/link';

interface MorphingThreadProps {
    currentPersonality: PersonalityType;
}

export default function MorphingThread({ currentPersonality }: MorphingThreadProps) {
    const config = getPersonalityConfig(currentPersonality);

    // Define svg paths for each personality to morph between
    const paths = {
        cyber: "M10 10 H 90 V 90 H 10 Z", // Square/Circuit
        design: "M50 10 C 90 10, 90 90, 50 90 C 10 90, 10 10, 50 10", // Circle/Organic
        music: "M10 50 Q 30 10, 50 50 T 90 50", // Wave
        aerospace: "M50 10 L 90 90 L 50 70 L 10 90 Z", // Rocket/Arrow
    };

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none">
            <Link href="/hero" className="pointer-events-auto group relative flex items-center justify-center">
                {/* The Glowing Thread - SVG Morph */}
                <div className="relative w-16 h-16">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        {/* Glow Filter */}
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <motion.path
                            initial={false}
                            animate={{
                                d: paths[currentPersonality],
                                stroke: config.accentColor,
                                fill: 'transparent' // could fill if needed
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut"
                            }}
                            strokeWidth="3"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            className="drop-shadow-lg"
                        />
                    </svg>

                    {/* Center Hint */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                    >
                        <span className="text-[10px] font-mono tracking-widest text-base-text bg-base-bg/80 px-1 rounded">HUB</span>
                    </motion.div>
                </div>
            </Link>
        </div>
    );
}
