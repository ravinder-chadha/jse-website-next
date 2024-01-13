import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Podcast',
  name: 'podcast',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'audio',
      title: 'Audio',
      type: 'file',
      options: {accept: 'audio/*'},
    }),
  ],
})
