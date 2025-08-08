import { anyone } from '../access/anyone'
import { adminsAndEditors } from '../access/adminsAndEditors'

export const Event = {
  slug: 'events',
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
      name: 'location',
      type: 'text',
      maxLength: 999,
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'endDate',
      type: 'date',
      validate: (value, { siblingData }) => {
        // Only run validation if both startDate and endDate have values
        if (siblingData.startDate && value) {
          // Compare dates to ensure endDate is not before startDate
          if (new Date(value) < new Date(siblingData.startDate)) {
            return 'End date cannot be before the start date.'
          }
        }
        return true
      },
    },
    {
      name: 'description',
      type: 'text',
      maxLength: 999999,
    },
    {
      name: 'link',
      type: 'text',
      maxLength: 999999,
      validate: (value) => {
        if (value) {
          // Regular expression to validate a URL
          const urlRegex =
            /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}([a-zA-Z]{2,})([\/\w\.-]*)*\/?(\?[^\s]*)?$/
          if (!urlRegex.test(value)) {
            return 'Please enter a valid URL.'
          }
        }
        return true
      },
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
