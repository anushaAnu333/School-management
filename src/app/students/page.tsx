"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to classes page when students is accessed directly
    router.replace('/classes');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to classes...</p>
      </div>
    </div>
  );
}