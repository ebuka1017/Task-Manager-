'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from './AuthProvider'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Avatar() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  const handleSignOut = async () => {
    await signOut()
    router.push('/signin')
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <AvatarUI className="cursor-pointer">
            <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
            <AvatarFallback>{user.displayName?.[0] || 'U'}</AvatarFallback>
          </AvatarUI>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSignOut}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

