import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from 'lucide-react'

type TodoItemProps = {
  todo: {
    id: string
    text: string
    completed: boolean
    category: 'personal' | 'work' | 'groceries'
  }
  onToggle: () => void
  onDelete: () => void
}

const getCategoryColor = (category: 'personal' | 'work' | 'groceries') => {
  switch (category) {
    case 'personal':
      return 'bg-[#FF7763]/10 text-[#FF7763] dark:bg-[#FF7763]/20 dark:text-[#FF7763]/90'
    case 'work':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
    case 'groceries':
      return 'bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-300'
  }
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 group hover:bg-background/50 transition-colors">
      <div className="flex items-center gap-4">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={onToggle}
          className="h-6 w-6 rounded-lg border-2 border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary"
        />
        <div className="flex items-center gap-3">
          <span className={`${
            todo.completed 
              ? 'line-through text-muted-foreground' 
              : 'text-foreground'
          }`}>
            {todo.text}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-lg font-medium ${getCategoryColor(todo.category)}`}>
            {todo.category}
          </span>
        </div>
      </div>
      <button 
        onClick={onDelete} 
        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  )
}

