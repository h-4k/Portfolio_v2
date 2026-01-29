'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import TiltCard from '@/components/ui/TiltCard';
import { getAllPersonalities } from '@/utils/personality';

export default function HeroPage() {
    const router = useRouter();
    const personalities = getAllPersonalities();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#dde1d2]">
            {/* Dynamic Spotlight Background */}
            <div
                className="absolute inset-0 pointer-events-none transition-colors duration-700 ease-linear opacity-40"
                style={{
                    background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.8), transparent 40%)`
                }}
            />

            {/* Massive Typography Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-0 select-none pointer-events-none mix-blend-overlay opacity-50">
                <motion.h1
                    className="font-clash font-bold text-[15vw] leading-none text-[#0a0a0a] tracking-tighter"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    AYMANE OUG
                </motion.h1>
                <motion.div
                    className="flex items-center justify-center gap-4 mt-4"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="h-[1px] w-24 bg-black/20" />
                    <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-[#0a0a0a]/60">
                        17-YEAR-OLD POLYMATH | MOROCCO
                    </p>
                    <div className="h-[1px] w-24 bg-black/20" />
                </motion.div>
            </div>

            {/* 3D Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 px-6 max-w-[1600px] w-full h-[60vh] items-center">
                {personalities.map((p, i) => (
                    <TiltCard
                        key={p.id}
                        glowColor={p.glowColor}
                        onClick={() => router.push(`/${p.id}`)}
                        className="h-[400px] w-full"
                    >
                        <div className="h-full w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-500 hover:bg-white/80">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <span className={`font-mono text-xs font-bold px-2 py-1 rounded-full border border-current opacity-60`} style={{ color: p.accentColor }}>
                                    0{i + 1}
                                </span>
                                <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                                    {p.icon}
                                </div>
                            </div>

                            {/* Center Visual (Placeholder for Silhouette) */}
                            <div className="flex-1 flex items-center justify-center pointer-events-none">
                                <div className={`w-24 h-24 rounded-full blur-3xl opacity-20 transition-all duration-500 group-hover:opacity-60 group-hover:scale-150`} style={{ background: p.accentColor }} />
                            </div>

                            {/* Footer */}
                            <div>
                                <h2 className="font-clash text-2xl font-bold text-[#0a0a0a] mb-1 group-hover:translate-x-1 transition-transform">
                                    {p.name.toUpperCase()}
                                </h2>
                                <p className="font-mono text-[10px] tracking-widest uppercase opacity-60" style={{ color: p.accentColor }}>
                                    {p.title}
                                </p>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </main>
    );
}
