'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="w-full py-12 mt-20 border-t border-black/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm font-mono tracking-tight opacity-60">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-bold text-black uppercase">Aymane Ougunir</span>
                    </div>
                    <div className="text-[10px] opacity-50 uppercase">
                        Elite Developer & Systems Engineer
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black hover:opacity-100 transition-all uppercase"
                    >
                        GitHub.os
                    </a>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-600 hover:opacity-100 transition-all uppercase"
                    >
                        Discord.srv
                    </a>
                    <a
                        href="mailto:aymaneoug.contact@gmail.com"
                        className="hover:text-black hover:opacity-100 transition-all uppercase"
                    >
                        Enquiry.mail
                    </a>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <div className="text-xs font-bold text-black">
                        © {new Date().getFullYear()} CORE_SYSTEMS
                    </div>
                    <div className="text-[10px] opacity-40 uppercase">
                        All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}
