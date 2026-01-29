'use client';

import { motion } from 'framer-motion';
import PersonalityShell from '@/components/layout/PersonalityShell';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import Link from 'next/link';
import { AERO_PROJECTS } from '@/data/portfolio';

const AERO_EXPERIENCE = [
    {
        year: 'PRESENT',
        role: 'No Experties Yet',
        company: '',
        description: '',
        tags: ['']
    }
];

export default function AeroPage() {
    return (
        <PersonalityShell personalityId="aerospace">
            <div className="flex flex-col gap-2 mb-12">
                <motion.h1
                    className="font-rajdhani text-6xl md:text-8xl font-bold tracking-tighter text-[var(--aero-text)]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    AEROSPACE<br />ENGINEER
                </motion.h1>
                <motion.p
                    className="font-mono text-sm tracking-widest text-[var(--aero-text)]/60 uppercase ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Comming Soon
                </motion.p>
            </div>

            <div className="mb-20">
                <p className="text-xl md:text-2xl font-light text-[var(--aero-text)]/80 leading-relaxed max-w-2xl font-rajdhani">
                    Gravity is just a suggestion. I apply rigorous <span className="text-[var(--aero-primary)]">physics</span> and engineering principles to push the boundaries of what&apos;s possible in flight and space exploration.
                </p>
            </div>

            <div className="mb-20">
                <h2 className="font-rajdhani text-xs font-bold tracking-[0.2em] text-[var(--aero-primary)] mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    EXPERTIES
                </h2>
                <ExperienceTimeline items={AERO_EXPERIENCE} accentColor="var(--aero-primary)" />
            </div>

            {/* Projects Section */}
            <div className="mb-20">
                <h2 className="font-rajdhani text-xs font-bold tracking-[0.2em] text-[var(--aero-primary)] mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    PROJECTS
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    {AERO_PROJECTS.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group block p-6 border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] transition-colors"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold font-rajdhani group-hover:text-[var(--aero-primary)] transition-colors">
                                    {project.title.toUpperCase()}
                                </h3>
                                <span className="font-mono text-xs opacity-40">Learn more →</span>
                            </div>
                            <p className="text-sm opacity-60 mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-black/5 opacity-50 uppercase">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-8 max-w-lg mb-20 text-[var(--aero-text)]">
                {[
                    { label: 'Aerodynamics', val: '90%' },
                    { label: 'Propulsion', val: '85%' },
                    { label: 'CAD / FEA', val: '88%' },
                    { label: 'Orbital Mech', val: '75%' },
                ].map((s, i) => (
                    <div key={s.label}>
                        <div className="flex justify-between text-xs font-mono text-[var(--aero-text)]/60 mb-2">
                            <span>{s.label}</span>
                            <span>{s.val}</span>
                        </div>
                        <div className="h-1 bg-[var(--aero-text)]/10 w-full">
                            <motion.div
                                className="h-full bg-[var(--aero-primary)]"
                                initial={{ width: 0 }}
                                whileInView={{ width: s.val }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                ))}
            </div> */}

        </PersonalityShell>
    );
}
