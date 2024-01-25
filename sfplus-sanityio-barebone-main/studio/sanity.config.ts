import type {DocumentValues, InferSchemaValues} from '@sanity-typed/types'
import {defineConfig} from '@sanity-typed/types'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {referenced} from '@sanity-typed/types'

const config = defineConfig({
  name: 'default',
  title: 'sfplus-sanityio-02',

  projectId: 'xfhtgwsd',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) => {
        return S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter((listItem) => {
              return !listItem.getId()?.startsWith('block')
            }),

            S.divider(),
            S.listItem()
              .title('Blocks')
              .child(
                S.list()
                  .title('Blocks')
                  .items([
                    ...S.documentTypeListItems().filter((listItem) => {
                      return listItem.getId()?.startsWith('block')
                    }),
                  ]),
              ),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

export default config

export type SanityValues = InferSchemaValues<typeof config>

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type ExtractReferencedType<
  T extends ReadonlyArray<unknown>,
  S extends keyof ElementType<T>,
> = ElementType<T>[S]
