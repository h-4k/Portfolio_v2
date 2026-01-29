'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PersonalityShell from '@/components/layout/PersonalityShell';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';

const MUSIC_EXPERIENCE = [
    {
        year: '2023 - PRESENT',
        role: 'Music Producer',
        company: 'Independent',
        description: 'Producing and mixing tracks for local artists, blending electronic and organic textures.',
        tags: ['ABLETON', 'MIXING', 'SOUND DESIGN']
    },
    {
        year: '2020 - 2023',
        role: 'Session Guitarist',
        company: 'Various Bands',
        description: 'Live performance and studio recording for jazz and rock ensembles.',
        tags: ['GUITAR', 'THEORY', 'PERFORMANCE']
    }
];

export default function MusicPage() {
    return (
        <PersonalityShell personalityId="music">
            <div className="flex flex-col gap-2 mb-12">
                <motion.h1
                    className="font-playfair text-6xl md:text-8xl italic font-bold tracking-tighter text-[var(--music-text)]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    SONIC<br />ARCHITECT
                </motion.h1>
                <motion.p
                    className="font-mono text-sm tracking-widest text-[var(--music-text)]/60 uppercase ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Composing the Unheard
                </motion.p>
            </div>

            <div className="mb-20">
                <p className="text-xl md:text-2xl font-light text-[var(--music-text)]/80 leading-relaxed max-w-2xl font-serif italic">
                    "Music is the silence between the notes." I treat sound as infinite colored clay, sculpting <span className="text-[var(--music-primary)]">auditory landscapes</span> that transport the listener.
                </p>
            </div>

            <div className="mb-20">
                <h2 className="font-mono text-xs tracking-[0.2em] text-[var(--music-primary)] mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    DISCOGRAPHY_LOG
                </h2>
                <ExperienceTimeline items={MUSIC_EXPERIENCE} accentColor="var(--music-primary)" />
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-lg mb-20 text-[var(--music-text)]">
                {[
                    { label: 'Production', val: '90%' },
                    { label: 'Composition', val: '85%' },
                    { label: 'Guitar', val: '95%' },
                    { label: 'Sound Engineering', val: '80%' },
                ].map((s, i) => (
                    <div key={s.label}>
                        <div className="flex justify-between text-xs font-mono text-[var(--music-text)]/60 mb-2">
                            <span>{s.label}</span>
                            <span>{s.val}</span>
                        </div>
                        <div className="h-1 bg-[var(--music-text)]/10 w-full">
                            <motion.div
                                className="h-full bg-[var(--music-primary)]"
                                initial={{ width: 0 }}
                                whileInView={{ width: s.val }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </PersonalityShell>
    );
}
