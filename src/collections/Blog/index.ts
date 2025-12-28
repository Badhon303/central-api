import { anyone } from '../access/anyone'
import { adminsAndEditors } from '../access/adminsAndEditors'
import { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blogs',
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
      name: 'details',
      type: 'text',
      unique: true,
      required: true,
      maxLength: 999999,
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
