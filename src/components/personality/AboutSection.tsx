'use client';

import { motion } from 'framer-motion';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';
import { fadeInUp } from '@/utils/animations';

interface AboutSectionProps {
    personality: PersonalityType;
}

const getSkills = (personality: PersonalityType) => {
    switch (personality) {
        case 'cyber':
            return [
                { name: 'Penetration Testing', level: 95 },
                { name: 'Cryptography', level: 90 },
                { name: 'Network Security', level: 85 },
                { name: 'Reverse Engineering', level: 80 }
            ];
        case 'design':
            return [
                { name: 'UI/UX Design', level: 95 },
                { name: 'Brand Identity', level: 90 },
                { name: 'Motion Graphics', level: 85 },
                { name: '3D Modeling', level: 75 }
            ];
        case 'music':
            return [
                { name: 'Guitar Performance', level: 95 },
                { name: 'Music Production', level: 90 },
                { name: 'Composition', level: 85 },
                { name: 'Sound Design', level: 80 }
            ];
        case 'aerospace':
            return [
                { name: 'Orbital Mechanics', level: 90 },
                { name: 'Propulsion Systems', level: 85 },
                { name: 'CAD / FEA Analysis', level: 85 },
                { name: 'Python/Matlab', level: 95 }
            ];
        default:
            return [];
    }
};

export default function AboutSection({ personality }: AboutSectionProps) {
    const config = getPersonalityConfig(personality);
    const skills = getSkills(personality);

    return (
        <section className="section-padding bg-base-white/50 backdrop-blur-sm relative z-20">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Description */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        The <span style={{ color: config.accentColor }}>{config.name}</span> Philosophy
                    </h2>
                    <div className="space-y-6 text-lg text-base-text/80 leading-relaxed font-light">
                        <p>
                            Every discipline requires a unique perspective. In the world of
                            <span className="font-semibold" style={{ color: config.accentColor }}> {personality}</span>,
                            I strive to push boundaries and challenge the status quo.
                        </p>
                        <p>
                            My approach combines technical precision with creative intuition.
                            Whether it's securing a network, designing a brand, composing a symphony,
                            or calculating a trajectory, the goal remains the same:
                            <strong> Excellence through innovation.</strong>
                        </p>
                        <div className="pt-6 border-l-4 pl-6 italic text-xl" style={{ borderColor: config.accentColor }}>
                            "The only way to do great work is to love what you do.
                            The only way to be four people at once is to truly master one: yourself."
                        </div>
                    </div>
                </motion.div>

                {/* Skills Animation */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8 bg-base-white p-8 rounded-3xl shadow-lg border border-base-text/5"
                >
                    <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>

                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="font-mono text-sm opacity-60">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-base-bg rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ background: config.accentColor }}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
