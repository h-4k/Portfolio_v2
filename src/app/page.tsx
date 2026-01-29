'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to loading experience on mount
    router.push('/loading');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-bg">
      <div className="loading-spinner" />
    </div>
  );
}
