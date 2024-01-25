import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'

export const BlockHero = defineType({
  name: 'blockHero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({type: 'block'} as const)],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'string'}),
    defineField({name: 'primaryUrl', title: 'Primary URL', type: 'string'}),
    defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'string'}),
    defineField({name: 'secondaryUrl', title: 'Secondary URL', type: 'string'}),
  ],
})

export const BlockEpisodesCarousel = defineType({
  name: 'blockEpisodesCarousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    defineField({
      name: 'episodes',
      title: 'Episodes',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'episode'} as const]})],
    }),
  ],
})

export default [BlockHero, BlockEpisodesCarousel]
