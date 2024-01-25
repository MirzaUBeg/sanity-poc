import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

const episode = defineType({
  name: 'episode',
  title: 'Episode',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'seasonNumber', title: 'Season Number', type: 'number'}),
    defineField({name: 'episodeNumber', title: 'Episode Number', type: 'number'}),
    defineField({name: 'sortOrder', title: 'Sort Order', type: 'number'}),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series' as const}],
    }),
  ],
})


export default episode
