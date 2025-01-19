'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuth } from '../components/AuthProvider'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const { signIn, signUp } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      if (isSignUp) {
        await signUp(email, password)
      } else {
        await signIn(email, password)
      }
      router.push('/')
    } catch (error) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FF7763]/5 via-background to-[#FF7763]/5 dark:from-gray-800 dark:via-background dark:to-gray-800 p-4">
      <div className="w-full max-w-[380px] space-y-8">
        <div className="text-center space-y-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-uNojwWK3lrn0BwvEWiPuNBvb4NlB5I.png"
            alt="task manag.r logo"
            width={76}
            height={76}
            className="mx-auto"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              {isSignUp ? 'Create account' : 'Welcome back'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isSignUp ? 'Enter your details to get started' : 'Enter your credentials to continue'}
            </p>
          </div>
        </div>

        <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-border/50">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}
            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 transition-colors"
            >
              {isSignUp ? 'Create account' : 'Sign in'}
            </Button>
          </form>
        </div>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto block"
        >
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Create one"}
        </button>
      </div>
    </div>
  )
}

