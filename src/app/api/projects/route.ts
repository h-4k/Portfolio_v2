import { NextRequest, NextResponse } from 'next/server';
import projectsData from '@/data/projects.json';
import { Project, PersonalityType } from '@/types';

// Type assertion for projects data
const typedProjectsData = projectsData as Record<PersonalityType, Project[]>;

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const personality = searchParams.get('personality') as PersonalityType | null;
        const featured = searchParams.get('featured');

        // If no personality specified, return all projects
        if (!personality) {
            const allProjects: Project[] = Object.values(typedProjectsData).flat();

            if (featured === 'true') {
                return NextResponse.json(allProjects.filter(p => p.featured));
            }

            return NextResponse.json(allProjects);
        }

        // Validate personality type
        if (!['cyber', 'design', 'music', 'aerospace'].includes(personality)) {
            return NextResponse.json(
                { error: 'Invalid personality type. Must be: cyber, design, music, or aerospace' },
                { status: 400 }
            );
        }

        // Get projects for specific personality
        const projects = typedProjectsData[personality] || [];

        if (featured === 'true') {
            return NextResponse.json(projects.filter(p => p.featured));
        }

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json(
            { error: 'Failed to fetch projects' },
            { status: 500 }
        );
    }
}
