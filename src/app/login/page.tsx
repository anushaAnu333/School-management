"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import LoginForm from "@/components/forms/LoginForm"
import { type LoginFormData } from "@/lib/validations"

export default function LoginPage() {
  const router = useRouter()
  const { login, isAuthenticated, isLoading } = useAuth()
  const [loginError, setLoginError] = useState<string | null>(null)

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  const handleLogin = async (data: LoginFormData) => {
    setLoginError(null)
    console.log('Login attempt with:', data.email)
    
    try {
      const success = await login(data.email, data.password)
      console.log('Login result:', success)
      
      if (success) {
        console.log('Login successful, redirecting to dashboard')
        router.push('/dashboard')
      } else {
        console.log('Login failed - invalid credentials')
        setLoginError('Invalid email or password. Please try again.')
      }
      
    } catch (error) {
      console.error("Login failed:", error)
      setLoginError('Login failed. Please try again.')
    }
  }

  // Show loading if checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Side - Image/Visual */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute bottom-32 right-10 w-28 h-28 bg-white rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10 text-center text-white">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
              <p className="text-xl text-green-100 mb-8 max-w-md mx-auto">
                Access your school management system and continue managing your educational institution efficiently.
              </p>
            </div>
            
            {/* Features List */}
            <div className="space-y-4 text-left max-w-sm mx-auto">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-100">Secure Access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-100">Real-time Dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-100">Student Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-100">Academic Reports</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {loginError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{loginError}</p>
              </div>
            )}
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}
