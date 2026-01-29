'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '@/data/portfolio';
import PersonalityShell from '@/components/layout/PersonalityShell';

export default function CertificateDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const cert = CERTIFICATES.find(c => c.id === id);

    if (!cert) {
        return (
            <div className="min-h-screen flex items-center justify-center font-mono">
                CERT_NOT_FOUND
            </div>
        );
    }

    return (
        <PersonalityShell personalityId="cyber">
            <div className="max-w-4xl pt-12">
                <motion.button
                    onClick={() => router.back()}
                    className="mb-12 font-mono text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                >
                    ← RETURN_TO_PERSONALITY
                </motion.button>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <span className="font-mono text-xs tracking-widest text-[var(--cyber-primary)] mb-4 block">
                        VERIFIED_CREDENTIAL
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        {cert.title}
                    </h1>
                </motion.div>

                <motion.div
                    className="mb-12 border-l-2 border-[var(--cyber-primary)] pl-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="font-mono text-lg uppercase mb-1">{cert.issuer}</div>
                    <div className="font-mono text-sm opacity-60">ISSUED: {cert.date}</div>
                </motion.div>

                <motion.div
                    className="prose prose-lg max-w-none opacity-80 leading-relaxed font-light mb-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-xl">
                        {cert.description}
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="p-8 bg-black/5 border border-black/10 rounded-lg flex flex-col items-center justify-center text-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center">
                            <svg className="w-8 h-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-mono text-sm font-bold">{cert.title}_DOCUMENT.PDF</div>
                            <div className="font-mono text-xs opacity-40 uppercase">Signed & Verified</div>
                        </div>
                        <a
                            href={cert.downloadUrl}
                            download
                            className="mt-4 px-8 py-3 bg-black text-white font-mono text-sm hover:bg-black/80 transition-colors uppercase"
                        >
                            Download Certificate
                        </a>
                    </div>
                </motion.div>
            </div>
        </PersonalityShell>
    );
}
