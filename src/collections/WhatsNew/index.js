import { anyone } from '../access/anyone'
import { adminsAndEditors } from '../access/adminsAndEditors'

export const WhatsNew = {
  slug: 'whats-new',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: anyone,
    create: adminsAndEditors,
    update: adminsAndEditors,
    delete: adminsAndEditors,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      unique: true,
      required: true,
      maxLength: 80,
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'details',
      type: 'text',
      unique: true,
      required: true,
      maxLength: 150,
    },
  ],
}
