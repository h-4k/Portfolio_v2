import { CYBER_PROJECTS, AERO_PROJECTS } from '@/data/portfolio';
import ProjectDetailsClient from './ProjectDetailsClient';

export function generateStaticParams() {
    const allProjects = [...CYBER_PROJECTS, ...AERO_PROJECTS];
    return allProjects.map((project) => ({
        id: project.id,
    }));
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    return <ProjectDetailsClient id={params.id} />;
}
