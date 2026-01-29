import { CERTIFICATES } from '@/data/portfolio';
import CertificateDetailsClient from './CertificateDetailsClient';

export function generateStaticParams() {
    return CERTIFICATES.map((cert) => ({
        id: cert.id,
    }));
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    return <CertificateDetailsClient id={params.id} />;
}
