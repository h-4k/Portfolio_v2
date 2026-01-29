'use client';

import { motion } from 'framer-motion';

export default function PaintSplash() {
    // Random splashes
    const splashes = [...Array(5)].map((_, i) => ({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        color: ['#20C997', '#FFE5B4', '#FF6B6B', '#4ECDC4'][Math.floor(Math.random() * 4)]
    }));

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
            {splashes.map((splash) => (
                <motion.div
                    key={splash.id}
                    className="absolute rounded-full blur-3xl mix-blend-multiply"
                    style={{
                        left: `${splash.x}%`,
                        top: `${splash.y}%`,
                        width: '400px',
                        height: '400px',
                        background: splash.color,
                    }}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.2, 0.8, 1],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}
