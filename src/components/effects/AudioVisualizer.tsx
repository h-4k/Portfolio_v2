'use client';

import { motion } from 'framer-motion';

interface AudioVisualizerProps {
    color?: string;
}

export default function AudioVisualizer({ color = '#FFD700' }: AudioVisualizerProps) {
    const bars = 20;

    return (
        <div className="fixed bottom-0 left-0 right-0 h-64 z-0 pointer-events-none opacity-20 flex items-end justify-between px-10 gap-2">
            {[...Array(bars)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-full rounded-t-lg"
                    style={{ backgroundColor: color }}
                    animate={{
                        height: [
                            `${Math.random() * 20 + 5}%`,
                            `${Math.random() * 80 + 20}%`,
                            `${Math.random() * 20 + 5}%`
                        ]
                    }}
                    transition={{
                        duration: 0.5 + Math.random() * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05
                    }}
                />
            ))}
        </div>
    );
}
