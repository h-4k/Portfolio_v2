import { useState, useEffect, useRef } from 'react';

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const useScramble = (text: string, speed: number = 40, delay: number = 0) => {
    const [scrambledText, setScrambledText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const iteration = useRef(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        const startDelay = setTimeout(() => {
            interval = setInterval(() => {
                setScrambledText(
                    text
                        .split('')
                        .map((letter, index) => {
                            if (index < iteration.current) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join('')
                );

                if (iteration.current >= text.length) {
                    setIsComplete(true);
                    clearInterval(interval);
                }

                iteration.current += 1 / 3; // Slower reveal for more scramble effect
            }, speed);
        }, delay);

        return () => {
            clearTimeout(startDelay);
            clearInterval(interval);
        };
    }, [text, speed, delay]);

    return { scrambledText, isComplete };
};
