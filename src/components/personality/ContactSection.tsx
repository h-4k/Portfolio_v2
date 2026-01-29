'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';

interface ContactSectionProps {
    personality: PersonalityType;
}

export default function ContactSection({ personality }: ContactSectionProps) {
    const config = getPersonalityConfig(personality);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Simulated submission since static export doesn't support API routes
            console.log('Contact form submission:', { ...formState, personality });

            // Artificial delay to simulate network request
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="section-padding min-h-[80vh] flex items-center justify-center relative bg-base-text text-base-bg">
            <div className="container mx-auto max-w-4xl relative z-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Info Side */}
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-display">
                            Let's <br /> Create <br /> <span style={{ color: config.accentColor }}>Magic</span>.
                        </h2>
                        <p className="text-xl opacity-70 mb-12 font-light">
                            Whether you have a groundbreaking idea or just want to chat about
                            <span className="font-semibold" style={{ color: config.accentColor }}> {config.name.toLowerCase()}</span>,
                            I'm always open to new opportunities.
                        </p>

                        <div className="space-y-6 text-lg">
                            <a href="mailto:hello@aymane.dev" className="block hover:opacity-70 transition-opacity">hello@aymane.dev</a>
                            <div className="flex gap-6 text-2xl">
                                <a href="#" className="hover:text-[var(--accent)] transition-colors" style={{ '--accent': config.accentColor } as any}>X</a>
                                <a href="#" className="hover:text-[var(--accent)] transition-colors" style={{ '--accent': config.accentColor } as any}>GH</a>
                                <a href="#" className="hover:text-[var(--accent)] transition-colors" style={{ '--accent': config.accentColor } as any}>LI</a>
                                <a href="#" className="hover:text-[var(--accent)] transition-colors" style={{ '--accent': config.accentColor } as any}>IG</a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-base-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-mono opacity-50 mb-2">NAME</label>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors"
                                    style={{ '--accent': config.accentColor } as any}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono opacity-50 mb-2">EMAIL</label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors"
                                    style={{ '--accent': config.accentColor } as any}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono opacity-50 mb-2">MESSAGE</label>
                                <textarea
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[var(--accent)] transition-colors min-h-[150px] resize-none"
                                    style={{ '--accent': config.accentColor } as any}
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 rounded-full font-bold text-base-text transition-all relative overflow-hidden group"
                                style={{ background: config.accentColor }}
                            >
                                <span className="relative z-10">
                                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>

                            {status === 'success' && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm text-green-400 mt-4">
                                    Message received! I'll be in touch.
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-sm opacity-40">
                    <div>© 2026 Aymane Oug</div>
                    <div className="font-mono">RABAT • MOROCCO</div>
                </div>
            </div>
        </section>
    );
}
