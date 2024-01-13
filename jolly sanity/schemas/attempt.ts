import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'attempt',
  title: 'Attempt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name:'subTitle',
        title:"SubTitle",
        type:"string"
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'contributors',
        title: 'Prominent Contributors',
        type: 'array',
        of:[{type:'contributor'}]
    }),
    defineField({
      name: 'publisedAt',
      title: 'Published Date',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
