"use client"

import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const pathname = usePathname();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // For login page, render without sidebar and navbar
  if (pathname === '/login') {
    return <>{children}</>;
  }

  // For authenticated users, show the full layout with sidebar and navbar
  if (isAuthenticated) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    );
  }

  // For unauthenticated users on non-login pages, show children (will redirect to login)
  return <>{children}</>;
}
