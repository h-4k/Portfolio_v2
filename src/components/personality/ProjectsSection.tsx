'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonalityType, Project } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';
import Image from 'next/image';

import projectsData from '@/data/projects.json';

interface ProjectsSectionProps {
    personality: PersonalityType;
}

export default function ProjectsSection({ personality }: ProjectsSectionProps) {
    const config = getPersonalityConfig(personality);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        // Filter projects by personality from static data
        try {
            const personalityProjects = (projectsData as any)[personality] || [];
            setProjects(personalityProjects);
        } catch (error) {
            console.error('Failed to load projects', error);
        } finally {
            setLoading(false);
        }
    }, [personality]);

    return (
        <section id="projects" className="section-padding py-32 relative z-20 min-h-screen">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Selected <span style={{ color: config.accentColor }}>Works</span>
                    </h2>
                    <div className="h-1 w-24 bg-base-text opacity-10 rounded-full">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: config.accentColor }}
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1 }}
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="loading-spinner border-t-transparent" style={{ borderTopColor: config.accentColor }} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layoutId={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setSelectedId(project.id)}
                                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-base-white shadow-sm hover:shadow-xl transition-shadow ${project.featured ? 'md:col-span-2' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className="absolute inset-0 z-0">
                                    <div className="relative w-full h-full bg-gray-200">
                                        {/* Using a colored placeholder if image load fails or is just placeholder path */}
                                        <div className="absolute inset-0 flex items-center justify-center text-4xl text-base-text/10 font-bold bg-base-text/5 group-hover:scale-105 transition-transform duration-700">
                                            {project.title.charAt(0)}
                                        </div>

                                        {/* Actual Image component would go here. 
                          For now using the colored divs to simulate content 
                      */}
                                        <div
                                            className="absolute inset-0 opacity-20 mix-blend-overlay"
                                            style={{ background: config.accentColor }}
                                        />
                                    </div>
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-8 w-full z-10 text-white">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                    >
                                        <div className="flex gap-2 mb-3 flex-wrap">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/20 backdrop-blur-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors"
                                            style={{ '--accent': config.accentColor } as any}
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 line-clamp-2 text-sm">{project.description}</p>
                                    </motion.div>
                                </div>

                                {/* Hover Reveal Arrow */}
                                <div className="absolute top-8 right-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white border border-white/20">
                                        ↗
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Modal Expansion */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            <motion.div
                                layoutId={selectedId}
                                className="bg-base-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl z-10 relative"
                            >
                                {(() => {
                                    const project = projects.find(p => p.id === selectedId);
                                    if (!project) return null;

                                    return (
                                        <div className="flex flex-col md:flex-row h-full">
                                            {/* Image Side */}
                                            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-base-text/5 relative">
                                                <div className="absolute inset-0 flex items-center justify-center text-6xl text-base-text/10 font-black">
                                                    {project.title.charAt(0)}
                                                </div>
                                                <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ background: config.accentColor }} />
                                            </div>

                                            {/* Content Side */}
                                            <div className="p-8 md:p-12 w-full md:w-1/2">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-base-text/5 flex items-center justify-center hover:bg-base-text/10 transition-colors"
                                                >
                                                    ✕
                                                </button>

                                                <h3 className="text-3xl font-bold mb-4 font-display">{project.title}</h3>

                                                <div className="flex gap-2 mb-6 flex-wrap">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-base-text/20">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <p className="text-lg leading-relaxed text-base-text/80 mb-8">
                                                    {project.longDescription || project.description}
                                                </p>

                                                <div className="flex gap-4">
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            className="px-6 py-3 rounded-full text-white font-medium"
                                                            style={{ background: config.accentColor }}
                                                        >
                                                            Live Demo
                                                        </a>
                                                    )}
                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            className="px-6 py-3 rounded-full border border-base-text/20 hover:bg-base-text/5 font-medium transition-colors"
                                                        >
                                                            Source Code
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
