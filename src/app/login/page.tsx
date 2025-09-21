"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginForm from "@/components/forms/LoginForm"
import { type LoginFormData } from "@/lib/validations"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true)
    
    try {
      // Here you would make the API call to your backend
      console.log("Login data:", data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock API call structure (replace with actual API call)
      const apiData = {
        email: data.email,
        password: data.password,
      }
      
      console.log("API payload:", apiData)
      
      // Simulate successful login and redirect to dashboard
      router.push('/dashboard')
      
    } catch (error) {
      console.error("Login failed:", error)
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false)
    }
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
            <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  )
}
