'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { PersonalityType } from '@/types';
import { getPersonalityConfig } from '@/utils/personality';

interface CustomCursorProps {
    personality?: PersonalityType;
}

export default function CustomCursor({ personality }: CustomCursorProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for cursor
    const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

    // Config based on personality (or default)
    const config = personality ? getPersonalityConfig(personality) : null;
    const accentColor = config ? config.accentColor : '#0a0a0a';
    const cursorStyle = config ? config.cursorStyle : 'default';

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(!!isClickable);
        };

        // Hide cursor when leaving window
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHoverStart);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHoverStart);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    // Don't render on touch devices (rough heuristic)
    if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

    return (
        <>
            <style jsx global>{`
        body, a, button, input, textarea {
          cursor: none;
        }
      `}</style>

            {/* Main Cursor Dot/Icon */}
            <motion.div
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                {/* Personality-specific shapes */}
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        rotate: isHovering ? 45 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {cursorStyle === 'crosshair' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <motion.path
                                d="M20 5V15M20 25V35M5 20H15M25 20H35"
                                stroke={accentColor}
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                            />
                            <circle cx="20" cy="20" r="2" fill={accentColor} />
                        </svg>
                    )}

                    {cursorStyle === 'brush' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="15" stroke={accentColor} strokeWidth="2" strokeDasharray="4 4" />
                            <circle cx="20" cy="20" r="4" fill={accentColor} />
                        </svg>
                    )}

                    {cursorStyle === 'pick' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 10L30 30H10L20 10Z" stroke={accentColor} strokeWidth="2" />
                            <circle cx="20" cy="22" r="2" fill={accentColor} />
                        </svg>
                    )}

                    {cursorStyle === 'target' && (
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="10" stroke={accentColor} strokeWidth="1" />
                            <circle cx="20" cy="20" r="18" stroke={accentColor} strokeWidth="1" opacity="0.5" />
                            <line x1="20" y1="5" x2="20" y2="35" stroke={accentColor} />
                            <line x1="5" y1="20" x2="35" y2="20" stroke={accentColor} />
                        </svg>
                    )}

                    {/* Default Ring */}
                    {cursorStyle === 'default' && (
                        <div
                            className="rounded-full border-2"
                            style={{
                                width: '20px',
                                height: '20px',
                                borderColor: accentColor,
                                backgroundColor: isHovering ? `${accentColor}40` : 'transparent'
                            }}
                        />
                    )}
                </motion.div>
            </motion.div>
        </>
    );
}
