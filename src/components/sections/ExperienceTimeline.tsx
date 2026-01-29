'use client';

import { motion } from 'framer-motion';

interface ExperienceNode {
    role: string;
    company: string;
    description: string;
    year: string;
    tags: string[];
}

interface TimelineProps {
    items: ExperienceNode[];
    accentColor: string;
}

export default function ExperienceTimeline({ items, accentColor }: TimelineProps) {
    return (
        <div className="relative border-l-2 border-current/10 pl-8 ml-4 my-12 space-y-12">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                >
                    {/* Dot */}
                    <span
                        className="absolute -left-[41px] top-2 w-5 h-5 rounded-full border-4 border-[var(--base-bg)] bg-[var(--base-bg)] transition-colors duration-300 group-hover:bg-[var(--accent-color)]"
                        style={{ backgroundColor: index === 0 ? accentColor : 'var(--base-bg)', borderColor: 'var(--base-text)' }}
                    />

                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs opacity-50">{item.year}</span>
                        <h3 className="font-clash text-2xl font-semibold">{item.role}</h3>
                        <p className="text-lg font-medium opacity-80" style={{ color: accentColor }}>{item.company}</p>
                        <p className="text-sm opacity-60 leading-relaxed max-w-md">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 text-[10px] uppercase font-mono border border-white/20 rounded-full opacity-50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
