'use client';

import { motion } from 'framer-motion';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';

interface ExperienceSectionProps {
    personality: PersonalityType;
}

const getExperience = (personality: PersonalityType) => {
    switch (personality) {
        case 'cyber':
            return [
                {
                    role: 'Security Researcher',
                    company: 'HackerOne',
                    period: '2024 - Present',
                    desc: 'Identifying critical vulnerabilities in Fortune 500 companies. Reported 50+ valid bugs.'
                },
                {
                    role: 'CTF Team Captain',
                    company: 'Morocco Cyber Team',
                    period: '2023 - 2024',
                    desc: 'Led a team of 5 to win national CTF competition. Specialized in web exploitation challenges.'
                }
            ];
        case 'design':
            return [
                {
                    role: 'Freelance Visual Designer',
                    company: 'Self-Employed',
                    period: '2023 - Present',
                    desc: 'Crafting brand identities and UI/UX for international startups. Focusing on minimalist and functional design.'
                },
                {
                    role: 'Junior Graphic Designer',
                    company: 'Creative Studio',
                    period: '2022 - 2023',
                    desc: 'Assisted in creating social media assets and print materials for large-scale campaigns.'
                }
            ];
        case 'music':
            return [
                {
                    role: 'Lead Guitarist',
                    company: 'Echoes Band',
                    period: '2022 - Present',
                    desc: 'Composing original material and performing live at local venues. blending progressive rock with jazz fusion.'
                },
                {
                    role: 'Session Musician',
                    company: 'Freelance',
                    period: '2023 - Present',
                    desc: 'Recording guitar and bass tracks for various remote collaborators on Fiverr and SoundBetter.'
                }
            ];
        case 'aerospace':
            return [
                {
                    role: 'Rocketry Club Lead',
                    company: 'High School Tech Club',
                    period: '2023 - Present',
                    desc: 'Designed and launched multiple model rockets. Conducted aerodynamic stability simulations using OpenRocket.'
                },
                {
                    role: 'Physics Tutor',
                    company: 'Academic Support',
                    period: '2022 - 2024',
                    desc: 'Helping peers master complex physics concepts including mechanics and thermodynamics.'
                }
            ];
        default:
            return [];
    }
};

export default function ExperienceSection({ personality }: ExperienceSectionProps) {
    const config = getPersonalityConfig(personality);
    const experiences = getExperience(personality);

    return (
        <section className="section-padding bg-base-bg relative z-10">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold mb-16 text-center">
                    Journey <span className="font-light italic">&</span> Milestones
                </h2>

                <div className="relative border-l-2 border-base-text/10 ml-4 md:ml-0 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-16"
                        >
                            {/* Timeline Dot */}
                            <div
                                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-base-bg"
                                style={{ backgroundColor: config.accentColor }}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-12">
                                <div className="font-mono text-base-text/50 font-medium pt-1">
                                    {exp.period}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                    <div className="text-lg font-medium opacity-70 mb-4">{exp.company}</div>
                                    <p className="text-base-text/70 leading-relaxed max-w-xl">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
