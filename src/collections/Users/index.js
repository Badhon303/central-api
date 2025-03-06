import { admins } from '../access/admins'

export const Users = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
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
    create: admins,
    update: () => false,
    delete: admins,
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
