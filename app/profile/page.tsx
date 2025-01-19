'use client'

import { useAuth } from '../components/AuthProvider'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
  const { user } = useAuth()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
          <AvatarFallback>{user.displayName?.[0] || 'U'}</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{user.displayName}</h1>
        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
      </div>
    </div>
  )
}

