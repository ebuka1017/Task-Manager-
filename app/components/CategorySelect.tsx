import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type CategorySelectProps = {
  value: 'personal' | 'work' | 'groceries'
  onChange: (value: 'personal' | 'work' | 'groceries') => void
}

export default function CategorySelect({ value, onChange }: CategorySelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[140px] h-12 rounded-xl bg-background/50 border-border/50">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent className="bg-background/95 backdrop-blur-xl border-border/50">
        <SelectItem value="personal">Personal</SelectItem>
        <SelectItem value="work">Work</SelectItem>
        <SelectItem value="groceries">Groceries</SelectItem>
      </SelectContent>
    </Select>
  )
}

