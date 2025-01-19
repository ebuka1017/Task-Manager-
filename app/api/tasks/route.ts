import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import pool from '@/lib/db'

export async function GET() {
  const session = await getServerSession()

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [session.user.id])
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession()

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { text, category } = await request.json()

  try {
    const result = await pool.query(
      'INSERT INTO tasks (user_id, text, category) VALUES ($1, $2, $3) RETURNING *',
      [session.user.id, text, category]
    )
    return NextResponse.json(result.rows[0])
  } catch (error) {
    console.error('Error creating task:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

