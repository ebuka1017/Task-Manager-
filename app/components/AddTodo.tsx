'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import CategorySelect from './CategorySelect'

type AddTodoProps = {
  onAdd: (text: string, category: 'personal' | 'work' | 'groceries') => void
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState<'personal' | 'work' | 'groceries'>('personal')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim(), category)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary"
        />
        <CategorySelect value={category} onChange={setCategory} />
      </div>
      <Button 
        type="submit" 
        className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 transition-colors"
      >
        <Plus className="mr-2 h-5 w-5" />
        Add Task
      </Button>
    </form>
  )
}

