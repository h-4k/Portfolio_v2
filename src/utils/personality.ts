import { PersonalityConfig, PersonalityType } from '@/types';

export const personalityConfigs: Record<PersonalityType, PersonalityConfig> = {
    cyber: {
        id: 'cyber',
        name: 'Cybersecurity Agent',
        title: 'Elite Security Researcher',
        tagline: 'Protecting digital fortresses, one vulnerability at a time',
        description: 'CTF champion, bug hunter, and security researcher specializing in web exploitation, cryptography, and penetration testing.',
        accentColor: '#00ff41',
        glowColor: 'rgba(0, 255, 65, 0.3)',
        icon: 'SEC',
        cursorStyle: 'crosshair',
    },
    design: {
        id: 'design',
        name: 'Graphic Designer',
        title: 'Creative Visual Artist',
        tagline: 'Designing experiences that inspire and captivate',
        description: 'Passionate designer crafting stunning visuals, brand identities, and user experiences that leave lasting impressions.',
        accentColor: '#20C997',
        secondaryColor: '#FFE5B4',
        glowColor: 'rgba(32, 201, 151, 0.3)',
        icon: 'ART',
        cursorStyle: 'brush',
    },
    music: {
        id: 'music',
        name: 'Musician',
        title: 'Multi-Genre Artist',
        tagline: 'Creating sonic landscapes that move the soul',
        description: 'Guitarist, composer, and producer blending rock, jazz, and electronic elements into unique musical experiences.',
        accentColor: '#c9a961',
        secondaryColor: '#FFFFFF',
        glowColor: 'rgba(201, 169, 97, 0.4)',
        icon: 'SND',
        cursorStyle: 'pick',
    },
    aerospace: {
        id: 'aerospace',
        name: 'Aerospace Engineer',
        title: 'Future Space Innovator',
        tagline: 'Engineering tomorrow\'s journey to the stars',
        description: 'Aspiring aerospace engineer passionate about rocket propulsion, orbital mechanics, and the future of space exploration.',
        accentColor: '#4a9ece',
        secondaryColor: '#E8F4F8',
        glowColor: 'rgba(74, 158, 206, 0.3)',
        icon: 'FLT',
        cursorStyle: 'target',
    },
};

export const getPersonalityConfig = (personality: PersonalityType): PersonalityConfig => {
    return personalityConfigs[personality];
};

export const getAllPersonalities = (): PersonalityConfig[] => {
    return Object.values(personalityConfigs);
};

export const getPersonalityColor = (personality: PersonalityType): string => {
    return personalityConfigs[personality].accentColor;
};

export const getPersonalityGlow = (personality: PersonalityType): string => {
    return personalityConfigs[personality].glowColor;
};
