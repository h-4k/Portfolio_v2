'use client';

import { useEffect, useRef } from 'react';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';

interface ParticleSystemProps {
    personality?: PersonalityType;
    density?: number;
}

export default function ParticleSystem({ personality, density = 50 }: ParticleSystemProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Get colors based on personality
    const config = personality ? getPersonalityConfig(personality) : null;
    const primaryColor = config ? config.accentColor : '#0a0a0a';
    const secondaryColor = config?.secondaryColor || '#888888';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouseX = 0;
        let mouseY = 0;

        // Handle Resize
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            originalX: number;
            originalY: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.originalX = this.x;
                this.originalY = this.y;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.5 ? primaryColor : secondaryColor;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction (repulsion)
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (100 - distance) / 100;
                    const directionX = forceDirectionX * force * 2;
                    const directionY = forceDirectionY * force * 2; // Repulsion strength

                    this.x -= directionX;
                    this.y -= directionY;
                }

                // Wrap around screen
                if (this.x > canvas!.width) this.x = 0;
                else if (this.x < 0) this.x = canvas!.width;

                if (this.y > canvas!.height) this.y = 0;
                else if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.6;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = (window.innerWidth * window.innerHeight) / 15000; // Responsive density
            const count = Math.min(particleCount * (density / 50), 200); // Cap max particles

            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };

        const connectParticles = () => {
            if (!ctx) return;
            const maxDistance = 150;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        // Opacity based on distance
                        const opacity = 1 - (distance / maxDistance);
                        ctx.strokeStyle = `${primaryColor}${Math.floor(opacity * 50).toString(16).padStart(2, '0')}`; // Hex alpha hack
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.x;
            mouseY = e.y;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [primaryColor, secondaryColor, density]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
