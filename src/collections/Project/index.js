import { anyone } from '../access/anyone'
import { adminsAndEditors } from '../access/adminsAndEditors'

export const Project = {
  slug: 'projects',
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
      maxLength: 50,
    },
    {
      name: 'description',
      type: 'text',
      maxLength: 999999,
    },
    {
      name: 'timeline',
      type: 'text',
      maxLength: 50,
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
