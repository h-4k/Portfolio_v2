import { AnimationVariants } from '@/types';

// Spring configurations
export const springConfig = {
    soft: { type: 'spring', stiffness: 100, damping: 20 },
    medium: { type: 'spring', stiffness: 200, damping: 25 },
    stiff: { type: 'spring', stiffness: 300, damping: 30 },
    bouncy: { type: 'spring', stiffness: 400, damping: 15 },
};

// Fade animations
export const fadeIn: AnimationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInUp: AnimationVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInDown: AnimationVariants = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInLeft: AnimationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const fadeInRight: AnimationVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

// Scale animations
export const scaleIn: AnimationVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

export const scaleInBounce: AnimationVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: springConfig.bouncy,
};

// Stagger animations
export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem: AnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

// Letter reveal animation
export const letterReveal = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
};

export const sentenceContainer = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

// Rotate animations
export const rotateIn: AnimationVariants = {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 10 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

// Slide animations
export const slideInLeft: AnimationVariants = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const slideInRight: AnimationVariants = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

// Glitch effect
export const glitchVariants: AnimationVariants = {
    initial: { x: 0, y: 0 },
    animate: {
        x: [0, -2, 2, -2, 2, 0],
        y: [0, 2, -2, 2, -2, 0],
        transition: {
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 3,
        },
    },
};

// Float animation
export const floatVariants: AnimationVariants = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Pulse animation
export const pulseVariants: AnimationVariants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// Magnetic effect (for buttons)
export const magneticVariants = (x: number, y: number) => ({
    x,
    y,
    transition: springConfig.soft,
});

// Page transitions
export const pageTransition: AnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

// Helper function to create custom variants
export const createVariants = (
    initialState: object,
    animateState: object,
    exitState?: object,
    transition?: object
): AnimationVariants => ({
    initial: initialState,
    animate: animateState,
    ...(exitState && { exit: exitState }),
    ...(transition && { transition }),
});
