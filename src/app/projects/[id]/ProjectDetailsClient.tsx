'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CYBER_PROJECTS, AERO_PROJECTS } from '@/data/portfolio';
import PersonalityShell from '@/components/layout/PersonalityShell';

export default function ProjectDetailsClient({ id }: { id: string }) {
    const router = useRouter();
    const allProjects = [...CYBER_PROJECTS, ...AERO_PROJECTS];
    const project = allProjects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center font-mono">
                PROJECT_NOT_FOUND
            </div>
        );
    }

    return (
        <PersonalityShell personalityId={project.personality}>
            <div className="max-w-4xl pt-12">
                <motion.button
                    onClick={() => router.back()}
                    className="mb-12 font-mono text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                >
                    ← RETURN_TO_PERSONALITY
                </motion.button>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {project.title.toUpperCase()}
                </motion.h1>

                <motion.div
                    className="flex flex-wrap gap-2 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-black/5 rounded-full text-xs font-mono uppercase">
                            {tech}
                        </span>
                    ))}
                </motion.div>

                <motion.div
                    className="prose prose-lg max-w-none opacity-80 leading-relaxed font-light"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-xl md:text-2xl mb-8">
                        {project.description}
                    </p>
                    <p>
                        {project.longDescription}
                    </p>
                </motion.div>

                <motion.div
                    className="mt-12 flex gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-black text-white font-mono text-sm hover:bg-black/80 transition-colors"
                        >
                            SOURCE_CODE
                        </a>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-black font-mono text-sm hover:bg-black/5 transition-colors"
                        >
                            LIVE_PREVIEW
                        </a>
                    )}
                </motion.div>
            </div>
        </PersonalityShell>
    );
}
