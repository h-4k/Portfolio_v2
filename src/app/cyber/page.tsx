'use client';

import { motion } from 'framer-motion';
import PersonalityShell from '@/components/layout/PersonalityShell';
import ExperienceTimeline from '@/components/sections/ExperienceTimeline';
import Link from 'next/link';
import { CYBER_PROJECTS, CERTIFICATES } from '@/data/portfolio';

const CYBER_EXPERIENCE = [
    {
        year: '2024 - PRESENT',
        role: 'Bug Bounty Hunter',
        company: 'HackerOne / Bugcrowd',
        description: 'Identified critical vulnerabilities in companies ',
        tags: ['WEB', 'API', 'OAUTH']
    },
];

export default function CyberPage() {
    return (
        <PersonalityShell personalityId="cyber">
            <div className="flex flex-col gap-2 mb-12">
                <motion.h1
                    className="font-clash text-6xl md:text-8xl font-black tracking-tighter text-[var(--cyber-text)]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    CYBER<br />SECURITY
                </motion.h1>
                <motion.p
                    className="font-mono text-sm tracking-widest text-[var(--cyber-text)]/60 uppercase ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Securing the Digital Frontier
                </motion.p>
            </div>

            <div className="mb-20">
                <p className="text-xl md:text-2xl font-light text-[var(--cyber-text)]/80 leading-relaxed max-w-2xl">
                    I don&apos;t just write code; I break it. Specializing in <span className="text-[var(--cyber-primary)]">offensive security</span> and cryptographic protocols, I turn system vulnerabilities into fortified strongholds.
                </p>
            </div>

            {/* Experience Section */}
            <div className="mb-20">
                <h2 className="font-mono text-xs tracking-[0.2em] text-[var(--cyber-primary)] mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    EXPERIENCES
                </h2>
                <ExperienceTimeline items={CYBER_EXPERIENCE} accentColor="var(--cyber-primary)" />
            </div>

            {/* Projects Section */}
            <div className="mb-20">
                <h2 className="font-mono text-xs tracking-[0.2em] text-[var(--cyber-primary)] mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    PROJECTS
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    {CYBER_PROJECTS.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group block p-6 border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] transition-colors"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold group-hover:text-[var(--cyber-primary)] transition-colors">
                                    {project.title.toUpperCase()}
                                </h3>
                                <span className="font-mono text-xs opacity-40">READ_MORE →</span>
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

            {/* Certificates Section */}
            <div className="mb-20">
                <h2 className="font-mono text-xs tracking-[0.2em] text-[var(--cyber-primary)] mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-current" />
                    CERTIFICATES
                </h2>
                <div className="flex flex-col gap-4 font-mono text-sm text-[var(--cyber-text)]/80">
                    {CERTIFICATES.map((cert) => (
                        <Link
                            key={cert.id}
                            href={`/certificates/${cert.id}`}
                            className="group flex flex-col border-l-2 border-black/10 hover:border-[var(--cyber-primary)] bg-black/[0.01] hover:bg-black/[0.03] pl-4 py-3 transition-all"
                        >
                            <div className="font-bold group-hover:text-[var(--cyber-primary)] transition-colors">
                                {cert.title}
                            </div>
                            <div className="text-xs opacity-60">
                                {cert.issuer} • {cert.date}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Skills / Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-lg mb-20">
                {[
                    { label: 'Web Exploitation', val: '95%' },
                    { label: 'Cryptography', val: '80%' },
                    { label: 'Network Sec', val: '85%' },
                    { label: 'Reverse Eng', val: '70%' },
                ].map((s, i) => (
                    <div key={s.label}>
                        <div className="flex justify-between text-xs font-mono text-[var(--cyber-text)]/60 mb-2">
                            <span>{s.label}</span>
                            <span>{s.val}</span>
                        </div>
                        <div className="h-1 bg-[var(--cyber-text)]/10 w-full">
                            <motion.div
                                className="h-full bg-[var(--cyber-primary)]"
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
