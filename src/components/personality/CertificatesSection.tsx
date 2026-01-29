'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PersonalityType, Certificate } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';
import Image from 'next/image';

interface CertificatesSectionProps {
    personality: PersonalityType;
}

export default function CertificatesSection({ personality }: CertificatesSectionProps) {
    const config = getPersonalityConfig(personality);
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await fetch('/data/certificates.json');
                const data = await response.json();
                setCertificates(data[personality] || []);
            } catch (error) {
                console.error('Error loading certificates:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCertificates();
    }, [personality]);

    if (isLoading) {
        return (
            <section className="section-padding bg-base-bg" id="certificates">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="loading-spinner mx-auto" />
                    </div>
                </div>
            </section>
        );
    }

    if (certificates.length === 0) return null;

    return (
        <section className="section-padding bg-base-bg relative" id="certificates">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-display text-5xl md:text-7xl font-black mb-6">
                        Certificates & Achievements
                    </h2>
                    <p
                        className="text-xl md:text-2xl font-medium max-w-2xl mx-auto"
                        style={{ color: config.accentColor }}
                    >
                        Recognized expertise and validated skills
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div
                                className="bg-base-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                                style={{
                                    boxShadow: `0 10px 40px ${config.glowColor}`,
                                }}
                            >
                                {/* Certificate Image */}
                                <div className="relative h-48 bg-gradient-to-br from-base-text/5 to-base-text/10 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder icon when image is missing */}
                                    <div
                                        className="text-6xl opacity-20 font-black transition-transform duration-300 group-hover:scale-110"
                                        style={{ color: config.accentColor }}
                                    >
                                        🏆
                                    </div>
                                    {/* 
                                    TODO: Uncomment when certificate images are available
                                    <Image 
                                        src={cert.image} 
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    */}

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-base-text/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Certificate Info */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold mb-2 line-clamp-2">
                                        {cert.title}
                                    </h3>
                                    <p
                                        className="text-sm font-semibold mb-2"
                                        style={{ color: config.accentColor }}
                                    >
                                        {cert.issuer}
                                    </p>
                                    <p className="text-base-text/60 text-sm mb-3">{cert.date}</p>

                                    {cert.verificationLink && (
                                        <a
                                            href={cert.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                                            style={{ color: config.accentColor }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Verify →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="fixed inset-0 bg-base-text/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className="bg-base-white rounded-3xl max-w-3xl w-full overflow-hidden cursor-default"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Image */}
                            <div className="relative h-96 bg-gradient-to-br from-base-text/5 to-base-text/10 flex items-center justify-center">
                                <div
                                    className="text-9xl opacity-20 font-black"
                                    style={{ color: config.accentColor }}
                                >
                                    🏆
                                </div>
                                {/* 
                                <Image 
                                    src={selectedCert.image} 
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain p-8"
                                />
                                */}
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <h3
                                    className="font-display text-3xl font-black mb-4"
                                    style={{ color: config.accentColor }}
                                >
                                    {selectedCert.title}
                                </h3>
                                <p className="text-xl font-semibold mb-2 text-base-text/80">
                                    {selectedCert.issuer}
                                </p>
                                <p className="text-base-text/60 mb-6">{selectedCert.date}</p>

                                <div className="flex gap-4">
                                    {selectedCert.verificationLink && (
                                        <a
                                            href={selectedCert.verificationLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-base-text text-base-bg rounded-full font-bold hover:bg-opacity-90 transition-all"
                                        >
                                            Verify Certificate
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="px-6 py-3 border-2 border-base-text rounded-full font-bold hover:bg-base-text hover:text-base-bg transition-all"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
