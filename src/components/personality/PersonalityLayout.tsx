'use client';

import { ReactNode } from 'react';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';
import CustomCursor from '@/components/CustomCursor';
import ParticleSystem from '@/components/ParticleSystem';
import MorphingThread from '@/components/MorphingThread';
import { motion } from 'framer-motion';

interface PersonalityLayoutProps {
    children: ReactNode;
    personality: PersonalityType;
}

export default function PersonalityLayout({ children, personality }: PersonalityLayoutProps) {
    const config = getPersonalityConfig(personality);

    return (
        <div className={`min-h-screen bg-base-bg text-base-text relative overflow-x-hidden ${personality}-theme`}>
            {/* Background Elements */}
            <ParticleSystem personality={personality} density={40} />

            {/* Custom Cursor */}
            <CustomCursor personality={personality} />

            {/* Floating Navigation */}
            <MorphingThread currentPersonality={personality} />

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                {children}
            </motion.main>

            {/* Personality-specific overlay/vignette if needed */}
            <div
                className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay opacity-20"
                style={{
                    background: `radial-gradient(circle at center, transparent 0%, ${config.accentColor} 100%)`
                }}
            />
        </div>
    );
}
