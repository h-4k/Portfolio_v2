'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useScramble } from '@/hooks/useScramble';

const PERSONALITIES = [
    "CYBER_AGENT",
    "VISUAL_DESIGNER",
    "SONIC_ARCHITECT",
    "AERO_ENGINEER"
];

export default function LoadingPage() {
    const router = useRouter();
    const [currentPersonality, setCurrentPersonality] = useState(0);
    const { scrambledText, isComplete } = useScramble("AYMANE OUG", 50, 500);
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    // Personality Scanner Cycler
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPersonality(prev => (prev + 1) % PERSONALITIES.length);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    // Progress Bar (3.2 seconds to fill)
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + (100 / 32); // 32 intervals at 100ms = 3.2s
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Completion & Redirect (total ~3.5 seconds)
    useEffect(() => {
        if (progress === 100 && isComplete) {
            const timer = setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => {
                    router.push('/hero');
                }, 1000);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [progress, isComplete, router]);

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden cursor-none"
                exit={isExiting ? {
                    y: '-100%',
                    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                } : undefined}
            >
                {/* Cinematic Film Grain Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.15]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '200px 200px'
                    }}
                />

                {/* Architectural SVG Background - "X" Crosshair */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Top-left to bottom-right diagonal */}
                    <motion.line
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        stroke="#dde1d2"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Top-right to bottom-left diagonal */}
                    <motion.line
                        x1="100%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                        stroke="#dde1d2"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    />
                </svg>

                {/* Main Content Container */}
                <div className="relative z-10 flex flex-col items-center gap-8">

                    {/* Main Decryption Title */}
                    <motion.h1
                        className="font-clash text-6xl md:text-9xl font-bold text-white tracking-tight"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                        {scrambledText}
                    </motion.h1>

                    {/* Progress Bar Container */}
                    <div className="flex flex-col items-center gap-3 w-full max-w-2xl px-6">
                        {/* Progress Bar Track */}
                        <div className="w-full h-[2px] bg-[#dde1d2]/20 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-white"
                                style={{ width: `${progress}%` }}
                                transition={{ ease: [0.42, 0, 0.58, 1] }}
                            />
                        </div>

                        {/* Terminal Status Row */}
                        <div className="flex justify-between w-full font-mono text-xs text-white/60">
                            {/* Left: Personality Scanner */}
                            <div className="relative h-4 overflow-hidden">
                                <AnimatePresence mode='wait'>
                                    <motion.span
                                        key={currentPersonality}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0"
                                    >
                                        Detecting: {PERSONALITIES[currentPersonality]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>

                            {/* Right: System Version */}
                            <span>System v2.0</span>
                        </div>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    );
}
