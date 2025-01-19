'use client'

import { useState, useEffect } from 'react'
import { collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, doc, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthProvider'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

type Todo = {
  id: string
  text: string
  completed: boolean
  category: 'personal' | 'work' | 'groceries'
  createdAt: string
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const { user } = useAuth()

  useEffect(() => {
    if (!user) return

    const q = query(
      collection(db, 'todos'), 
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    )
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Todo[]
      setTodos(todosData)
    })

    return () => unsubscribe()
  }, [user])

  const addTodo = async (text: string, category: 'personal' | 'work' | 'groceries') => {
    if (!user) return
    await addDoc(collection(db, 'todos'), {
      text,
      completed: false,
      category,
      userId: user.uid,
      createdAt: new Date().toISOString()
    })
  }

  const toggleTodo = async (id: string, completed: boolean) => {
    await updateDoc(doc(db, 'todos', id), { completed: !completed })
  }

  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div className="space-y-4">
      <div className="bg-card/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-border/50">
        <AddTodo onAdd={addTodo} />
      </div>
      
      <div className="bg-card/60 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50 divide-y divide-border/50">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id, todo.completed)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
        {todos.length === 0 && (
          <div className="px-6 py-8 text-center text-muted-foreground">
            No tasks yet. Add one above to get started.
          </div>
        )}
      </div>
    </div>
  )
}

