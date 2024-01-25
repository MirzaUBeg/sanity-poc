import {defineType, defineField, defineArrayMember} from '@sanity-typed/types'
const series = defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}}),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'Alt', type: 'string'}],
    },
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'string'}),
    defineField({name: 'primaryUrl', title: 'Primary URL', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
  ],
})

export default series
