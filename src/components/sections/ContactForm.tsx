'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, we'll just simulate a submission or rely on mailto since no backend is specified
        // Implementing a simple mailto trigger as requested
        window.location.href = `mailto:aymaneoug.contact@gmail.com`;
    };

    return (
        <section className="w-full py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[1px] bg-black/20" />
                    <h2 className="font-mono text-sm tracking-widest uppercase">Establish Link</h2>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold mb-8">Ready to collaborate?</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="NAME"
                            className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors placeholder:text-black/30 font-mono text-sm"
                            required
                        />
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors placeholder:text-black/30 font-mono text-sm"
                            required
                        />
                    </div>
                    <textarea
                        placeholder="TRANSMISSION DATA..."
                        rows={4}
                        className="bg-transparent border-b border-black/10 py-4 focus:border-black outline-none transition-colors placeholder:text-black/30 font-mono text-sm resize-none"
                        required
                    />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="self-start mt-4 px-8 py-4 bg-black text-white font-mono text-sm tracking-widest hover:bg-black/80 transition-colors uppercase"
                        type="submit"
                    >
                        Send Transmission
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}
