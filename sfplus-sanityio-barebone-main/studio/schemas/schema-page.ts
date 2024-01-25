import {defineType, defineField, defineArrayMember} from '@sanity-typed/types'

const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', title: 'Alt', type: 'string'}],
    }),
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'string'}),
    defineField({name: 'primaryUrl', title: 'Primary URL', type: 'string'}),
    defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'string'}),
    defineField({name: 'secondaryUrl', title: 'Secondary URL', type: 'string'}),
    defineField({
      name: 'episodes',
      title: 'Episodes',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'episode' as const}]})],
    }),

    defineField({
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'blockHero'} as const, {type: 'blockEpisodesCarousel'} as const],
        }),
      ],
      hidden: false,
    }),
  ],
})

export default page
