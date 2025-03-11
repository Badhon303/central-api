import { anyone } from '../access/anyone'
import { adminsAndEditors } from '../access/adminsAndEditors'

export const Job = {
  slug: 'jobs',
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
      maxLength: 99,
    },
    {
      name: 'designation',
      type: 'text',
      maxLength: 99,
    },
    {
      name: 'jobType',
      type: 'select',
      options: [
        {
          label: 'Onsite',
          value: 'onsite',
        },
        {
          label: 'Remote',
          value: 'remote',
        },
        {
          label: 'Hybrid',
          value: 'hybrid',
        },
      ],
    },
    {
      name: 'education',
      type: 'text',
      maxLength: 99,
    },
    {
      name: 'yearOfExperience',
      type: 'number',
      max: 50,
      min: 0,
    },
    {
      name: 'deadline',
      type: 'date',
    },
    {
      name: 'details',
      type: 'richText',
      // Pass the Lexical editor here and override base settings as necessary
    },
  ],
}
