'use client'

import { useState } from 'react'
import { useAuth } from '../components/AuthProvider'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Settings() {
  const { user } = useAuth()
  const [allowNotifications, setAllowNotifications] = useState(false)

  const handleDeleteAccount = async () => {
    // Implement account deletion logic here
    console.log('Delete account')
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Settings</h1>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 dark:text-gray-300">Allow Notifications</span>
          <Switch
            checked={allowNotifications}
            onCheckedChange={setAllowNotifications}
          />
        </div>
        <Button variant="destructive" className="w-full" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      </div>
    </div>
  )
}

