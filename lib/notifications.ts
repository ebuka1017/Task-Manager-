import { scheduleJob } from 'node-schedule'
import pool from './db'

export function setupNotifications() {
  scheduleJob('0 */3 * * *', async function() {
    try {
      const result = await pool.query('SELECT user_id, COUNT(*) FROM tasks WHERE completed = false GROUP BY user_id')
      
      for (const row of result.rows) {
        const { user_id, count } = row
        // Here you would typically send a push notification or email to the user
        console.log(`User ${user_id} has ${count} uncompleted tasks`)
      }
    } catch (error) {
      console.error('Error sending notifications:', error)
    }
  })
}

