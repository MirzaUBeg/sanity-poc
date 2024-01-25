import {defineField, defineType} from '@sanity-typed/types'

const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}}),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt', type: 'string'})],
    },
    defineField({name: 'url', title: 'URL', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block', name: 'contentBlocks'}],
    }),
    defineField({name: 'startDate', title: 'Start on Date', type: 'date'}),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(20),
    }),
  ],
})

export default event
