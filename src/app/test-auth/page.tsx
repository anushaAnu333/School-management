"use client"

import { useAuth } from '@/context/AuthContext';

export default function TestAuthPage() {
  const { user, isAuthenticated, isLoading } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Authentication Test Page</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Current Auth State:</h2>
          
          <div className="space-y-2">
            <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
            <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
            <p><strong>User:</strong> {user ? JSON.stringify(user, null, 2) : 'None'}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Test Credentials:</h3>
            <p><strong>Email:</strong> admin@school.edu</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}
