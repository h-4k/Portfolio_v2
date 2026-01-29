'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
    color?: string;
    density?: number;
    speed?: number;
}

export default function MatrixRain({ color = '#00ff41', density = 20, speed = 1 }: MatrixRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();

        const columns = Math.floor(canvas.width / density);
        const drops: number[] = new Array(columns).fill(0);
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color; // Customizable color
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * density, drops[i] * density);

                if (drops[i] * density > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += speed;
            }
        };

        const interval = setInterval(draw, 50 / speed);
        window.addEventListener('resize', resize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-20 mix-blend-screen"
        />
    );
}
