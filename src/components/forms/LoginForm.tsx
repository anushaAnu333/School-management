"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { loginSchema, type LoginFormData } from "@/lib/validations"
import { Button, TextField, Heading, Text, Card } from "@/components/ui"

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void
  isLoading?: boolean
}

export default function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@school.edu",
      password: "admin123"
    }
  })

  return (
    <Card variant="elevated" padding="md" className="w-full bg-white border border-gray-200 shadow-xl">
      <div className="text-center mb-6">
        <Heading level={2} className="mb-2 text-gray-800">Welcome Back</Heading>
        <Text variant="small" className="text-gray-600">Sign in to your school management account</Text>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <TextField
          {...register("email")}
          type="email"
          label="Email Address *"
          placeholder="Enter email address"
          leftIcon={<Mail className="w-4 h-4" />}
          error={errors.email?.message}
        />

        {/* Password */}
        <TextField
          {...register("password")}
          type={showPassword ? "text" : "password"}
          label="Password *"
          placeholder="Enter password"
          leftIcon={<Lock className="w-4 h-4" />}
          rightIcon={showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          onRightIconClick={() => setShowPassword(!showPassword)}
          error={errors.password?.message}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          size="md"
          isLoading={isLoading}
          className="w-full"
        >
          Sign In
        </Button>

        {/* Forgot Password Link */}
        <div className="text-center">
          <a href="#" className="text-green-600 hover:underline text-sm">
            Forgot your password?
          </a>
        </div>
      </form>
    </Card>
  )
}
