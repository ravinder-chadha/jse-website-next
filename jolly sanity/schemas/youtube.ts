import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'Youtube',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'string',
      })
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
