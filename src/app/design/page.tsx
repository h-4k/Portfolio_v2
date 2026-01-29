'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PersonalityShell from '@/components/layout/PersonalityShell';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';

const DESIGN_EXPERIENCE = [
    {
        year: '2022 - PRESENT',
        role: 'Graphic Designer',
        company: 'Pixlful Studio',
        description: 'Crafting immersive digital experiences and brand identities for international clients.',
        tags: ['ILLUSTRATOR', 'PHOTOSHOP', 'BRANDING']
    },

];

export default function DesignPage() {
    return (
        <PersonalityShell personalityId="design">
            <div className="flex flex-col gap-2 mb-12">
                <motion.h1
                    className="font-clash text-6xl md:text-8xl font-black tracking-tighter text-[var(--design-text)]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    GRAPHIC<br />DESIGNER
                </motion.h1>
                <motion.p
                    className="font-syne text-sm font-bold tracking-widest text-[var(--design-primary)] uppercase ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Turning Your Ideas To Real
                </motion.p>
            </div>

            <div className="mb-20">
                <p className="text-xl md:text-2xl font-light text-[var(--design-text)]/80 leading-relaxed max-w-2xl">
                    Design is not just how it looks; it's how it feels. I blend <span className="text-[var(--design-primary)] font-medium">strategic thinking</span> with artistic expression to create interfaces that breathe.
                </p>
            </div>

            {/* Experience Section */}
            <div className="mb-20">
                <h2 className="font-syne text-xs font-bold tracking-[0.2em] text-[var(--design-text)]/40 mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    EXPERTIES
                </h2>
                {/* Wrapped in dark container for now as ExperienceTimeline might expect dark bg, or we rely on it being readable */}
                <div className="text-[var(--design-text)]">
                    <ExperienceTimeline items={DESIGN_EXPERIENCE} accentColor="var(--design-primary)" />
                </div>

            </div>

            {/* Skills / Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-lg mb-20 text-[var(--design-text)]">
                {[
                    { label: 'Graphic Design', val: '98%' },
                    { label: 'Thumbnail Design', val: '85%' },
                    { label: 'Photo Editing', val: '90%' },
                    { label: 'UI/UX Design', val: '75%' },
                ].map((s, i) => (
                    <div key={s.label}>
                        <div className="flex justify-between text-xs font-bold font-syne opacity-60 mb-2">
                            <span>{s.label}</span>
                            <span>{s.val}</span>
                        </div>
                        <div className="h-1 bg-[var(--design-text)]/10 w-full">
                            <motion.div
                                className="h-full bg-[var(--design-primary)]"
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
