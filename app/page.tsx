'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuth } from './components/AuthProvider'
import TodoList from './components/TodoList'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF7763]/5 via-background to-[#FF7763]/5 dark:from-gray-800 dark:via-background dark:to-gray-800">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-uNojwWK3lrn0BwvEWiPuNBvb4NlB5I.png"
                alt="task manag.r logo"
                width={44}
                height={44}
                className="rounded-xl"
              />
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">task manag.r</h1>
                <p className="text-sm text-muted-foreground">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <ThemeSwitcher />
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  )
}

