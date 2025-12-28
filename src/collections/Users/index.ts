import { CollectionConfig } from 'payload'
import { isAdmin } from '../access/admins'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => {
      return user?.role !== 'admin'
    },
  },
  auth: {
    tokenExpiration: 7200,
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        if (user?.role === 'admin') {
          return true
        }

        return {
          id: {
            equals: user.id,
          },
        }
      }

      return false
    },
    create: isAdmin,
    update: () => false,
    delete: isAdmin,
    // admin: admins,
  },
  fields: [
    // Email added by default
    {
      name: 'role',
      type: 'select',
      saveToJWT: true,
      access: {
        update: () => false,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
    },
  ],
}
