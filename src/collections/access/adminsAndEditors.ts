import type { Access } from 'payload'
import { User } from '@/payload-types'

export const adminsAndEditors: Access<User> = ({ req }) => {
  return req.user?.role === 'admin' || req.user?.role === 'editor'
}
